import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {moduleOneRoutes} from './module-one.routes';
import {Component1Component} from './component1/component1.component';
import {MainComponent} from './main/main.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(moduleOneRoutes)
  ],
  declarations: [
    MainComponent,
    Component1Component
  ],
  providers: []
})

export class ModuleOneModule {
}
