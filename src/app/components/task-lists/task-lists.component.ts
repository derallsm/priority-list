import { Component, OnInit } from '@angular/core';
import { MainTask } from 'src/app/models/task.model';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-lists',
  templateUrl: './task-lists.component.html',
  styleUrls: ['./task-lists.component.css']
})
export class TaskListsComponent implements OnInit {

  taskLists: MainTask[] = [];

  constructor( private taskService: TaskService ) {
   }

  ngOnInit( ) {
    this.taskLists = this.taskService.getTasks();
    console.log(this.taskLists);
  }

  deleteTask(item: MainTask) {
    //Show validation
    let index: number = this.taskLists.indexOf(item);
    this.taskLists.splice(index, 1);
  }

}
