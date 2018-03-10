import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LoginComponent } from './components/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [ LoginComponent ],
  exports: [LoginComponent]
})

export class LoginModule { }
