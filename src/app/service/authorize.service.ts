import { Injectable } from '@angular/core';
import { Login } from '../interface/login';

@Injectable({
  providedIn: 'root'
})
export class AuthorizeService {

  authorized:boolean = false;
  account:Login = {
    email: 'ruan@email.com',
    password: '123'
  }
  constructor() { }


  login(loginAcc:Login){

    if(loginAcc.email == this.account.email &&loginAcc.password == this.account.password ){
      localStorage.setItem('authStatus','true');
      console.log("Logado com sucesso.");
      return true;
    }else{
      return false;
    }
  }
  logout(){
    console.log('status: '+ !!localStorage.getItem('authStatus'))
    if(localStorage.getItem('authStatus')){
      console.log('deslogando...')
      localStorage.removeItem('authStatus');
    }

  }
  status(){
    if(!localStorage.getItem('authStatus')){
      return false;
    }
    return !!localStorage.getItem('authStatus');
  }
}
