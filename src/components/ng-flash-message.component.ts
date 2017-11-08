import { Component, OnInit } from '@angular/core';
import { 
    state, 
    trigger, 
    style,
    transition,
    animate
} from '@angular/animations';

import { IFlashMessage } from '../models/flash-message';

@Component({
    selector: 'ng-flash-message',
    templateUrl: './ng-flash-message.component.html',
    styleUrls: ['./styles.scss'],
    animations: [
        trigger('alertState', [
            state('visible', style({
                opacity: 1,
                display: 'block'
            })),
            state('invisible', style({
                opacity: 0,
                display: 'none'
            })),
            transition('visible => invisible', animate('1000ms ease-in')),
            transition('invisible => visible', animate('0ms linear'))
        ])
    ]
})
export class NgFlashMessageComponent implements OnInit {

    flashMessage: IFlashMessage;

    alertVisibility: string = 'visible';

    ngOnInit() {
        this.flashMessage = new IFlashMessage();
    }
    onBtnCloseClick(evt) {
        evt.preventDefault();
        this.alertVisibility = 'invisible';
    }
}