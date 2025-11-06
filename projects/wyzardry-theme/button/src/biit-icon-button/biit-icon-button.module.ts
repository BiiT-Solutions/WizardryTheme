import {NgModule} from '@angular/core';
import {BiitIconButtonComponent} from './biit-icon-button.component';
import {BiitIconModule} from 'wyzardry-theme/icon';

@NgModule({
  declarations: [
    BiitIconButtonComponent
  ],
  imports: [
    BiitIconModule
  ],
  exports: [
    BiitIconButtonComponent
  ]
})
export class BiitIconButtonModule { }
