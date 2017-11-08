import { Component } from '@angular/core';

@Component({
    selector: 'ng-flash-message',
    templateUrl: './ng-flash-message.component.html',
    styleUrls: ['./styles.scss']
})
export class NgFlashMessageComponent {

    alertVisible: boolean = true;

    onBtnCloseClick(evt) {
        evt.preventDefault();
        this.alertVisible = false;
    }
}