import { HookContext } from '@feathersjs/feathers';

export const validateReportHook = (ctx: HookContext) => {
  const { data } = ctx;
  if (!data.currencyCode) {
    throw new Error('currencyCode is required');
  }
  return ctx;
};
