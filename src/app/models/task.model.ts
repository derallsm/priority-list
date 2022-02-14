export class Task {
    task: string;
    category: string;
    priority: string;
    creationDate: Date;
    dueDate: Date;
    comment: string;
}

export class MainTask extends Task {
    subtask : Task[];
}
