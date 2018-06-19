# Scal.io test task

## Test project
`Angular 6, RxJs 6, Node.js`

## Setup App
* Install Node.js 8
* `git clone https://github.com/makspotter/Scal-io.git Scal-io`
* `cd Scal-io`
* `npm install`

## Run Test server
* Run `npm run server` for a run test node.js server. Server will start on `http://localhost:3000/`.
* Endpoint `POST /login` will generate random answer with code 200 or 403

## Run Application
### Development server
Run `npm run start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Build for developing
Run `npm run build:dev` to build the project for developing. The build artifacts will be stored in the `dist/scal-io` directory.

### Build for production
Run `npm run build:prod` to build the project for production. The build artifacts will be stored in the `dist/scal-io` directory.

### Lint the project
Run `npm run lint` to lint project.

### Running unit tests
Run `npm run test` to execute the unit tests.

### Analyze bundle report
Run `npm run bundle-report` build for production and view the bundle analyzer report.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.
