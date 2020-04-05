import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LightBulbTestClientComponent} from './lights/light-bulb-test-client/light-bulb-test-client.component';
import {LightBulbTestHomeComponent} from './lights/light-bulb-test-home/light-bulb-test-home.component';
import {LightBulbTestServerComponent} from './lights/light-bulb-test-server/light-bulb-test-server.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: LightBulbTestHomeComponent
  },
  {
    path: 'client',
    component: LightBulbTestClientComponent
  },
  {
    path: 'server',
    component: LightBulbTestServerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
