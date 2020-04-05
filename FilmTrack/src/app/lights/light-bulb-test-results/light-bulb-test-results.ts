import _ from 'lodash';
import {Light} from '../light-bulb/light';

export class LightBulbTestResults {
  public lights: Array<Light> = null;
  public illuminatedLightCount: number = null;
  public illuminatedLights: string = null;

  constructor(lights: Array<Light>) {
    this.lights = lights;

    // lets see how many lights were left on after everyone took their turn
    const lightsOn = _.filter(this.lights, (light: Light) => {
      return light.illuminated;
    });

    this.illuminatedLightCount = _.size(lightsOn);
    this.illuminatedLights = _.toString(_.map(lightsOn, 'name'));
  }
}
