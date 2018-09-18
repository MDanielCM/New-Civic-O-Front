import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { SingInPage } from './singin';

@NgModule({
  declarations: [
    SingInPage,
  ],
  imports: [
    IonicPageModule.forChild(SingInPage),
  ],
  exports: [
    SingInPage
  ]
})
export class SingInPageModule { }