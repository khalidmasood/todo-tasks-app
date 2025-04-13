import { Component, input, Input, OnInit } from '@angular/core';
import { Todo } from '../../interfaces/todo';

@Component({
  selector: 'app-todo-card',
  standalone: false,
  templateUrl: './todo-card.component.html',
  styleUrl: './todo-card.component.scss'
})
export class TodoCardComponent implements OnInit {


  @Input() todoCount: number = 0;

  @Input() todo !: Todo;

  constructor(){}

  ngOnInit(): void {
    
  }

  

}
