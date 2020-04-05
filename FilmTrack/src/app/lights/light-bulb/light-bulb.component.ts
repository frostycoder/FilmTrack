import {Component, Input, OnInit} from '@angular/core';
import {Light} from './light';

@Component({
  selector: 'app-light-bulb',
  templateUrl: './light-bulb.component.html',
  styleUrls: ['./light-bulb.component.scss']
})
export class LightBulbComponent implements OnInit {
  @Input() light: Light = null;
  public lightClass: string = null;

  constructor() {
  }

  ngOnInit() {
    this.lightClass = this.light.illuminated ? 'light-on' : 'light-off';
  }

}
