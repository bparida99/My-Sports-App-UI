import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SportsService } from 'src/app/services/sports.service';
import { Booking } from '../model/booking';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  allSports!: any[];
  selectsports:any;
  allTimmings!: any[];
  selectedTimmings:any;
  flag:any;
  bookingDatails:Booking= new Booking(null,null,null,null,null,null,null);
  playerData:any;
  sportsData!:any;
  bookingdate:any;
  constructor(private service:SportsService,private router: Router) { }
  
  ngOnInit(): void {
    this.playerData = localStorage.getItem('playertoken');
    if(this.playerData==null || this.playerData=="" ){
      this.router.navigateByUrl('/');
    }
    this.service.getallSports().subscribe((data)=>{
      this.allSports = data;
    });
  }

  setFlag(){
    this.service.getallTimmings(this.selectsports).subscribe((data)=>{
      this.allTimmings = data;
    });
    this.flag= true;
  }

  booking(){
    if(this.bookingdate==null|| this.bookingdate==""){
      alert("Please select a date");
      return;
    }
    if(this.selectedTimmings==null|| this.selectedTimmings==""){
      alert("Please select a time slot");
      return;
    }
    this.bookingDatails.id=null;
      this.bookingDatails.playerId=localStorage.getItem('playerid');
      this.bookingDatails.playerName=localStorage.getItem('playername');
      this.bookingDatails.sportsId = this.selectedTimmings;
      this.bookingDatails.bookingDate = this.bookingdate;
     console.log(this.bookingDatails)
    this.service.addBooking(this.bookingDatails).subscribe((data)=>{
     console.log(data);
     alert(data.msg);
     
    });
  }

}
