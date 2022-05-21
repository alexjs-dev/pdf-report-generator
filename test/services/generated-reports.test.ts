import app from '../../src/app';

describe('\'generated-reports\' service', () => {
  it('registered the service', () => {
    const service = app.service('generated-reports');
    expect(service).toBeTruthy();
  });
});
