import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { from } from 'rxjs';

@NgModule({
  declarations: [],
  imports: [CommonModule, DashboardRoutingModule, CommonModule, MatToolbarModule, MatButtonModule],
})
export class DashboardModule {}
