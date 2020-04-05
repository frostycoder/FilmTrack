import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import _ from 'lodash';

@Component({
  selector: 'app-numeric-input',
  templateUrl: './numeric-input.component.html',
  styleUrls: ['./numeric-input.component.scss']
})
export class NumericInputComponent implements OnInit {
  @Input() labelText: string = null;
  @Input() controlId?: string = null;
  @Input() controlValue: any = null;
  @Output() public valueChangeEvent = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit(): void {
    if (_.isEmpty(this.controlId)) {
      this.controlId = '_' + Math.random()
                                 .toString(36)
                                 .substr(2, 9);
    }
  }

  public valueChanged(): void {
    this.valueChangeEvent.emit(this.controlValue);
  }
}
