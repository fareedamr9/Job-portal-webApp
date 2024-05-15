import { Component } from '@angular/core';
import { AuthService } from 'src/app/Service/auth.service';
import { DataService } from 'src/app/Service/DataService';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  constructor(private auth:AuthService){}

  logout()
  {
    this.auth.logout();
  }
}
