import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
  exports: [
    NgFlashMessageComponent
  ]
})
export class NgFlashMessagesModule {}
