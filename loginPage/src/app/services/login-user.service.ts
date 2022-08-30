import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class LoginUserService {
  private baseUrl="http://localhost:8081/user/login";
  res;
  constructor(private httpClient:HttpClient) {

  }
  async loginUser(user:User):Promise<Observable<object>>{


    this.res = await this.httpClient.post(`${this.baseUrl}`,user).toPromise()
    console.log( this.res);
    return this.res;
  }
}
