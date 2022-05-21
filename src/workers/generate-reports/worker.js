/* eslint-disable @typescript-eslint/no-var-requires */
const { parentPort } = require('worker_threads');
const { generateMockData } = require('./mock');

const run = async () => {
  const mockData = await generateMockData();
  parentPort.postMessage({ ...mockData });
};

run().catch((err) => console.error(err));
