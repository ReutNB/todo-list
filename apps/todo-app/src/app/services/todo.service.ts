import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TaskItem } from '../models/task.model';

import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory
} from '@ngrx/data';

@Injectable({
  providedIn: 'root'
})
export class TodoService extends EntityCollectionServiceBase<TaskItem> {
 // API_SERVER = "http://localhost:3333/api";

  constructor(private httpClient: HttpClient,
              private serviceElementsFactory: EntityCollectionServiceElementsFactory) { 
                super('Task', serviceElementsFactory);
              }

 
}