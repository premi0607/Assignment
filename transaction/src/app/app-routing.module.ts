import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayExpenseComponent } from './display-expense/display-expense.component';

const routes: Routes = [
  {path:'expenselist',component:DisplayExpenseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
