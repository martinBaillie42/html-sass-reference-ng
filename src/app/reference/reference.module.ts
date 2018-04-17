import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ReferenceRoutingModule} from './reference-routing.module';
import {ReferenceComponent} from './reference.component';
import { SelectStyledComponent } from './elements/select-styled.component';
import { ModalComponent } from './elements/modal.component';

@NgModule({
    imports: [
        CommonModule,
        ReferenceRoutingModule
    ],
    declarations: [ReferenceComponent, SelectStyledComponent, ModalComponent]
})
export class ReferenceModule {
}
