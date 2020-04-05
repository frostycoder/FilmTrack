import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import _ from 'lodash';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {AppConfig} from '../../app-config';
import {LightBulbTestResults} from '../light-bulb-test-results/light-bulb-test-results';
import {LightBulbTestParameters} from '../light-bulb-test/light-bulb-test-parameters';
import {Light} from '../light-bulb/light';

@Injectable({
  providedIn: 'root'
})
export class LightBulbTestServerService {
  private baseRoute: string = `${AppConfig.apiUrl}/light-bulbs`;

  constructor(private httpClient: HttpClient) {
  }

  public runTest(testParams: LightBulbTestParameters): Observable<LightBulbTestResults> {
    const url: string = `${this.baseRoute}/number-of-lights/${testParams.numberOfLights}/number-of-people/${testParams.numberOfPeople}`;
    return this.httpClient.get<Array<Light>>(url)
               .pipe(map((result: Array<Light>) => {
                 const arrayOfLights: Array<Light> = new Array<Light>();
                 _.forEach(result, (light: Light) => {
                   arrayOfLights.push(Light.fromDto(light));
                 });
                 return new LightBulbTestResults(arrayOfLights);
               }));
  }
}
