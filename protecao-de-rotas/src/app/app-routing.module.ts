import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/pages/home/home.component';
import { AccountComponent } from './shared/pages/account/account.component';
import { CanActiveGuard } from './shared/guards/can-active.guard';
import { CandeactivateGuard } from './shared/guards/candeactivate.guard';
import { CanLoadGuard } from './shared/guards/can-load.guard';
import { CanActivateChildGuard } from './shared/guards/can-activate-child.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'account',
    component: AccountComponent,
    canActivate: [CanActiveGuard],
    canDeactivate: [CandeactivateGuard]
  },
  {
    path: 'core',
    loadChildren: () => import('./core/core.module').then((m) => m.CoreModule),
    canLoad: [CanLoadGuard],
    canActivateChild: [CanActivateChildGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
