import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'hsr-select-styled',
    template: `
        <label for="the-id-of-the-selector">Pick a number</label>
        <div class="to-set-the-background-color">
            <select id="the-id-of-the-selector">
                <option>One</option>
                <option>Two</option>
                <option>Three</option>
            </select>
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
