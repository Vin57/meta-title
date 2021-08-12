import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { APP_ROUTES } from './app.routes';
import { CustomerComponent } from './domain/customer/component/customer.component';
import { HomepageComponent } from './domain/homepage/component/homepage.component';

@NgModule({
  declarations: [AppComponent, HomepageComponent, CustomerComponent],
  imports: [BrowserModule, RouterModule.forRoot(APP_ROUTES)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
