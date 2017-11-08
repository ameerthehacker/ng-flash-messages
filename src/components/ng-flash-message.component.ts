import { Component } from '@angular/core';
import { 
    state, 
    trigger, 
    style,
    transition,
    animate
} from '@angular/animations';

@Component({
    selector: 'ng-flash-message',
    templateUrl: './ng-flash-message.component.html',
    styleUrls: ['./styles.scss'],
    animations: [
        trigger('alertState', [
            state('visible', style({
                opacity: 1
            })),
            state('invisible', style({
                opacity: 0
            })),
            transition('visible => invisible', animate('1000ms ease-in')),
            transition('invisible => visible', animate('0ms linear'))
        ])
    ]
})
export class NgFlashMessageComponent {

    alertVisibility: string = 'visible';

    onBtnCloseClick(evt) {
        evt.preventDefault();
        this.alertVisibility = 'invisible';
    }
}