import { disallow } from 'feathers-hooks-common';
import { validateReportHook } from './hooks/validate-report';
import { generateReportHook } from './hooks/generate-report-hook';

export default {
  before: {
    all: [],
    find: [],
    get: [],
    create: [validateReportHook],
    update: [disallow()],
    patch: [disallow()],
    remove: [disallow()],
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [generateReportHook],
    update: [],
    patch: [],
    remove: [],
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },
};
