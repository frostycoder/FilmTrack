import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NumericInputComponent} from './numeric-input/numeric-input.component';

@NgModule({
  declarations: [
    NumericInputComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    NumericInputComponent
  ]
})
export class SharedModule {
}
