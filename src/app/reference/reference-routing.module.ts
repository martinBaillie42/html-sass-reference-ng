import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ReferenceComponent} from './reference.component';

const routes: Routes = [
    {path: 'reference', component: ReferenceComponent},
    {path: '', redirectTo: 'reference', pathMatch: 'full'}, // default route
    {path: '**', redirectTo: 'reference', pathMatch: 'full'} // any unknown routes
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ReferenceRoutingModule {
}
