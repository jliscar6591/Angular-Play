import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { JobsComponent } from './jobs/jobs.component';
import { HistoryComponent } from './history/history.component';
import { AccountComponent } from './account/account.component';
import { CreateComponent } from './create/create.component';


const routes: Routes = [
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
  },
  {
    path: '',
    component: LoginComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
