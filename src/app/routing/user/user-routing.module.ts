import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from '../../components/user/user-list/user-list.component';
import { UserDetailsComponent } from '../../components/user/user-details/user-details.component';
import { UserCreateComponent } from '../../components/user/user-create/user-create.component';


const routes: Routes = [
  { path: 'users', component: UserListComponent },
  { path: 'details/:id', component: UserDetailsComponent},
  { path: 'create', component: UserCreateComponent}
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
export class UserRoutingModule { }
