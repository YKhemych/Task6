import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import keys from './config/keys';

@Module({
  imports: [UsersModule, MongooseModule.forRoot(keys.mongoURL)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
