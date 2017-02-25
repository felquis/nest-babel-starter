import { NestRunner } from 'nest.js';
import { ApplicationModule } from './modules/app.module';
import { Application } from './app';

NestRunner.run(Application, ApplicationModule);