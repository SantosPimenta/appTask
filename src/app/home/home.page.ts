import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NumberValueAccessor } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { ellipseOutline, checkmarkCircle, closeCircleOutline, eyeOff, eye } from 'ionicons/icons';
import { TaskService } from '../service/app.service';

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
    exibirConcluidos: boolean = true;

    /*addTask(){
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
    */

    async addTask(){
      if (this.newTask.trim()) {
        const newTaskObj: Task = {
          id:Date.now(),
          title: this.newTask.trim(),
          completed: false
        };

      await this.taskService.addTask(newTaskObj);

      this.tasks = await this.taskService.getTask();

      this.newTask = "";

      console.log(this.tasks);
      
      }
    }

    concluir(taskId: number){
        const task = this.tasks.find((task)=> task.id === taskId)
        if (task) {
          task.completed = !task.completed
        }
    }

    mostrarOcultar(){
      this.exibirConcluidos = !this.exibirConcluidos;
    }

    deleteTask(id: number){
      this.tasks= this.tasks.filter((task) => task.id !==id);
    }

    get filteredTasks(){
      return this.tasks.filter((task)=> this.exibirConcluidos || !task.completed)
    }
  constructor(private taskService: TaskService) {
    addIcons({checkmarkCircle, ellipseOutline,closeCircleOutline, eye, eyeOff});
  }
}
