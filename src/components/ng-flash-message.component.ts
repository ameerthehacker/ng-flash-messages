import { Component, OnInit } from '@angular/core';
import { 
    state, 
    trigger, 
    style,
    transition,
    animate
} from '@angular/animations';

import { FlashMessage } from '../models/flash-message';

import { NgFlashMessageService } from '../services/ng-flash-message.service';

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
            transition('visible => invisible', animate('500ms ease-in')),
            transition('invisible => visible', animate('0ms linear'))
        ])
    ]
})
export class NgFlashMessageComponent implements OnInit {

    flashMessage: FlashMessage;
    alertVisibility: string = 'invisible';

    constructor(private ngFlashMessageService: NgFlashMessageService) {}

    ngOnInit() {
        this.flashMessage = new FlashMessage;

        this.ngFlashMessageService.showFlashMessageEvent.subscribe((flashMessage: FlashMessage) => {
            this.alertVisibility = 'visible';
            flashMessage.type = flashMessage.type ? flashMessage.type: 'info'
            flashMessage.timeout = flashMessage.timeout === undefined ? 2000: flashMessage.timeout;

            this.flashMessage = flashMessage;
            if(flashMessage.timeout) {
                setTimeout(() => {
                    this.alertVisibility = 'invisible';
                }, flashMessage.timeout)
            }
        });
    }
    onBtnCloseClick(evt) {
        evt.preventDefault();
        this.alertVisibility = 'invisible';
    }
}