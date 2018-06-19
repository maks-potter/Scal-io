import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Component2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
