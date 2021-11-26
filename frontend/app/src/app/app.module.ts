import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NavigationComponent} from './parts/navigation/navigation.component';
import {AppRoutingModule} from './app-routing.module';
import {LoginComponent} from './pages/login/login.component';
import {SignupComponent} from './pages/signup/signup.component';
import {FormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';
import {ErrorInterceptor} from './_interceptors/error-interceptor.service';
import {JwtInterceptor} from './_interceptors/jwt-interceptor.service';
import {UserDetailComponent} from './pages/user-edit/user-detail.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { MainpageComponent } from './pages/mainpage/mainpage.component';
import { AboutComponent } from './pages/about/about.component';
import { LinksComponent } from './pages/links/links.component';
import { StreamlitpageComponent } from './pages/streamlitpage/streamlitpage.component';


@NgModule({
    declarations: [
        AppComponent,
        NavigationComponent,
        LoginComponent,
        SignupComponent,
        UserDetailComponent,
        MainpageComponent,
        AboutComponent,
        LinksComponent,
        StreamlitpageComponent,

    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        FontAwesomeModule,

    ],
    providers: [CookieService,
        {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
        {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true}],
    bootstrap: [AppComponent]
})
export class AppModule {
}
