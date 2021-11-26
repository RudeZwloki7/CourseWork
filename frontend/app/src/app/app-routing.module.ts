import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './pages/login/login.component';
import {SignupComponent} from './pages/signup/signup.component';
import {AuthGuard} from './_guards/auth.guard';
import {UserDetailComponent} from './pages/user-edit/user-detail.component';
import {Role} from './enum/Role';
import {MainpageComponent} from './pages/mainpage/mainpage.component';
import {AboutComponent} from './pages/about/about.component';
import {LinksComponent} from './pages/links/links.component';
import {StreamlitpageComponent} from './pages/streamlitpage/streamlitpage.component';

const routes: Routes = [
  // {path: '', redirectTo: '/item', pathMatch: 'full'},
  {path: '', component: MainpageComponent},
  {path: 'links', component: LinksComponent},
  {path: 'stock', component: StreamlitpageComponent},
  {path: 'about', component: AboutComponent},
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LoginComponent},
  {path: 'register', component: SignupComponent},
  {path: 'success', component: SignupComponent},

  {
    path: 'profile',
    component: UserDetailComponent,
    canActivate: [AuthGuard]
  },

];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)// {onSameUrlNavigation: 'reload'}
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
