import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { User } from '../models/user';
import { GetUserService } from '../services/get-user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {

  user:User = new User();
  errorMessage: string;
  res=0;

  constructor(private router:Router, private authService: AuthService,
    private getUserService: GetUserService ) {
      this.user.username=""
      this.user.password=""
       }

  ngOnInit() {

  }


  async userLogin(){

    console.log(this.user)
    if(this.user.username.trim().length===0){
      this.errorMessage = "Username necessário!";
    } else if(this.user.password.trim().length===0){
      this.errorMessage = "Password é necessário!";
    } else{
    await this.getUserService.getUser(this.user.username);
    this.errorMessage ="";

    await this.authService.login(this.user);


    this.res = await this.authService.res;

    if (this.res == 200) {

      this.router.navigate(['home'])
    }
    if (this.res == 403) {
      this.errorMessage = 'Login ou Senha incorretos!';
    }
  }
}

}
