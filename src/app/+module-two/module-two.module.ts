import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {moduleTwoRoutes} from './module-two.routes';
import {Component2Component} from './component2/component2.component';
import {MainComponent} from './main/main.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(moduleTwoRoutes)
  ],
  declarations: [
    MainComponent,
    Component2Component
  ],
  providers: []
})

export class ModuleTwoModule {
}
