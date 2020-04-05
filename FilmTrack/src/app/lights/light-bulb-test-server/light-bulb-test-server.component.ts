import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {LightBulbTestResults} from '../light-bulb-test-results/light-bulb-test-results';
import {LightBulbTestParameters} from '../light-bulb-test/light-bulb-test-parameters';
import {LightBulbTestServerService} from './light-bulb-test-server.service';

@Component({
  selector: 'app-light-bulb-test-server',
  templateUrl: './light-bulb-test-server.component.html',
  styleUrls: ['./light-bulb-test-server.component.scss']
})
export class LightBulbTestServerComponent implements OnInit {
  public result: Observable<LightBulbTestResults> = null;

  constructor(private lightsService: LightBulbTestServerService) {
  }

  ngOnInit(): void {
  }

  public runTest(testParameters: LightBulbTestParameters): void {
    // call the lights service to tun the test
    this.result = this.lightsService.runTest(testParameters);
  }
}
