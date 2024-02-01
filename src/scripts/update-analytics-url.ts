// import mongoose from 'mongoose';
// import { MONGODB_URI } from '../utils/constants';
// import { AnalyticOldModel, AnalyticsModel } from '../modules/analytics/analytics.models';
// import figlet from 'figlet';
// import { ObjectId } from 'mongodb';
// import { getOriginalUrl, getSections, getUrlParams } from '../modules/analytics/analytics.utils';
//
// import { createAnalyticParams } from '../modules/analytics/analytics.actions';
// import moment from 'moment';
// // eslint-disable-next-line @typescript-eslint/no-var-requires
// const { Command } = require('commander');
// //
// //
// // program
// //   .option('--first')
// //   .option('-s, --separator <char>');
// //
// // program.parse();
// //
// // const options = program.opts();
// // const limit = options.first ? 1 : undefined;
// // console.log(program.args[0].split(options.separator, limit));
//
// const updateAnalyticCollections = async (page = 0) => {
//   console.log(`Page selected ${page}`);
//
//   await mongoose.connect(MONGODB_URI);
//
//   const cursor: { count: number }[] = await AnalyticOldModel.aggregate([
//     {
//       $match: {
//         created_at: { $gte: moment().subtract(1, 'month').toDate() },
//         section: { $ne: null },
//       },
//     },
//     {
//       $group: {
//         _id: null,
//         count: { $sum: 1 },
//       },
//     },
//   ]);
//
//   const pages = Math.ceil((cursor[0].count || 0) / 50000);
//
//   if (page > pages || page < 0) {
//     throw new Error(`La cantidad de paginas debe estar entre 0 y ${pages}`);
//   }
//
//   try {
//     for (let i = page; i < pages; i++) {
//       console.log(`${i}/${pages}`);
//
//       const response = await AnalyticsModel.find({
//         section: { $ne: null },
//       })
//         .skip(i * 50000)
//         .limit(50000);
//
//       console.log('response', response.length);
//
//       const data = response.map((responseElement) => {
//         const { _id, ...params } = responseElement;
//         const section = getSections(params.url || 'https://vanguardia.com.mx');
//         const originalUrl = getOriginalUrl(params.url || 'https://vanguardia.com.mx');
//         return {
//           ...params,
//           url: params.url || 'https://vanguardia.com.mx',
//           ...section,
//           tenant_id: new ObjectId('65b39e5af17e852e77abc149'),
//           original_url: originalUrl,
//         };
//       });
//
//       await AnalyticsModel.create(data);
//     }
//   } catch (e) {
//     console.log('e', e);
//   }
// };
//
// const program = new Command();
//
// program
//   .version('1.0.0')
//   .description('Update analytics data')
//   .option('-p, --page [value]', 'Page of record')
//   .parse(process.argv);
//
// const options = program.opts();
// console.log(options);
// console.log(figlet.textSync('DIGITALROOM'));
//
// if (options.page) {
//   const page = typeof options.page === 'string' ? parseInt(options.page) : 0;
//   updateAnalyticCollections(page)
//     .then((data) => console.log('FINISH'))
//     .catch((e) => {
//       console.error('e', e.message);
//     });
// }
