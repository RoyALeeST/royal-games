import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'; // Angular material Browser Animations

import { AppComponent } from './app.component';


//Custom Modules
import { SharedModule } from './shared/modules/shared.module'
import { MillionaireModule } from './modules/millionaire/millionaire.module'
import {NgParticlesModule} from "ng-particles";

// Custom Components
import { LayoutComponent } from './components/common/layout/layout.component';
import { HomeComponent } from './components/common/home/home.component';
import { RoutingModule } from './routing/routing.module';
import { HeaderComponent } from './components/common/navigation/header/header.component';
import { SidenavListComponent } from './components/common/navigation/sidenav-list/sidenav-list.component';
import { NotFoundComponent } from './components/common/error-pages/not-found/not-found.component';
import { ServerErrorComponent } from './components/common/error-pages/server-error/server-error.component';
import { SpinWheelComponent } from './components/games/spin-wheel/spin-wheel.component';
import { ScriptService } from './shared/services/script-loader.service';
import { SpinWheelService } from './services/games/spinwheel.service';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HomeComponent,
    HeaderComponent,
    SidenavListComponent,
    NotFoundComponent,
    ServerErrorComponent,
    SpinWheelComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RoutingModule,
    HttpClientModule,
    NgParticlesModule,
    SharedModule,
    MillionaireModule,
  ],
  exports:[NgParticlesModule],
  providers: [ScriptService, SpinWheelService],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
