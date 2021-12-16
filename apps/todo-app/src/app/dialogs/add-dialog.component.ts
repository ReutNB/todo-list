import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {Component, Inject} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { TodoService } from '../services/todo.service';
import { AddDialogConfig, TaskItem, TaskPriority } from '../models/task.model';
import { MatNativeDateModule } from '@angular/material/core';
import { NumberFilter } from 'ag-grid-community';
import { config } from 'rxjs';
import * as _ from "lodash";

@Component({
  selector: 'todo-list-add.dialog',
  templateUrl: './add-dialog.component.html',
  styleUrls: ['./add-dialog.component.scss']
})

export class AddDialogComponent {
  public taskDate: Date = new Date();
  public taskPriority = [TaskPriority.High, TaskPriority.Medium, TaskPriority.Low];
    // {id:1 , name:"High"},
    // {id:2 , name:"Medium"},
    // {id:3 , name:"Low"}]

  formControl1 = new  FormControl('', Validators.required);
  taskId : number = 0;
  data: TaskItem;
  editMode: boolean ;
  confirmLabel: string; 
  dialogHeader: string;
  constructor(public dialogRef: MatDialogRef<AddDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public config: AddDialogConfig,
              public todoService: TodoService) { 
              this.data = _.cloneDeep(config.task);
              this.editMode = config.editMode? config.editMode: false;
              this.dialogHeader = this.editMode? "Edit Task": "Create new Task";
              this.confirmLabel = this.editMode? "Edit": "Save";
              }
    
 

  getErrorMessage() {
     'Required field';
  }

  submit() {
  // emppty stuff
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  public confirmAdd(): void {
    this.data.dueDate = this.taskDate.valueOf();
    //this.data.priority = this.taskPriority[this.data.priority].name;
    this.editMode? this.todoService.update(this.data) : this.todoService.add(this.data);
  }

  convertPriorityEnumToString(value: TaskPriority){
      return TaskPriority[value];
  }
}
