import mongoose from 'mongoose';
import { MONGODB_URI } from '../utils/constants';
import { AnalyticsNewModel } from '../modules/analytics/analytics.models';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { Command } = require('commander');
import figlet from 'figlet';

export const main = async (page = 0) => {
  const i = page;
  await mongoose.connect(MONGODB_URI);
  const response = await AnalyticsNewModel.find()
    .skip(i * 50000)
    .limit(50000);

  for (const responseElement of response) {
    await AnalyticsNewModel.deleteOne(responseElement._id);
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
console.log(figlet.textSync('DIGITALROOM DELETE'));

if (options.page) {
  const page = typeof options.page === 'string' ? parseInt(options.page) : 0;
  main(page)
    .then((data) => console.log('FINISH'))
    .catch((e) => {
      console.error('e', e.message);
    });
}
