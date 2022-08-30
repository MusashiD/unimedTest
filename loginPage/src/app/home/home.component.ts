import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { PopUpComponent } from '../pop-up/pop-up.component';
import { GetUserService } from '../services/get-user.service';
import { UpdateUserService } from '../services/update-user.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  acess;
  constructor(private getUserService: GetUserService,private dialogRef:MatDialog,
    private updateUser: UpdateUserService) {

   }

  ngOnInit() {

    setTimeout(async () => {
      this.acess = await this.checkFirstAcess();
      if (this.acess === true) {
        this.openDialog();
        this.updateUser.update(this.getUserService.user);
      }
     })


}



  async checkFirstAcess(){
    const user = await this.getUserService.user;
    console.log("inside check",user);

    if(!user){
      return  false
    } else return user.firstacess;
  }

  openDialog(){
    this.dialogRef.open(PopUpComponent);
  }

}
