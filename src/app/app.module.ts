import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { TaskComponent } from './components/task/task.component';
import { FooterComponent } from './components/footer/footer.component';
import { TaskListsComponent } from './components/task-lists/task-lists.component';
import { TaskService } from './services/task.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';




const appRoutes: Routes = [
  { path: 'task', component: TaskComponent},
  { path: '', component: TaskListsComponent},
  // { path: 'task-lists', component: TaskListsComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TaskComponent,
    FooterComponent,
    TaskListsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    NgbModule
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
