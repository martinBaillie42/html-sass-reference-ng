import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReferenceRoutingModule } from './reference-routing.module';
import { ReferenceComponent } from './reference.component';

@NgModule({
  imports: [
    CommonModule,
    ReferenceRoutingModule
  ],
  declarations: [ReferenceComponent]
})
export class ReferenceModule { }
