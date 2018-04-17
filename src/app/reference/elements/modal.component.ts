import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'hsr-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

    public open: boolean;

    constructor() {
    }

    ngOnInit() {
        this.open = false;
    }

}
