import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { PublicComponent } from './pages/public/public.component';
import { PrivateComponent } from './pages/private/private.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PublicComponent,
    PrivateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
