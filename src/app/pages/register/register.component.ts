import { Component, OnInit } from '@angular/core';
import {  UserService } from '../../service/user.service';
import { EmailValidator, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/interface/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  registerForm!: FormGroup;
  user:User ={
    name: '',
    email: '',
    password: ''
  };

  constructor(
    private formBuilder:FormBuilder,
    private userService:UserService
    // private service:AuthorizeService
  ){}
  ngOnInit(): void {
    this.InitForm();
  }
  InitForm(){
    this.registerForm =  this.formBuilder.group({
      name:['',Validators.required],
      email:['',Validators.email],
      password:['',Validators.required],
      confirmPassword:['',Validators.required]
    },{
      validator: this.ConfirmedValidator('password', 'confirmPassword'),
    });
  }
  register(){
    this.user = {
      name:this.registerForm.value.name,
      email:this.registerForm.value.email,
      password:this.registerForm.value.password
    };

    this.userService.register(this.user).subscribe(
      result=>console.log(result),
      err=> console.log(err)
    );
  }

  ConfirmedValidator(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
      if (
        matchingControl.errors &&
        !matchingControl.errors['confirmedValidator']
      ) {
        return;
      }
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ confirmedValidator: true });
      } else {
        matchingControl.setErrors(null);
      }
    };
}
}
