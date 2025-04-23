import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoService } from '../../services/todo.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-add-edit',
  standalone: false,
  templateUrl: './add-edit.component.html',
  styleUrl: './add-edit.component.scss'
})
export class AddEditComponent implements OnInit{

  buttonText: string = '';
  //todoData !: Todo;
  todoData : any = {
    name: '',
  };

  constructor(private activatedRoute : ActivatedRoute, private todoService : TodoService){


  }

  ngOnInit(): void {
    this.buttonText = "Add Todo";
    setTimeout(() => {
      this.buttonText = "Edit Todo"

    }, 3000);

    this.activatedRoute.url.subscribe((url: any) => {

      console.log(url[0].path);

      this.buttonText = url[0].path === 'add' ? "Add Todo" : "Edit Todo";

      if (this.buttonText.toLowerCase().includes("edit")){
        
          this.activatedRoute.paramMap.subscribe((paramMap: any) => {

              if (paramMap.params.id){

                let id = paramMap.params.id as number;

                this.todoService.getTodoList().subscribe((data) => {

                   this.todoService.getTodoList().subscribe((data: any) => {

                    this.todoData = data.filter((todo: any) => todo.id == id)[0];
                    
                    //Doing it hard way by writing full parse
                    //let date = parseDateString(this.todoData.createdDate);
                    //this.todoData.createdDate = formatDateToString(date);

                    //Doing it Pipe way
                    let date = new Date(this.todoData.createdDate);
                    let datePipe = new DatePipe("en-US");
                    this.todoData.createdDate = datePipe.transform(date.toString(), 'yyyy-MM-dd');

                    //d MMM yyyy

                    console.log("Data: ", this.todoData);
  
                  });

                }, (error: any) => {

                  console.log(error);
                });
    
              }

        }, (error: any) => {

          console.log(error);
        });


      }

    });
    


    //deprecated, used pipe instead
    function parseDateString(dateStr: string): Date {
      const [dayStr, monthStr, yearStr] = dateStr.split(' ');
      const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
                      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    
      const day = parseInt(dayStr, 10);
      const month = months.indexOf(monthStr);
      const year = parseInt(yearStr, 10);
    
      if (month === -1 || isNaN(day) || isNaN(year)) {
        throw new Error('Invalid date format');
      }
    
      return new Date(year, month, day);
    }

    //deprecated, used pipe instead
    function formatDateToString(date: Date): string {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
    
      return `${year}-${month}-${day}`;
    }
  }

  

}
