import { InMemoryDBEntity } from '@nestjs-addons/in-memory-db';

export interface TaskEntity extends InMemoryDBEntity {
  id: string;
  title: string;
  dueDate: Date;
  priority: number;
  status: string;
}
