/* eslint-disable @typescript-eslint/no-var-requires */
import { Worker } from 'worker_threads';
import { Application } from '../../declarations';
import { GREEN_TEXT } from '../../consts';
const path = require('path');
const currentPath = path.resolve(__dirname);

const generateReport = () =>
  new Promise((resolve, reject) => {
    const worker = new Worker(`${currentPath}/worker.js`, {});
    worker.on('message', (result) => resolve(result));
    worker.on('error', (err) => {
      console.error(err);
      reject(err);
    });
    worker.on('exit', (code) => {
      if (code !== 0) {
        reject(new Error(`stopped with ${code} exit code`));
      }
    });
  });

const createReport = async (app: Application, data: any) =>
  await app.service('generated-reports').create(data);

export const runWorker = (app: Application) => async (initialData: any) => {
  console.log(GREEN_TEXT, 'Worker started', initialData);
  const reportData: any = await generateReport();
  const data = await createReport(app, { ...reportData, ...initialData });

  console.log(GREEN_TEXT, 'Worker finished');
  console.log(JSON.stringify(data));
};
