import {NgModule} from '@angular/core';
import {LocalizedDatePipe} from './localized-date-pipe';

@NgModule({
  declarations: [LocalizedDatePipe],
  exports: [LocalizedDatePipe],
  imports: []
})
export class LocalizedDatePipeModule {}
