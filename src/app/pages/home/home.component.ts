import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../interfaces/todo';


@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{


  todoList: Array<Todo> = [];


  constructor(private service: TodoService){}

  public  getData() {

    var url = '../../../assets/mock/todos.json';

    this.service.getTodoList().subscribe( (data : any) => {

      this.todoList = data;

      console.log(this.todoList);

    });

  }

  ngOnInit(): void {

    //to handle pre-render errors on ng build and serve
    if (typeof window !== 'undefined' && window.document) {
      this.getData();
    }

  }

}
