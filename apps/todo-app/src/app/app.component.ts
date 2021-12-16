import { Component, TemplateRef, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '@todo-list/api-interfaces';
import { ColDef, GridApi, GridOptions, GridReadyEvent } from 'ag-grid-community';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { AddDialogComponent } from './dialogs/add-dialog.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TodoService } from './services/todo.service';
import { TaskItem } from './models/task.model';
import { observable, Observable, of } from 'rxjs';
import { EntityCollectionService, EntityCollectionServiceFactory, EntityMetadataMap } from '@ngrx/data';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'todo-list-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  private dialogConfig: MatDialogConfig<any> = {};

  constructor(private http: HttpClient) {
                
  }

}

