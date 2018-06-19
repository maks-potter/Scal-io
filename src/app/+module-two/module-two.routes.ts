import {Routes} from '@angular/router';
import {MainComponent} from './main/main.component';
import {Component2Component} from './component2/component2.component';

export const moduleTwoRoutes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'sub-route',
    component: Component2Component
  }
];
