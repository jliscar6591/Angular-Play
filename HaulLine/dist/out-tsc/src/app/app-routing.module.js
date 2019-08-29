import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { JobsComponent } from './site/jobs/jobs.component';
import { HistoryComponent } from './site/history/history.component';
import { AccountComponent } from './site/account/account.component';
import { CreateComponent } from './site/create/create.component';
import { SiteComponent } from './site/site.component';
const routes = [
    {
        path: '',
        component: SiteComponent,
        children: [
            {
                path: 'jobs',
                component: JobsComponent
            },
            {
                path: 'history',
                component: HistoryComponent
            },
            {
                path: 'account',
                component: AccountComponent
            },
            {
                path: 'create',
                component: CreateComponent
            }
        ]
    },
    {
        path: 'welcome',
        component: LoginComponent
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map