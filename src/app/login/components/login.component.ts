import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss']
})

export class LoginComponent {

  public isShowPassword: boolean;
  public loginForm: FormGroup;

  @ViewChild('input') el: ElementRef;

  constructor(private _builder: FormBuilder) {
    this.isShowPassword = false;
    this.loginForm = this._builder.group(
      {
        'name': [localStorage.getItem('name'), [
          Validators.required,
          Validators.minLength(5)]
        ],
        'password': [localStorage.getItem('password'), [
          Validators.required,
          Validators.minLength(8)]
        ]
      });
  }

  public login() {
    localStorage.setItem('password', this.loginForm.get('password').value);
    localStorage.setItem('name',  this.loginForm.get('name').value);
  }

  private showPassword() {
    this.isShowPassword = !this.isShowPassword;
    let textbox = this.el.nativeElement;
    if (textbox.type === 'text') {
      textbox.type = 'password';
    } else {
      textbox.type = 'text';
    }
  }

}
