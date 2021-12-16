import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgGridModule } from 'ag-grid-angular';
import { MatCardModule } from "@angular/material/card";

import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatBadgeModule } from "@angular/material/badge";
import { MatButtonModule } from "@angular/material/button";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatChipsModule } from "@angular/material/chips";
import { MatNativeDateModule, MatOptionModule, MatRippleModule } from "@angular/material/core";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatDialogModule } from "@angular/material/dialog";
import { MatDividerModule } from "@angular/material/divider";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";
import { MatMenuModule } from "@angular/material/menu";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatRadioModule } from "@angular/material/radio";
import { MatSelectModule } from "@angular/material/select";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatSliderModule } from "@angular/material/slider";
import { MatSortModule } from "@angular/material/sort";
import { MatStepperModule } from "@angular/material/stepper";
import { MatTableModule } from "@angular/material/table";
import { MatTabsModule } from "@angular/material/tabs";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatTreeModule } from "@angular/material/tree";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AddDialogComponent } from './dialogs/add-dialog.component';
import { StoreModule } from '@ngrx/store';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { DefaultDataServiceConfig, EntityDataModule, EntityDefinitionService, HttpUrlGenerator } from '@ngrx/data';
import { EffectsModule } from '@ngrx/effects';
import { taskEntityMetadata } from './redux/entity-metadata';
import { CustomUrlHttpGeneralGeneratorService } from './services/custom-url-http-general-generator.service';

// const defaultDataServiceConfig: DefaultDataServiceConfig = { 
//   root: 'http://localhost:3333/api/task',
//   timeout: 3000, // request timeout 
// }

@NgModule({
  declarations: [
    AppComponent, 
    AddDialogComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule ,
    BrowserAnimationsModule, AgGridModule.withComponents([]), 
    MatToolbarModule,
  MatIconModule,
  MatListModule,
  MatDividerModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatTableModule,
  MatPaginatorModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSortModule,
  MatOptionModule,
  MatInputModule ,
  MatSelectModule,
  MatCheckboxModule,
  MatRadioModule,
  MatTooltipModule,
  EffectsModule.forRoot([]), 
  EntityDataModule.forRoot({}),
  StoreModule.forRoot({}, {}),
  ],
  providers: [
   //{provide: DefaultDataServiceConfig, useValue:defaultDataServiceConfig},
   { provide: HttpUrlGenerator, useClass: CustomUrlHttpGeneralGeneratorService }
  ],
  bootstrap: [AppComponent],
  entryComponents: [AddDialogComponent]

})
export class AppModule {
  constructor(entityDefinitionService: EntityDefinitionService){
    entityDefinitionService.registerMetadataMap(taskEntityMetadata);
  }

}
