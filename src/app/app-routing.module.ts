import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TaskListsComponent } from "./components/task-lists/task-lists.component";
import { TaskComponent } from "./components/task/task.component";


const appRoutes: Routes = [
    {path: '', component: TaskListsComponent},
    {path: 'new-task', component: TaskComponent},
    {path: 'edit-task', component: TaskComponent},
];


@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
