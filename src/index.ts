import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgFlashMessageComponent } from './components/ng-flash-message.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    NgFlashMessageComponent
  ],
  exports: [
    NgFlashMessageComponent
  ]
})
export class NgFlashMessagesModule {}
