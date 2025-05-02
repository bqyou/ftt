// app.routes.ts
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UnlimitedComponent } from './unlimited/unlimited.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'unlimited', component: UnlimitedComponent }
];
