import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarRebrandComponent } from './components/navbar-rebrand/navbar-rebrand.component';
import { mopSharedModule } from 'projects/mop/src/app/app.module';
import { paymentsSharedModule } from 'projects/payments/src/app/app.module';
import { commerceSharedModule } from 'projects/commerce/src/app/app.module';


@NgModule({
  declarations: [
    AppComponent,
    NavbarRebrandComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    mopSharedModule.forRoot(),
    paymentsSharedModule.forRoot(),
    commerceSharedModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
