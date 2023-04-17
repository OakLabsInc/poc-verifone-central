import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TranstactionsComponent } from './components/transtactions/transtactions.component';

const routes: Routes = [
  { path: 'payments/dashboard', component: DashboardComponent },
  { path: 'payments/transactions', component: TranstactionsComponent },
  { path: 'payments', redirectTo: 'payments/dashboard' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


