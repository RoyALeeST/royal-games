import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from '../../components/admin/admin.component';

const routes: Routes = [
  { path: '', component: AdminComponent },
  { path: 'details/:id', component: AdminComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ],
})
export class AdminRoutingModule { }
