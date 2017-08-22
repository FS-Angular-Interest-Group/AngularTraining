import { NgModule } from '@angular/core';

import { SexNamePipe } from './sex-name.pipe';
import { TokPipe } from './tok.pipe';

@NgModule({
  imports: [
  ],
  declarations: [
    SexNamePipe,
    TokPipe
  ],
  exports:[
    SexNamePipe,
    TokPipe
  ]
})
export class PipesModule { }
