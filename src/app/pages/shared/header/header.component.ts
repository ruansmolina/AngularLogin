import { Component } from '@angular/core';
import { AuthorizeService } from 'src/app/service/authorize.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private authService:AuthorizeService){

  }
  getStatus(){
    console.log(this.authService.getToken());
  }
  logout(){
    this.authService.removeToken();
  }

}
