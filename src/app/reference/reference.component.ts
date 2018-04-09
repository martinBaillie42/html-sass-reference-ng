import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'hsr-reference',
    template: `
        <h1>HTML and SASS reference</h1>
        <hsr-select-styled></hsr-select-styled>
    `,
    styles: []
})
export class ReferenceComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

}
