'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.cleanRequests = void 0;
const node_cron_1 = __importDefault(require('node-cron'));
function cleanRequests(uuid, requestCounts, cleanupTasks) {
  const task = node_cron_1.default.schedule('* * * * *', () => {
    requestCounts.delete(uuid);
    cleanupTasks.delete(uuid);
    task.stop();
  });
  return task;
}
exports.cleanRequests = cleanRequests;
