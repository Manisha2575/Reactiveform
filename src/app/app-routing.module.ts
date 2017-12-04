import { CaretakerComponent } from "./caretaker/caretaker.component";
import { FacultyComponent } from "./faculty/faculty.component";
import { NurseComponent } from "./nurse/nurse.component";
import { StudentComponent } from "./student/student.component";
import { NgModule } from "@angular/core";
import {RouterModule,Routes} from "@angular/router";

const routes: Routes = [
    {
        path:'carertaker',
        component:CaretakerComponent
    },
    {
        path:'faculty',
        component:FacultyComponent
    },
    {
        path:'nurse',
        component:NurseComponent
    },
    {
        path:'student',
        component:StudentComponent

    }
];
@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{
    
}