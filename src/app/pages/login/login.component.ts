import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Login } from 'src/app/interface/login';
import { AuthorizeService } from 'src/app/service/authorize.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  loginForm!: FormGroup;
  loginAcc:Login = {
    email:'',
    password:''
  };
  alertaStatus='d-none'
  constructor(private formBuilder:FormBuilder,
    private service:AuthorizeService
  ){}
  ngOnInit(): void {
    this.createForm();
  }

  createForm(){
  this.loginForm = this.formBuilder.group(
    {
      email:['',Validators.required],
      password:[,Validators.required]
    }
  );
}

  login(){
    this.loginAcc.email = this.loginForm.value.email;
    this.loginAcc.password = this.loginForm.value.password;
    if(this.service.login(this.loginAcc)){
      this.alertaStatus = '';
      setTimeout(()=>{
         this.alertaStatus = 'd-none'
      },3000 )
    }

  }

}


