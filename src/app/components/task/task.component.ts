import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  NgForm,
  Validators,
  FormArray,
} from '@angular/forms';
import { Priority } from 'src/app/models/priority.model';
import { MainTask, Task } from 'src/app/models/task.model';
import { Router } from '@angular/router';
import { TaskService } from 'src/app/services/task.service';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  priority: Priority[] = [
    { id: 1, name: 'Critical' },
    { id: 2, name: 'High' },
    { id: 3, name: 'Medium' },
    { id: 4, name: 'Low' },
  ];

  taskForm: FormGroup;

  constructor(private router: Router, private taskService: TaskService) {}

  ngOnInit() {
    const subTaskData = {
      task: 'subTask',
      priority: null,
      creationDate: new Date(),
      dueDate: null,
      comment: 'This is a comment for the subtask',
    };

    this.taskForm = new FormGroup({
      task: new FormControl(null, Validators.required),
      category: new FormControl(null, Validators.required),
      priority: new FormControl(null, Validators.required),
      creationDate: new FormControl(new Date().toLocaleDateString()),
      dueDate: new FormControl(null, Validators.required),
      comment: new FormControl(null),
      subtask: new FormArray([new FormControl(subTaskData)]),
    });
  }

  submit() {
    // console.log(this.taskForm);
    this.taskService.addTask(this.taskForm.value as MainTask);
    this.router.navigate(['']);
  }

  clearInput() {
    this.taskForm.reset();
  }


}
