import {Routes} from '@angular/router';
import {MainComponent} from './main/main.component';
import {Component1Component} from './component1/component1.component';

export const moduleOneRoutes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'sub-route',
    component: Component1Component
  }
];
