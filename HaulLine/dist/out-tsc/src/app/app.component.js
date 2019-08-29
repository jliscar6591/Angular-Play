import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let AppComponent = class AppComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
        if (this.router.url === '/login' || this.router.url === '/') {
            this.notLogin = false;
        }
        else {
            this.notLogin = true;
        }
    }
};
AppComponent = tslib_1.__decorate([
    Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.less']
    })
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map