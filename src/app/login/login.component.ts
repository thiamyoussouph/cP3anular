import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { log } from 'console';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  //Validators.required

  username = new FormControl('',[Validators.required,
    Validators.minLength(3),Validators.maxLength(20)]);
  password = new FormControl('');

  onsubmit(Event: Event) {
    Event.preventDefault();
    console.log(this.username.value, this.password.value);
  }
}
