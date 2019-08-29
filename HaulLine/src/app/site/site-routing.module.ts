import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from '../login/login.component';
import { JobsComponent } from '../site/jobs/jobs.component';
import { HistoryComponent } from '../site/history/history.component';
import { AccountComponent } from '../site/account/account.component';
import { CreateComponent } from '../site/create/create.component';
import { SiteComponent } from './site.component';

const appRoutes: Routes = [
    {
        path: 'site', component: SiteComponent,
        children: [
            { path: 'jobs', component: JobsComponent },
            { path: 'account', component: AccountComponent },
            { path: 'create', component: CreateComponent },
            { path: 'history', component: HistoryComponent },
            { path: 'login', component: LoginComponent },
        ]
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
            { enableTracing: true } // <-- debugging purposes only
        )
    ],
    exports: [
        RouterModule
    ]
})
export class SiteRoutingModule { }