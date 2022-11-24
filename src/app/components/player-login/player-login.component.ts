import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';
@Component({
  selector: 'app-player-login',
  templateUrl: './player-login.component.html',
  styleUrls: ['./player-login.component.css']
})
export class PlayerLoginComponent implements OnInit {
  playerLoginForm:FormGroup;
  flag:any=false;
  message:any;
  playerData:any;
  constructor(private router: Router,private service:PlayerService) { 
    this.playerLoginForm = new FormGroup({
      userName: new FormControl("", [Validators.required]),
      password: new FormControl("", [Validators.required])
    });
  }

  ngOnInit(): void {
  }

  login(){
    if(this.playerLoginForm.value.userName==""){
      this.flag=true;
      this.message = "Provide a valid id";
      return
    }if(this.playerLoginForm.value.password==""){
      this.flag=true;
      this.message ="Provide the password";
      return
    }
    else{
      this.flag=false;
      this.message ="";
      this.service.login(this.playerLoginForm.value).subscribe((data)=>{
         if(data.status=="OK"){
          var player = data.obj;
          localStorage.setItem('playertoken', data.obj);
          localStorage.setItem('playerid', data.playerId);
          localStorage.setItem('playername', data.playerName);
          //localStorage.setItem('playerid', this.playerLoginForm.value.userName);
          this.router.navigateByUrl('/player-home');
          
         }else{
          this.flag=true;
          this.message =data.msg;
         }
      });
    }
    
  }


}
