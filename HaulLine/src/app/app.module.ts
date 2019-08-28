import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AccountComponent } from './account/account.component';
import { HistoryComponent } from './history/history.component';
import { CreateComponent } from './create/create.component';
import { JobsComponent } from './jobs/jobs.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatRadioModule} from '@angular/material/radio';
import {MatMenuModule} from '@angular/material/menu';
import {MatChipsModule} from '@angular/material/chips';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreateComponent,
    HistoryComponent,
    JobsComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatInputModule,
    MatChipsModule,
    MatRadioModule,
    MatCardModule,
    MatMenuModule,
    MatExpansionModule,
    MatButtonModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', component: LoginComponent},
      { path: 'account', component: AccountComponent},
      { path: 'create', component: CreateComponent},
      { path: 'history', component: HistoryComponent},
      { path: 'jobs', component: JobsComponent}
    ]),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
