import { HttpClient, HttpEventType } from '@angular/common/http';
import { ColDef, GridApi, GridOptions, GridReadyEvent } from 'ag-grid-community';
import { Store } from '@ngrx/store';
import { AfterViewInit, Component, inject, OnInit, ViewChild } from '@angular/core';
import * as _ from "lodash";


//import 'ag-grid-enterprise';

import { Observable, interval, ReplaySubject } from 'rxjs';
import { TodoService } from '../../services/todo.service';
import { AddDialogConfig, FilterType, TaskItem, TaskPriority } from '../../models/task.model';
import { MatTableDataSource } from '@angular/material/table';
//import { EditableCellRendererComponent } from './editable-cell-renderer/editable-cell-renderer.component';
import {DataSource, SelectionModel} from '@angular/cdk/collections';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { AddDialogComponent } from '../../dialogs/add-dialog.component';
import { MatSort, Sort } from '@angular/material/sort';
import { NgIf } from '@angular/common';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements AfterViewInit {
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns: string[] = ['TaskSelected', 'title','dueDate', 'priority', 'actions'];
  //dataSource: TodoDataSource; 
  dataSource: MatTableDataSource<TaskItem> ;
  todos$: Observable<TaskItem[]>;
  dialogRef: MatDialogRef<AddDialogComponent> | undefined;
  filteredTodos$: Observable<TaskItem[]>;
  labelAllFilter:string = FilterType[1];
  labelActiveFilter:string = FilterType[2];
  selection = new SelectionModel<TaskItem>(true, []);

  constructor(private todoService: TodoService,
              public dialog: MatDialog) {
    this.todos$ = todoService.entities$;
    this.todoService.setFilter(true);
    this.filteredTodos$ = this.todoService.filteredEntities$;
  }

  ngAfterViewInit() {
        this.todoService.getAll().subscribe(todos => {
        this.dataSource = new MatTableDataSource(todos);
        this.dataSource.sort = this.sort;
        
      })
  }

  ngOnInit() {

     
  }
  sortData(sortState: Sort) {
    if (sortState.direction) {
    } else {
    } 
  }

  getTodos() {
    this.todoService.getAll();
  }
  deleteTodo(todoId: number) {
    this.todoService.delete(todoId);
    this.refreshTable();
  }

  updateTodo(todo: TaskItem) {
    this.todoService.update(todo);
    this.refreshTable();
  }

  updateTodoActivationMode(todo: TaskItem, active: boolean) {
    let updatedTask = _.clone(todo);
    updatedTask.statusDone = !active;
    this.updateTodo(updatedTask);
    this.refreshTable();
  }


  editTodo(taskItem: TaskItem) {
    const config : MatDialogConfig<AddDialogConfig> = {
      data: {
        task: taskItem,
        editMode: true,
      }
    }

    if (this.dialogRef && this.dialogRef.componentInstance) {
      this.dialogRef.componentInstance.data = taskItem;
    }
    this.dialogRef = this.dialog.open( AddDialogComponent, 
     config);

    this.dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        this.refreshTable();
      }
    });
  }
  deleteAll(){
    this.dataSource.data.forEach(todo=>{
      if(todo.statusDone){
        this.todoService.delete(todo);
      }
    });

    this.refreshTable();
  }

  addTodo(){
    const config : MatDialogConfig<AddDialogConfig> = {
      data: {
        task: new TaskItem(),
        //nextId : this.idIndex
      }
    }

    const dialogRef = this.dialog.open( AddDialogComponent, 
     config);

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        this.refreshTable();
      }
      else{

      }
    });
  }

  refreshTable(){
    this.todoService.getAll().subscribe(todos=>{
      this.dataSource.data =  todos;
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  filterByActive(event:any){
    if(event.value == FilterType.All){
      this.refreshTable();
    }
    else if(event.value == FilterType.Done)
    this.filteredTodos$.subscribe(todo=>{
      this.dataSource.data = todo;
    })
  }

  convertPriorityEnumToString(value: number){
    return TaskPriority[value];
}

 /** Whether the number of selected elements matches the total number of rows. */
 isAllSelected() {
  const numSelected = this.selection.selected.length;
  const numRows = this.dataSource.data.length;
  return numSelected === numRows;
}

/** Selects all rows if they are not all selected; otherwise clear selection. */
masterToggle() {
  this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
      this.refreshTable();
}


}





