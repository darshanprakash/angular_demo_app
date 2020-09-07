import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { CustomersModule } from './customers/customers.module';
import { OrdersModule } from './orders/orders.module'
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module'
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    //Don't import browser modules more than once
    BrowserModule,
    AppRoutingModule,
    CustomersModule,
    OrdersModule,
    SharedModule,
    CoreModule
  ],
  providers: [],
  //bootstrap ? what is the start up component
  bootstrap: [AppComponent]
})
export class AppModule { }
