import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {


  private homeUrl: string = "/";

  constructor(private router: Router) {

  }
  public showPassword: boolean = false;

  public togglePassword(){
    this.showPassword = !this.showPassword;
  }

  public submit()
  {
    this.router.navigate([this.homeUrl]);
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
    
  }




}
