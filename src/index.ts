import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgFlashMessageService } from './services/ng-flash-message.service';

import { NgFlashMessageComponent } from './components/ng-flash-message.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  declarations: [
    NgFlashMessageComponent
  ],
  providers: [
    NgFlashMessageService
  ],
  exports: [
    NgFlashMessageComponent
  ]
})
export class NgFlashMessagesModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgFlashMessagesModule,
      providers: [NgFlashMessageService]
    }
  }
}

export { NgFlashMessageService } from './services/ng-flash-message.service';