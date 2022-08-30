import { Component, OnInit } from '@angular/core';
import { GetUserService } from '../services/get-user.service';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss']
})
export class PopUpComponent implements OnInit {
name;
  constructor(private getUserService:GetUserService) {
    this.name = this.getUserService.user.username;
  }

  ngOnInit() {
  }

}
