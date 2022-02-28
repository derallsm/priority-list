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
import { AppRoutingModule } from './app-routing.module';




// const appRoutes: Routes = [
//   { path: '', component: TaskListsComponent},
//   { path: 'new-task', component: TaskComponent},
//   { path: 'edit-task', component: TaskComponent},
// ];

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
    // RouterModule.forRoot(appRoutes),
    NgbModule,
    AppRoutingModule
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
