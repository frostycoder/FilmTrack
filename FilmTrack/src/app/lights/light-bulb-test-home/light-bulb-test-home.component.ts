import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-light-bulb-test-home',
  templateUrl: './light-bulb-test-home.component.html',
  styleUrls: ['./light-bulb-test-home.component.scss']
})
export class LightBulbTestHomeComponent implements OnInit {
  public title: string = 'Light Bulb Test';

  constructor() {
  }

  ngOnInit(): void {
  }

}
