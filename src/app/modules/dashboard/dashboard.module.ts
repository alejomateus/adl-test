import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { ToolbarModule } from '@toolbar/toolbar.module';
import { CardModule } from '@card/card.module';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  }
];


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    ToolbarModule,
    CardModule,
    RouterModule.forChild(routes)
  ]
})
export class DashboardModule { }
