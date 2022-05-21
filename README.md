# pdf-report-generator-backend-app

> an API generating PDF reports and a UI requesting and downloading these reports. Report format could be any table data. both API and UI should be able to handle long lasting requests/jobs.

## About

This project uses [Feathers](http://feathersjs.com). An open source web framework for building modern real-time applications.

- This project uses web workers to handle long tasks.
- Generates PDF reports
- No Database needed (In Memory DB)
- Frontend uses socket.io and TailwindCss (localhost:3030)

## Getting Started

### Development mode

`yarn && yarn dev`

### Production mode

`yarn && yarn start`
