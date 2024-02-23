import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogincomponentComponent } from './logincomponent/logincomponent.component';
import { ProtectedcomponentComponent } from './protectedcomponent/protectedcomponent.component';


const routes: Routes = [
  {path:'login',component:LogincomponentComponent},
  {path:'protected',component:ProtectedcomponentComponent},
  {path:'',redirectTo:'/login',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
