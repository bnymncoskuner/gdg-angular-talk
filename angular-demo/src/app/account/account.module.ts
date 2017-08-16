import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent } from './account.component';
import { PanelModule } from 'primeng/components/panel/panel';
import { ButtonModule } from 'primeng/components/button/button';
import { AccountDetailModule } from '../account-detail/account-detail.module';

@NgModule({
  imports: [
    CommonModule,
    AccountRoutingModule,
    PanelModule,
    BrowserAnimationsModule,
    ButtonModule,
    AccountDetailModule
  ],
  declarations: [AccountComponent]
})
export class AccountModule { }
