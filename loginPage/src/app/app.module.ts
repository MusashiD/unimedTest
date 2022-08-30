import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { FormsModule } from '@angular/forms';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { RegisterComponent } from './register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatDialogModule } from '@angular/material/dialog';
import { PopUpComponent } from './pop-up/pop-up.component';
import { AuthService } from './services/auth.service';
import { GetUserService } from './services/get-user.service';
import { LoginUserService } from './services/login-user.service';

@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    HomeComponent,
    HeaderComponent,
    RegisterComponent,
    PopUpComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [AuthService,
              GetUserService,
              LoginUserService],

  entryComponents:[
    PopUpComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
