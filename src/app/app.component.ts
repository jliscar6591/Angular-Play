import { Component } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  public notLogin: boolean;

  constructor(
    public router: Router,
  ) { }

  ngOnInit() {
    if (this.router.url === '/login' || this.router.url === '/') {
      this.notLogin = false;
    } else {
      this.notLogin = true;
    }
  }
}
