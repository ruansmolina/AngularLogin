import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { PublicComponent } from './pages/public/public.component';
import { PrivateComponent } from './pages/private/private.component';
import { AuthorizeGuard } from './guard/authorize.guard';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo:'home'
  },
  {
    path:'home',
    component:LoginComponent
  },
  {
    path:'public',
    component:PublicComponent
  },
  {
    path:'private',
    component:PrivateComponent,
    canActivate:[AuthorizeGuard]
  },{
    path:'register',
    component:RegisterComponent
  },
  {
    path:'**',
    redirectTo:'home'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
