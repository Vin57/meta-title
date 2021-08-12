import { Routes } from '@angular/router';
import { CustomerComponent } from './domain/customer/component/customer.component';
import { HomepageComponent } from './domain/homepage/component/homepage.component';

export const APP_ROUTES: Routes = [
  { path: 'home', component: HomepageComponent, pathMatch: 'full' },
  { path: 'customer', component: CustomerComponent },
  { path: '**', redirectTo: 'home' },
];
