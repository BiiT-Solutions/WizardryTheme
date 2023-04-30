import {NgModule} from '@angular/core';
import {BiitIconButtonComponent} from './biit-icon-button.component';
import {BiitIconModule} from 'biit-ui/icon';

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
