import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import {HeaderComponent} from './header/header.component';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {ContentComponent} from './content/content.component';
import {FooterComponent} from './footer/footer.component';
import {UserEditComponent} from './user/user-edit.component';
import {UserAddComponent} from './user/user-add.component';

import { AppRoutingModule } from './app-routing.module';

const routes = [
 { path: ":lingua", component: AppComponent, loadChildren: 'app/app-routing.module#AppRoutingModule' },
  { path: "", pathMatch: "full", redirectTo: "/home" }
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ContentComponent,
    AboutComponent,
    FooterComponent,
    UserEditComponent,
    UserAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
