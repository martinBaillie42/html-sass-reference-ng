import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'hsr-select-styled',
    template: `
        <div class="select-wrapper">
            <label for="the-id-of-the-selector">Pick a number</label>
            <select id="the-id-of-the-selector">
                <option>Select your number</option>
                <option>One</option>
                <option>Two</option>
                <option>Three</option>
            </select>
            <i class="fa fa-angle-down"></i>
        </div>
    `,
    styleUrls: ['./select-styled.component.scss']
})
export class SelectStyledComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

}
