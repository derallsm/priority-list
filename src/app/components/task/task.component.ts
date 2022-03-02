import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
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
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';



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
  validationModal: NgbModal | undefined;

  constructor(
    private router: Router,
    private taskService: TaskService,
    private modal: NgbModal,
    private location: Location,
  ) {}

  ngOnInit() {

    const transferedTask = this.location.getState();

    if (transferedTask["task"] !== undefined) {
      this.taskFormUpdate(transferedTask);
    } else {
      this.buildTaskForm();
    }

    // const subTaskData = {
    //   task: 'subTask',
    //   priority: null,
    //   creationDate: new Date(),
    //   dueDate: null,
    //   comment: 'This is a comment for the subtask',
    // };

    // this.taskForm = new FormGroup({
    //   task: new FormControl(null, Validators.required),
    //   category: new FormControl(null, Validators.required),
    //   priority: new FormControl(null, Validators.required),
    //   creationDate: new FormControl(new Date().toLocaleDateString()),
    //   dueDate: new FormControl(null, Validators.required),
    //   comment: new FormControl(null),
    //   subtask: new FormArray([new FormControl(subTaskData)]),
    // });


    // console.log(this.location.getState());
    // // const value = this.location.getState();
    // const value = Object.keys(this.location.getState()).map(key => this.location.getState()[key]);
    // console.log(value);
    // console.log(Object(this.location.getState()["dueDate"]));
  }

  taskFormUpdate(location) {
    this.taskForm = new FormGroup({
      task: new FormControl( Object(location["task"]) , Validators.required),
      category: new FormControl(Object(location["category"]), Validators.required),
      priority: new FormControl(Object(location["priority"]), Validators.required),
      creationDate: new FormControl(Object(location["creationDate"])),
      dueDate: new FormControl(new Date(Object(location["dueDate"])), Validators.required),
      comment: new FormControl(Object(location["comment"])),
      // subtask: new FormArray([new FormControl(subTaskData)]),
    });
  }

  buildTaskForm() {
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

  submit(invalidForm) {
    if (this.validate()) {
      this.taskService.addTask(this.taskForm.value as MainTask);
      this.router.navigate(['']);
    } else {
      this.invalidFormGroup(invalidForm);
    }
  }

  clearInput() {
    this.taskForm.reset();
  }

  validate() {
    return this.taskForm.valid;
  }

  invalidFormGroup(invalidForm) {
    this.modal.open(invalidForm);
  }

  updateTask(item: MainTask) {
    //Show the info of the task
    // this.taskForm = 
  }


}
