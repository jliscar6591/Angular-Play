import * as tslib_1 from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AccountComponent } from './site/account/account.component';
import { HistoryComponent } from './site/history/history.component';
import { CreateComponent } from './site/create/create.component';
import { JobsComponent } from './site/jobs/jobs.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatRadioModule } from '@angular/material/radio';
import { MatMenuModule } from '@angular/material/menu';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { SiteComponent } from './site/site.component';
let AppModule = class AppModule {
};
AppModule = tslib_1.__decorate([
    NgModule({
        declarations: [
            AppComponent,
            LoginComponent,
            CreateComponent,
            HistoryComponent,
            JobsComponent,
            AccountComponent,
            SiteComponent
        ],
        imports: [
            BrowserModule,
            MatToolbarModule,
            MatInputModule,
            MatChipsModule,
            MatRadioModule,
            MatIconModule,
            MatCardModule,
            MatMenuModule,
            MatExpansionModule,
            MatButtonModule,
            AppRoutingModule,
            BrowserAnimationsModule
        ],
        providers: [],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map