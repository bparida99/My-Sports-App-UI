import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SportsService } from 'src/app/services/sports.service';

@Component({
  selector: 'app-all-bookings',
  templateUrl: './all-bookings.component.html',
  styleUrls: ['./all-bookings.component.css']
})
export class AllBookingsComponent implements OnInit {

  bookings: any[] = [];
  playerData:any;
  constructor(private sportsservice: SportsService,private router: Router) { }

  ngOnInit(): void {
    this.playerData = localStorage.getItem('playertoken');
    if(this.playerData==null || this.playerData=="" ){
      this.router.navigateByUrl('/');
    }else{
      var playerId = localStorage.getItem('playerid');
    this.sportsservice.getBookingById(playerId).subscribe((data)=>{
      this.bookings = data;
    });
  }
  }

}
