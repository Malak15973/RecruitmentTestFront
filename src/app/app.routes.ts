import { Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { MainLayoutComponent } from './Components/main-layout/main-layout.component';
import { JobListComponent } from './Components/job-list/job-list.component';
import { JobCreateComponent } from './Components/job-create/job-create.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { AuthGuard } from './guards/auth.guard';
import { AdminGuard } from './guards/admin.guard';

export const routes: Routes = [

  {
    path: '', component: MainLayoutComponent, children: [
      { path: '', redirectTo: '/Home', pathMatch: 'full' },
      { path: 'Home', canActivate: [AuthGuard, AdminGuard], component: JobListComponent },
      { path: 'Job/Add', canActivate: [AuthGuard, AdminGuard], component: JobCreateComponent },
    ]
  },

  { path: 'Login', component: LoginComponent },
  { path: 'Register', component: RegisterComponent },
  { path: '**', component: NotFoundComponent },
];
