import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ProtegidaComponent } from './components/protegida/protegida.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { AuthModule } from '@auth0/auth0-angular'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProtegidaComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule.forRoot({
      domain: 'dev-2c8gvwcr.us.auth0.com',
      clientId: 's8xahucxPbbsdVUILflaytrFTcSPkpgf'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
