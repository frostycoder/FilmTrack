import {Component, Input, OnInit} from '@angular/core';
import {LightBulbTestResults} from './light-bulb-test-results';

@Component({
  selector: 'app-light-bulb-test-results',
  templateUrl: './light-bulb-test-results.component.html',
  styleUrls: ['./light-bulb-test-results.component.scss']
})
export class LightBulbTestResultsComponent implements OnInit {
  @Input() public result: LightBulbTestResults = null;

  constructor() { }

  ngOnInit(): void {
  }

}
