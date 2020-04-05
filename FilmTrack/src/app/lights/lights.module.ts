import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../shared/shared.module';
import {LightBulbHeaderComponent} from './light-bulb-header/light-bulb-header.component';
import {LightBulbTestClientComponent} from './light-bulb-test-client/light-bulb-test-client.component';
import {LightBulbTestHomeComponent} from './light-bulb-test-home/light-bulb-test-home.component';
import {LightBulbTestResultsComponent} from './light-bulb-test-results/light-bulb-test-results.component';
import {LightBulbTestServerComponent} from './light-bulb-test-server/light-bulb-test-server.component';
import {LightBulbTestComponent} from './light-bulb-test/light-bulb-test.component';
import {LightBulbComponent} from './light-bulb/light-bulb.component';

@NgModule({
  declarations: [
    LightBulbTestComponent,
    LightBulbComponent,
    LightBulbTestServerComponent,
    LightBulbTestClientComponent,
    LightBulbTestResultsComponent,
    LightBulbHeaderComponent,
    LightBulbTestHomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule
  ],
  exports: [
    LightBulbTestComponent,
    LightBulbComponent,
    LightBulbTestHomeComponent
  ]
})

export class LightsModule {
}
