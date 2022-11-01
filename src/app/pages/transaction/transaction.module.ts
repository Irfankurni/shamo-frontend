import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionListComponent } from './transaction-list/transaction-list.component';
import { TransactionRouting } from './transaction.routing';



@NgModule({
  declarations: [
    TransactionListComponent
  ],
  imports: [
    CommonModule,
    TransactionRouting
  ]
})
export class TransactionModule { }
