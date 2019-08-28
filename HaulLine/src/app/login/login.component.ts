import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  public notLogin: boolean = false;
  
  constructor(
    public router: Router,
  ) { }

  ngOnInit() {
    if (this.router.url !== "login") {
      this.notLogin === true;
    }
  }

  public login() {

  }

}
