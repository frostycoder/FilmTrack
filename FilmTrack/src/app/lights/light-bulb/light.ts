import * as _ from 'lodash';

export class Light {
  public index: number = null;
  public illuminated: boolean = null;
  public name: string = null;

  public static fromDto<T>(source: Light): Light {
    return new Light(source.index, source.illuminated);
  }

  constructor(index: number, illuminated: boolean = false) {
    this.index = index;
    this.illuminated = illuminated;
    this.name = _.toString(this.index + 1);
  }

  public toggleLight(): void {
    this.illuminated = !this.illuminated;
  }
}
