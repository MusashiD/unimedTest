import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { RegisterUserService } from '../services/register-user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  res;
  errorMessage = "";
  user:User = new User();
  constructor(private router:Router,private registerUser:RegisterUserService) { }

  ngOnInit() {
  }

  async UserRegister(){

     if(this.user.username.trim().length===0){
      this.errorMessage = "Username necessário!";
    } else if(this.user.password.trim().length===0){
      this.errorMessage = "Password é necessário!";
    }else if(this.user.username.trim().length===0){
      this.errorMessage = "User Name é necessário!"
    } else{
    this.errorMessage ="";

    await this.registerUser.RegisterUser(this.user)
    .then(()=>this.res=200)
    .catch(()=>this.res=403);

    if (this.res == 200) {
      alert("Usuario Cadastrado!")
      this.router.navigate([''])
    }
    if (this.res == 403) {
     alert('Erro!Usuario não cadastrado!');
    }
  }
}

}
