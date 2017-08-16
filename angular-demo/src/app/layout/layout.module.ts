import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './header/header.component';

import { AccountModule } from '../account/account.module';

@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule,
    AccountModule
  ],
  declarations: [LayoutComponent, HeaderComponent],
  exports: [LayoutComponent]
})
export class LayoutModule { }
