import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from 'src/app/interface/login';
import { AuthorizeService } from 'src/app/service/authorize.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  loginForm!: FormGroup;
  resultado: string = 'fade';
  mensagem:string ='';
  type:string='';
  loginAcc:Login = {
    email:'',
    password:''
  };
  alertaStatus='d-none'
  constructor(private formBuilder:FormBuilder,
    private service:AuthorizeService,
    private router: Router
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

    this.service.login(this.loginForm.value.email,this.loginForm.value.password)
    .subscribe(
      () =>{
        this.mensagem = 'Logado com sucesso';
        this.resultado= 'show'
        this.type = 'sucess';
        setTimeout(()=> {this.resultado='fade'}, 5000);
        this.router.navigate(['/private']);
      } ,
      error => {
        this.mensagem = 'E-mail ou senha invalido';
        this.type = 'warning';
        this.resultado= 'show'
        setTimeout(()=> {this.resultado='fade'}, 5000);
      }



    );

  }

}


