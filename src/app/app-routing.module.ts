import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AllBookingsComponent } from "./components/all-bookings/all-bookings.component";
import { BookingComponent } from "./components/booking/booking.component";
import { LogOutComponent } from "./components/log-out/log-out.component";
import { MyProfileComponent } from "./components/my-profile/my-profile.component";
import { PlayerHomeComponent } from "./components/player-home/player-home.component";
import { PlayerLoginComponent } from "./components/player-login/player-login.component";
import { PlayerRegistraionComponent } from "./components/player-registraion/player-registraion.component";

const routes: Routes = [
    {
        path : '',
        component:PlayerLoginComponent
    },
    {
        path: 'register',
        component:PlayerRegistraionComponent
    },
    {
      path: 'player-home',
      component: PlayerHomeComponent
    },
    {
      path: 'add-booking',
      component: BookingComponent
    },
    {
      path : "all-booking",
      component : AllBookingsComponent
    },
    {
      path : "log-out",
      component : LogOutComponent
    },
    {
      path : "my-profile",
      component : MyProfileComponent
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
  })
  export class AppRoutingModule {
  }