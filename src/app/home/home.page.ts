import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

interface Task{
  id:number;
  title:string;
  completed:boolean;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [FormsModule, IonicModule, CommonModule],
})

export class HomePage {
    tasks: Task[] = [];
    newTask: string = "";

    addTask(){
      if (this.newTask.trim()) {
        const newTaskObj: Task = {
          id:Date.now(),
          title: this.newTask.trim(),
          completed: false
        };

      this.tasks.push(newTaskObj);

      this.newTask = "";

      console.log(this.tasks);
      
      }
    }
  constructor() {}
}
