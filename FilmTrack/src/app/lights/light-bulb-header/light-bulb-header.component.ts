import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-light-bulb-header',
  templateUrl: './light-bulb-header.component.html',
  styleUrls: ['./light-bulb-header.component.scss']
})
export class LightBulbHeaderComponent implements OnInit {
  @Input() isClientSide: boolean = null;
  public title: string = null;
  public subTitle: string = null;

  constructor() {
  }

  ngOnInit(): void {
    if (this.isClientSide) {
      this.title = 'Client Solution';
      this.subTitle = 'This solution is written all in Angular 9.1';
    } else {
      this.title = 'Client/Server Solution';
      this.subTitle = 'This solutions UI is written in Angular 9.1 and the backend/api is written in C# .NET Core 3.1';
    }
  }

}
