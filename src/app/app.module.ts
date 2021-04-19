import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PreviewCardModule } from './shared/preview-card/preview-card.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PreviewCardModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
