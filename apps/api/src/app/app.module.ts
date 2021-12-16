import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InMemoryDBModule } from '@nestjs-addons/in-memory-db';
import { TaskModule } from './task/task.module';

@Module({
  imports: [InMemoryDBModule.forRoot({}), TaskModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
