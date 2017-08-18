import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableModule } from 'primeng/components/datatable/datatable';
import { SharedModule } from 'primeng/components/common/shared';

import { AccountDetailRoutingModule } from './account-detail-routing.module';
import { AccountDetailComponent } from './account-detail.component';


@NgModule({
  imports: [
    CommonModule,
    AccountDetailRoutingModule,
    DataTableModule,
    SharedModule
  ],
  declarations: [AccountDetailComponent]
})
export class AccountDetailModule { }
