import mongoose from 'mongoose';
import { MONGODB_URI } from '../utils/constants';
import { AnalyticsModel } from '../modules/analytics/analytics.models';
import figlet from 'figlet';
import { ObjectId } from 'mongodb';
import { getOriginalUrl, getSections, getUrlParams } from '../modules/analytics/analytics.utils';

import { createAnalyticParams } from '../modules/analytics/analytics.actions';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { Command } = require('commander');
//
//
// program
//   .option('--first')
//   .option('-s, --separator <char>');
//
// program.parse();
//
// const options = program.opts();
// const limit = options.first ? 1 : undefined;
// console.log(program.args[0].split(options.separator, limit));

const updateAnalyticCollections = async (page = 0) => {
  console.log(`Page selected ${page}`);

  await mongoose.connect(MONGODB_URI);

  const count = await AnalyticsModel.countDocuments();
  const pages = Math.ceil(count / 50000);

  if (page > pages || page < 0) {
    throw new Error(`La cantidad de paginas debe estar entre 0 y ${pages}`);
  }

  try {
    for (let i = page; i < pages; i++) {
      console.log(`${i}/${pages}`);
      const response = await AnalyticsModel.aggregate([
        {
          $skip: i,
        },
        {
          $limit: 50000,
        },
        {
          $match: {
            tenant_id: {
              $ne: new ObjectId('65a5460f29827c2cabe00a12'),
            },
            original_url: {
              $eq: null,
            },
          },
        },
      ]);

      for (const responseElement of response) {
        const { _id, ...params } = responseElement;
        const section = getSections(params.url || 'https://vanguardia.com.mx');
        const urlParams = getUrlParams(params.url || 'https://vanguardia.com.mx');
        const originalUrl = getOriginalUrl(params.url || 'https://vanguardia.com.mx');

        await createAnalyticParams(urlParams.hashParams, _id);
        await createAnalyticParams(urlParams.queryParams, _id);

        const data = {
          ...params,
          url: params.url || 'https://vanguardia.com.mx',
          ...section,
          tenant_id: new ObjectId('65b39e5af17e852e77abc149'),
          original_url: originalUrl,
        };
        await AnalyticsModel.findOneAndUpdate(_id, data);
      }
    }
  } catch (e) {
    console.log('e', e);
  }
};

const program = new Command();

program
  .version('1.0.0')
  .description('Update analytics data')
  .option('-p, --page [value]', 'Page of record')
  .parse(process.argv);

const options = program.opts();
console.log(options);
console.log(figlet.textSync('DIGITALROOM'));

if (options.page) {
  const page = typeof options.page === 'string' ? parseInt(options.page) : 0;
  updateAnalyticCollections(page)
    .then((data) => console.log('FINISH'))
    .catch((e) => {
      console.error('e', e.message);
    });
}
