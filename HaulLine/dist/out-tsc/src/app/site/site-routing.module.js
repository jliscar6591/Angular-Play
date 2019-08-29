import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { JobsComponent } from '../site/jobs/jobs.component';
import { HistoryComponent } from '../site/history/history.component';
import { AccountComponent } from '../site/account/account.component';
import { CreateComponent } from '../site/create/create.component';
const appRoutes = [
    { path: 'jobs', component: JobsComponent },
    { path: 'account', component: AccountComponent },
    { path: 'create', component: CreateComponent },
    { path: 'history', component: HistoryComponent },
    { path: 'login', component: LoginComponent },
];
let SiteRoutingModule = class SiteRoutingModule {
};
SiteRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [
            RouterModule.forRoot(appRoutes, { enableTracing: true } // <-- debugging purposes only
            )
        ],
        exports: [
            RouterModule
        ]
    })
], SiteRoutingModule);
export { SiteRoutingModule };
//# sourceMappingURL=site-routing.module.js.map