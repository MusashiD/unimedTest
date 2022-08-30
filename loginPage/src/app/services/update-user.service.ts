import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UpdateUserService {
  user
  private baseUrl="http://localhost:8081/user/update";

  constructor(private httpClient:HttpClient) {

  }
  async update(user:User){
    console.log("update")
    this. user =  await this.httpClient.put(`${this.baseUrl}`,user).toPromise();
    console.log("usuario com update: " ,user);

  }
}
