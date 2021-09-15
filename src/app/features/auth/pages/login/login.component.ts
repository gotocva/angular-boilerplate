import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: any;
  submitted = false;
  loading = false;

  constructor() { }
  
  ngOnInit(): void {
    this.initializeFormGroup();
  }
  
  /**
  * Form group initialized
  */
  initializeFormGroup() {
    this.loginForm = {
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    }
  }

  get formStatus() {
    return (this.loginForm.email["status"] == "INVALID") ? false :
    (this.loginForm.password["status"] == "INVALID") ? false :
    true;
  }

  /**
  * form validation error message
  */
  getErrorMessage(element: string) {
    switch (element) {

      case 'email':
        return this.loginForm.email.hasError('required') ? 'Required field' :
               this.loginForm.email.hasError('email') ? 'Not a valid email' :
                '';
        break;

      case 'password':
        return this.loginForm.password.hasError('required') ? 'Required field' :
               this.loginForm.password.hasError('minlength') ? 'Not a valid length' :
                '';
          break;

      default:
        return "";
        break;
    }
  }

  /**
  * user login api
  */
  public onSubmit() {
    this.submitted = true;
    this.loading = true;
    console.dir(this.loginForm)

  }

}
