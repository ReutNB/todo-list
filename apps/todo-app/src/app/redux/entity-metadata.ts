import { EntityMetadataMap, EntityDataModuleConfig } from '@ngrx/data';
import { TaskItem } from '../models/task.model';

export function doneTasksFilter(entities: { statusDone: boolean }[], search: boolean) {
  return entities.filter(e => e.statusDone === search);
}
export const taskEntityMetadata: EntityMetadataMap = {
  Task:{
    selectId: (task:TaskItem) => task.id,
    filterFn: doneTasksFilter
  }
};

