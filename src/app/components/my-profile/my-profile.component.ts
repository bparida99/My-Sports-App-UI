import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, TitleStrategy } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {
 playerDetails:any;
 playereditForm:FormGroup;
 flag1:any;
 flag2:any = true;
 playerData:any;
  constructor(private router: Router,private service : PlayerService) { 
    this.playereditForm = new FormGroup({
      email: new FormControl("", [Validators.required]),
      password: new FormControl("", [Validators.required])
    });
  }

  ngOnInit(): void {
    this.playerData = localStorage.getItem('playertoken');
    if(this.playerData==null || this.playerData=="" ){
      this.router.navigateByUrl('/');
    }else{
    var playerId=localStorage.getItem('playerid');
    this.service.getPlayerDetails(playerId).subscribe((data)=>{
         this.playerDetails = data.obj;
         console.log(this.playerDetails);
         console.log(data.obj);
         
    });
       }
  }

  edit(){
      this.flag1=true;
      this.flag2=false;
      this.playereditForm = new FormGroup({
      email: new FormControl(this.playerDetails.playerEmail, [Validators.required]),
      password: new FormControl(this.playerDetails.playerPwd, [Validators.required])
    });
  }

  update(){
    this.playerDetails.playerEmail= this.playereditForm.value.email;
    this.playerDetails.playerPwd =this.playereditForm.value.password;
    console.log(this.playerDetails);
    this.service.updatePlayerDetails(this.playerDetails).subscribe((data)=>{
     console.log(data);
     alert("data changed successfully, Please login again.");
     this.router.navigateByUrl('/log-out');
    });
  }

}
