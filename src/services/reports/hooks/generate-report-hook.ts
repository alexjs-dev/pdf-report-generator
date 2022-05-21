/* eslint-disable @typescript-eslint/ban-ts-comment */
import { HookContext } from '@feathersjs/feathers';
import { runWorker } from '../../../workers/generate-reports';
import { omitField } from '../../../util/helpers';
import { validateThrottle } from './throttle-report';

const runningWorkers = new Map();
export const generateReportHook = (ctx: HookContext) => {
  const app = ctx.app;
  const baseData = ctx.result;
  validateThrottle(runningWorkers, baseData);
  const data = omitField('id')(baseData);
  // @ts-ignore
  runWorker(app)(data);
  runningWorkers.set(baseData.currencyCode, new Date());
  return ctx;
};
