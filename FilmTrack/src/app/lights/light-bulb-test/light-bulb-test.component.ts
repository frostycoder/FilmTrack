import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import _ from 'lodash';
import {LightsClientService} from '../light-bulb-test-client/lights-client.service';
import {Light} from '../light-bulb/light';
import {LightBulbTestParameters} from './light-bulb-test-parameters';

@Component({
  selector: 'app-light-bulb-test',
  templateUrl: './light-bulb-test.component.html',
  styleUrls: ['./light-bulb-test.component.css']
})
export class LightBulbTestComponent implements OnInit {
  @Output() public runTest = new EventEmitter<LightBulbTestParameters>();
  public lightBulbTestParameters: LightBulbTestParameters = new LightBulbTestParameters();
  public lights: Array<Light> = null;
  public lightsLeftOn: number = null;

  constructor(private lightsService: LightsClientService) {
  }

  ngOnInit() {
  }

  public runTestButtonClick(): void {
    this.runTest.emit(this.lightBulbTestParameters);
  }

  public numberOfLightsChanged(numberOfLights: number) {
    this.lightBulbTestParameters.numberOfLights = numberOfLights;
  }

  public numberOfPeopleChanged(numberOfPeople: number) {
    this.lightBulbTestParameters.numberOfPeople = numberOfPeople;
  }
}
