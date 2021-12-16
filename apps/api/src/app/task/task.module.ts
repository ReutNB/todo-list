import { Module } from '@nestjs/common';
import { TaskController } from './task.controller';
import { InMemoryDBModule } from '@nestjs-addons/in-memory-db';

@Module({
  imports: [InMemoryDBModule.forFeature('task')],
  controllers: [TaskController],
})
export class TaskModule {}
