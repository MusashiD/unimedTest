import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginUserService } from './login-user.service';
import { User } from '../models/user';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
res;
  constructor(private router:Router, private loginUserService:LoginUserService) {
    }

 async login(user:User){
    await this.loginUserService.loginUser(user).then(
      () => {
        this.res=200;

        }
     ).catch(
      () =>   this.res=403);

}
  logout(){
    this.router.navigate(['']);

  }


}
