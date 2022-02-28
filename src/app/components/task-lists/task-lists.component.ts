import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MainTask } from 'src/app/models/task.model';
import { TaskService } from 'src/app/services/task.service';


@Component({
  selector: 'app-task-lists',
  templateUrl: './task-lists.component.html',
  styleUrls: ['./task-lists.component.scss']
})
export class TaskListsComponent implements OnInit {

  taskLists: MainTask[] = [];
  private itemToDelete: MainTask;

  constructor( private taskService: TaskService, private modal: NgbModal ) {
   }

  ngOnInit( ) {
    this.taskLists = this.taskService.getTasks();
  }

  deleteTask(item: MainTask, content) {
    this.modal.open(content);
    this.itemToDelete = item;
  }

  // editTask(item: MainTask) {
  //   // console.log('inside the edit function');
  //   // this.taskService.updateTask(item);
  // }

  close() {
    this.modal.dismissAll();
  }

  confirmDelete() {
    this.taskLists = this.taskService.deleteTask(this.itemToDelete);
    this.modal.dismissAll();
  }

}
