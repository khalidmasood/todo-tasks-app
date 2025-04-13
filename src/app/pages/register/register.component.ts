import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router) {

  }

  public showPassword: boolean = false;
  public showConfirmPassword: boolean = false;

  public togglePassword(){
    this.showPassword = !this.showPassword;
  }
  public toggleConfirmPassword(){
    this.showConfirmPassword = !this.showConfirmPassword;
  }

  public submit()
  {
    alert('submit()');
  }

  onSubmit(event: Event) {
    event.preventDefault(); // ⛔ Prevent default form submission
    console.log('Form submit cancelled!');
    alert('form submit()');
  }

  redirectToRegister(url: string){
    this.router.navigate([url]);
  }

  ngOnInit(): void {

    this.showPassword = false;
    this.showConfirmPassword = false;
    
  }

}
