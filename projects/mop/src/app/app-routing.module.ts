import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { OrdersComponent } from './components/orders/orders.component';

const routes: Routes = [
  { path: 'mop/dashboard', component: DashboardComponent },
  { path: 'mop/orders', component: OrdersComponent },
  { path: 'mop', redirectTo: 'mop/dashboard' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
