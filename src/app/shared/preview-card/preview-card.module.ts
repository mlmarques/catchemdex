import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PreviewCardComponent } from './preview-card.component';


@NgModule({
  declarations: [
    PreviewCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PreviewCardComponent
  ]
})
export class PreviewCardModule { }
