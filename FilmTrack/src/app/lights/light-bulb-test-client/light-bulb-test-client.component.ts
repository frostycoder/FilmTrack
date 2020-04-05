import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import _ from 'lodash';
import {LightBulbTestResults} from '../light-bulb-test-results/light-bulb-test-results';
import {LightBulbTestParameters} from '../light-bulb-test/light-bulb-test-parameters';
import {Light} from '../light-bulb/light';
import {LightsClientService} from './lights-client.service';

@Component({
  selector: 'app-light-bulb-test-client',
  templateUrl: './light-bulb-test-client.component.html',
  styleUrls: ['./light-bulb-test-client.component.scss']
})
export class LightBulbTestClientComponent implements OnInit {
  public result: LightBulbTestResults = null;

  constructor(private lightsService: LightsClientService) {
  }

  ngOnInit(): void {
  }

  public runTest(testParameters: LightBulbTestParameters): void {
    // call the lights service to tun the test
    this.result = this.lightsService.runTest(testParameters);
  }

}
