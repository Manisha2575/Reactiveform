import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { FacultyComponent } from './faculty/faculty.component';
import { NurseComponent } from './nurse/nurse.component';
import { CaretakerComponent } from './caretaker/caretaker.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { ReactiveComponent } from './reactive/component/reactive.component';
import { AppRoutingModule } from './app-routing.module';



@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    FacultyComponent,
    NurseComponent,
    CaretakerComponent,
    ReactiveComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
