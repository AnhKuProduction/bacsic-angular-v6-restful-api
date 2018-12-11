import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import {HomeComponent} from './home/home.component';
import {ContentComponent} from './content/content.component';
import {AboutComponent} from './about/about.component';
import {UserEditComponent} from './user/user-edit.component';
import {UserAddComponent} from './user/user-add.component';
// const submoduleRoutes:Routes = [
//    { path: '', redirectTo: '/home', pathMatch: 'full' },
  
//   { path: 'home', component: HomeComponent },
//   {
//     path:'about',component:AboutComponent
//   }
//    {
//      path:':link',component:ContentComponent
//    }
  
// ]
export const submoduleRoutes = [
  
  { path: 'home', component: HomeComponent },
  {
    path:'about',component:AboutComponent
    
  },
  {
    path:'user-add',component:UserAddComponent
  },
  {
    path:':link',component:ContentComponent
  },
 
  {
    path:'user-edit/:id',component:UserEditComponent
  }
];
@NgModule({
  declarations: [],
  imports: [  RouterModule.forChild(submoduleRoutes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
