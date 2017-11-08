import { Injectable, EventEmitter } from '@angular/core';

import { FlashMessage } from '../models/flash-message';

@Injectable()
export class NgFlashMessageService {
    
    showFlashMessageEvent: EventEmitter<FlashMessage> = new EventEmitter<FlashMessage>();

    showFlashMessage(flashMessage: FlashMessage) {
        this.showFlashMessageEvent.emit(flashMessage);
    }

}