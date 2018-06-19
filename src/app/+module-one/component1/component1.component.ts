import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';

@Component({
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Component1Component implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
