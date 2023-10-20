import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { NgmoduleRoutingModule } from './ngmodule-routing.module';
import { NgmoduleComponent } from './ngmodule.component';


@NgModule({
  declarations: [NgmoduleComponent],
  imports: [
    CommonModule,
    NgmoduleRoutingModule,
    IonicModule
  ]
})
export class NgmoduleModule { }
