import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const whitelist = ['http://localhost:3000', 'https://saving-wise.azurewebsites.net'];
  // app.enableCors({
  // origin: function (origin, callback) {
  //   if (whitelist.indexOf(origin) !== -1) {      
  //     callback(null, true)
  //   } else {
  //     callback(new Error('Not allowed by CORS'))
  //   }
  // },
  //   allowedHeaders: 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept, Observe',
  //   methods: "GET,PUT,POST,DELETE,UPDATE,OPTIONS",
  //   credentials: true,
  // });

  await app.listen(process.env.PORT || 4200);
}
bootstrap();
