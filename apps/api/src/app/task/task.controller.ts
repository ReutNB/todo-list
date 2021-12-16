import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { InMemoryDBService } from '@nestjs-addons/in-memory-db';
import { TaskEntity } from './task.entity';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: InMemoryDBService<TaskEntity>) {
  }

  @Get()
  getAllTasks(): TaskEntity[] {
    return this.taskService.getAll();
  }

  @Get(':id')
  getTask(@Param('id') id: string): TaskEntity {
    return this.taskService.get(id);
  }

  @Post('')
  addTask(@Body() entity: TaskEntity) {
    return this.taskService.create(entity);
  }

  @Put(':id')
  async update(@Param('id') id, @Body() entity: TaskEntity): Promise<any> {
      entity.id = id;//Number(id);
      return this.taskService.update(entity);
  }  
  
  @Delete(':id')
  async delete(@Param('id') id): Promise<any> {
    return this.taskService.delete(id);
  }
}
