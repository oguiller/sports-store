import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CartDetailComponent } from './store/cartDetail.component';
import { CheckoutComponent } from './store/checkout.component';
import { StoreComponent } from './store/store.component';
import { StoreModule } from './store/store.module';
import { StoreFirstGuard } from "./storeFirst.guard";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [BrowserModule, StoreModule,
    RouterModule.forRoot([
      {path: 'store', component: StoreComponent, canActivate: [StoreFirstGuard]},
      {path: 'cart', component: CartDetailComponent, canActivate: [StoreFirstGuard]},
      {path: 'checkout', component: CheckoutComponent, canActivate: [StoreFirstGuard]},
      {path: '**', redirectTo: '/store'}
    ])],
  providers: [StoreFirstGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
  /**
   *  That’s because the root module only really exists to provide information through the @NgModule decorator. The imports property tells
   *  Angular that it should load the BrowserModule feature module, which contains the core Angular features required for a web application.
   *
   *  The declarations property tells Angular that it should load the root component, the providers property tells Angular about the
   *  shared objects used by the application, and the bootstrap property tells Angular that the root component is the AppModule class.
   *  I’ll add information to this decorator’s properties as I add features to the SportsStore application, but this basic configuration
   *  is enough to start the application.
   */

}
