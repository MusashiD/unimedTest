import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class RegisterUserService {
  res;
  private baseUrl="http://localhost:8081/user/register";
   constructor(private httpClient:HttpClient) {

  }
  async RegisterUser(user:User){
     this.res = await this.httpClient.post(`${this.baseUrl}`,user).toPromise();
    return this.res;

  }

}
