import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ItemPricePopupComponent } from './item-price-popup/item-price-popup.component';
import { DocumentSelectComponent } from './document-select/document-select.component';
import { SuccessPageComponent } from './success-page/success-page.component';


@NgModule({
  declarations: [
    AppComponent,
    ItemPricePopupComponent,
    DocumentSelectComponent,
    SuccessPageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
