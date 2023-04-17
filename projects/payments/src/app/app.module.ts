import { ModuleWithProviders, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TranstactionsComponent } from './components/transtactions/transtactions.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TranstactionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

@NgModule({})
export class paymentsSharedModule{
  static forRoot(): ModuleWithProviders<AppModule> {
    return {
      ngModule: AppRoutingModule,
      providers: []
    }
  }
}
