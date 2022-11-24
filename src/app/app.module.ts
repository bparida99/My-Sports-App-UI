import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { PlayerLoginComponent } from './components/player-login/player-login.component';
import { PlayerNavbarComponent } from './components/player-navbar/player-navbar.component';
import { PlayerRegistraionComponent } from './components/player-registraion/player-registraion.component';
import { PlayerService } from './services/player.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { LogedinPlayerNavbarComponent } from './components/logedin-player-navbar/logedin-player-navbar.component';
import { PlayerHomeComponent } from './components/player-home/player-home.component';
import { BookingComponent } from './components/booking/booking.component';
import { AllBookingsComponent } from './components/all-bookings/all-bookings.component';
import { LogOutComponent } from './components/log-out/log-out.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';


@NgModule({
  declarations: [
    AppComponent,
    PlayerRegistraionComponent,
    PlayerLoginComponent,
    PlayerNavbarComponent,
    LogedinPlayerNavbarComponent,
    PlayerHomeComponent,
    BookingComponent,
    AllBookingsComponent,
    LogOutComponent,
    MyProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [PlayerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
