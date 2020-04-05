import {Injectable} from '@angular/core';
import _ from 'lodash';
import {range} from 'rxjs';
import {LightBulbTestResults} from '../light-bulb-test-results/light-bulb-test-results';
import {LightBulbTestParameters} from '../light-bulb-test/light-bulb-test-parameters';
import {Light} from '../light-bulb/light';

@Injectable({
  providedIn: 'root'
})
export class LightsClientService {

  constructor() {
  }

  public runTest(testParams: LightBulbTestParameters): LightBulbTestResults {
    // initialize the the lights array
    const lights = this.generateLights(testParams.numberOfLights);

    // initialize the the people array
    const people = this.generatePeople(testParams.numberOfPeople);

    // first person, turn on all the lights
    _.forEach(lights, (light: Light) => {
      light.toggleLight();
    });

    for (let currentPerson = 2; currentPerson <= testParams.numberOfPeople; currentPerson++) {
      for (let currentLight = currentPerson; currentLight <= testParams.numberOfLights; currentLight += currentPerson) {
        lights[currentLight - 1].toggleLight();
      }
    }

    // lets see how many lights were left on after everyone took their turn
    const lightsOn = _.filter(lights, (light: Light) => {
      return light.illuminated;
    });

    return new LightBulbTestResults(lights);
  }

  private generateLights(numberOfLights: number): Array<Light> {
    const x: Array<Light> = new Array<Light>();
    for (let i = 0; i < numberOfLights; i++) {
      x.push(new Light(i));
    }
    return x;
  }

  private generatePeople(numberOfLights: number): Array<number> {
    const x: Array<number> = new Array<number>();
    for (let i = 0; i < numberOfLights; i++) {
      x.push(i);
    }
    return x;
  }
}
