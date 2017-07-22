import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './modules/app.module';

const app = NestFactory.create(ApplicationModule);

app.then((instance) => (
  instance.listen(3000, () => console.log('Listening on port 3000'))
)).catch((err) => {
  console.log('err', err);
})