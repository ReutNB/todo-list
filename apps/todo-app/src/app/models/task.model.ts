import * as moment from "moment";
import { Guid } from "guid-typescript";
import { All } from "@nestjs/common";
import { v4 as uuid } from 'uuid';

export enum TaskPriority{
  High = 1,
  Medium = 2,
  Low = 3
}

export type AddDialogConfig = {
  task: TaskItem;
  editMode?: boolean;
}

export enum FilterType {
  All = 1,
  Done = 2,
  DueDateOver= 3
}

export class TaskItem  {
    id: number;
    description: string;
    dueDate: number;
    priority: number;
    statusDone: boolean = false;

    constructor(id?: number , taskDescripion?: string){
      this.id = Number(uuid());
      this.description = taskDescripion?  taskDescripion : "";
      this.dueDate = moment.now();
      this.priority = 1;
    }
  }
  
  