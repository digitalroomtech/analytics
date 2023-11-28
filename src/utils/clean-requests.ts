import cron from 'node-cron';

export function cleanRequests(
  uuid: string,
  requestCounts: Map<string, number>,
  cleanupTasks: Map<string, cron.ScheduledTask>,
) {
  const task = cron.schedule('* * * * *', () => {
    requestCounts.delete(uuid);
    cleanupTasks.delete(uuid);
    task.stop();
  });

  return task;
}
