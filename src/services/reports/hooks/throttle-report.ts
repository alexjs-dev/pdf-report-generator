import { REPORT_GENERATION_THROTTLE_IN_SECONDS } from '../../../consts';

export const validateThrottle = (
  runningWorkers: Map<any, any>,
  baseData: any
) => {
  if (runningWorkers.has(baseData.currencyCode)) {
    const timestamp = runningWorkers.get(baseData.currencyCode);
    if (Date.now() - timestamp < REPORT_GENERATION_THROTTLE_IN_SECONDS) {
      throw new Error('Not so fast!');
    }
  }
};
