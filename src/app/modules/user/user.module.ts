import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

//Custom Modules
import { UserRoutingModule } from '../../routing/user/user-routing.module';
import { SharedModule } from '../../shared/modules/shared.module';

//Custom Components
import { UserListComponent } from '../../components/user/user-list/user-list.component';
import { UserDetailsComponent } from '../../components/user/user-details/user-details.component';
import { UserDataComponent } from '../../components/user/user-details/user-data/user-data.component';
import { AccountDataComponent } from '../../components/user/user-details/account-data/account-data.component';
import { UserCreateComponent } from '../../components/user/user-create/user-create.component';

// Custom Services

@NgModule({
  declarations: [
    UserListComponent,
    UserDetailsComponent,
    UserDataComponent,
    AccountDataComponent,
    UserCreateComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ]
})
export class UserModule { }
