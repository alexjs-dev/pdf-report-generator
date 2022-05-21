// Initializes the `generated-reports` service on path `/generated-reports`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { GeneratedReports } from './generated-reports.class';
import hooks from './generated-reports.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'generated-reports': GeneratedReports & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/generated-reports', new GeneratedReports(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('generated-reports');

  service.hooks(hooks);
}
