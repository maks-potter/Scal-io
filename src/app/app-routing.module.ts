import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {GuardService} from './shared/services/guard.service';

const routes: Routes = [
  {
    path: 'route-one',
    loadChildren: './+module-one/module-one.module#ModuleOneModule',
    canActivate: [GuardService]
  },
  {
    path: 'route-two',
    loadChildren: './+module-two/module-two.module#ModuleTwoModule',
    canActivate: [GuardService]
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
