import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let LoginComponent = class LoginComponent {
    constructor(router) {
        this.router = router;
        this.notLogin = false;
    }
    ngOnInit() {
        if (this.router.url !== "login") {
            this.notLogin === true;
        }
    }
    login() {
    }
};
LoginComponent = tslib_1.__decorate([
    Component({
        selector: 'app-login',
        templateUrl: './login.component.html',
        styleUrls: ['./login.component.less']
    })
], LoginComponent);
export { LoginComponent };
//# sourceMappingURL=login.component.js.map