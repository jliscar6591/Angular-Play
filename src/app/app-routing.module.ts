import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { JobsComponent } from './site/jobs/jobs.component';
import { HistoryComponent } from './site/history/history.component';
import { AccountComponent } from './site/account/account.component';
import { CreateComponent } from './site/create/create.component';
import { SiteComponent }from './site/site.component';


const routes: Routes = [
  {
    path: '',
    component: SiteComponent,
    children:[
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
  {
    path: '**',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
