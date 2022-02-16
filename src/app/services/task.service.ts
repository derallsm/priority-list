import { Injectable } from '@angular/core';
import { MainTask, Task } from '../models/task.model';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  tasks: MainTask[]  = [];
  subtasks: Task[] = [];


  constructor() {
    const firstTask = {
      task: 'Task Name',
      category: 'Example',
      priority: 'Medium',
      creationDate: new Date(),
      dueDate: new Date(),
      comment: 'This is a comment for the task',
      subtask: []
    };

    this.addTask(firstTask as MainTask);
  }

  getTasks() {
    return this.tasks;
  }

  addTask(task: MainTask) {
    this.tasks.push(task);
  }

  deleteTask(item: MainTask) {
    const index: number = this.tasks.indexOf(item);
    this.tasks.splice(index, 1);
    return this.tasks;
  }

  updateTask(task: MainTask) {

  }
}
