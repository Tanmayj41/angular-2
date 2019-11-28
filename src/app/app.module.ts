import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    AboutComponent,
    ContactComponent,
    NotFoundComponent,
    EditComponent,
    DeleteComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:"",component:HomeComponent,canActivate:[AuthService]},
      {path:"login",component:LoginComponent},
      {path:"home",component:HomeComponent,canActivate:[AuthService]},
      {path:"register",component:RegisterComponent,canActivate:[AuthService]},
      {path:"edit/:No",component:EditComponent,canActivate:[AuthService]},
      {path:"delete/:No",component:DeleteComponent,canActivate:[AuthService]},
      {path:"about",component:AboutComponent},
      {path:"contact",component:ContactComponent},
      {path:"**",component:NotFoundComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
