import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { UserLoginComponent } from '../user-login/user-login.component';

@Injectable({
  providedIn: 'root'
})
export class GetUserService {

  user;
  constructor(private httpClient:HttpClient) {

  }
  async getUser(username){
    let baseUrl=`http://localhost:8081/user/${username}`;
     this.user =  await this.httpClient.get(`${baseUrl}`).toPromise();
     console.log("este é o usuario : ", this.user);

  }
}
