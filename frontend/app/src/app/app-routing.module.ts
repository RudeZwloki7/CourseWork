import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './pages/login/login.component';
import {SignupComponent} from './pages/signup/signup.component';
import {AuthGuard} from './_guards/auth.guard';
import {UserDetailComponent} from './pages/user-edit/user-detail.component';
import {Role} from './enum/Role';

const routes: Routes = [
    // {path: '', redirectTo: '/item', pathMatch: 'full'},
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
