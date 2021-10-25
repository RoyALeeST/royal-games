import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../components/common/home/home.component';
import { NotFoundComponent } from '../components/common/error-pages/not-found/not-found.component';
import { ServerErrorComponent } from '../components/common/error-pages/server-error/server-error.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: "user", loadChildren: () => import ("../modules/user/user.module").then(m => m.UserModule) },
  { path: '404', component: NotFoundComponent}, 
  { path: '500', component: ServerErrorComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/404', pathMatch: 'full'},
 
];
 
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class RoutingModule { }