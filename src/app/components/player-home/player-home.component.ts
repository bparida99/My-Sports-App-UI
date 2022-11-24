import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnonymousSubject } from 'rxjs/internal/Subject';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-player-home',
  templateUrl: './player-home.component.html',
  styleUrls: ['./player-home.component.css']
})
export class PlayerHomeComponent implements OnInit {
  ImagePath : any = '/assets/my-sports-app-home.png';
  name:any;
  playerData:any;
  constructor(private router: Router,private service: PlayerService) { }

  ngOnInit(): void {
    this.playerData = localStorage.getItem('playertoken');
    if(this.playerData==null || this.playerData=="" ){
      this.router.navigateByUrl('/');
    }else{
      this.name = localStorage.getItem('playername');
    }

  
  }

}
