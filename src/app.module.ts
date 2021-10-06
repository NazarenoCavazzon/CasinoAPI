import { Module } from '@nestjs/common';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import config from './config/keys';

@Module({
  imports: [UsersModule, MongooseModule.forRoot(config.mongoURI)],
  controllers: [UsersController],
  providers: [],
})
export class AppModule {}
