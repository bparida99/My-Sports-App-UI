import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';
@Component({
  selector: 'app-player-registraion',
  templateUrl: './player-registraion.component.html',
  styleUrls: ['./player-registraion.component.css']
})
export class PlayerRegistraionComponent implements OnInit {
    playerRegistrationForm:FormGroup;
  flag:any=false;
  message:any;
  constructor(private service:PlayerService , private router: Router ) { 
    this.playerRegistrationForm = new FormGroup({
      playerName: new FormControl("", [Validators.required]),
      playerdob: new FormControl("", [Validators.required]),
      pan: new FormControl("", [Validators.required]),
      playerEmail: new FormControl("", [Validators.required]),
      playerPhone: new FormControl("", [Validators.required]),
      playerPwd: new FormControl("", [Validators.required]),
    });
  }
 
  ngOnInit(): void {
  }

  signup(){
    var form= this.playerRegistrationForm.value;
    if(form.playerName==""){
      this.flag=true;
      this.message = "name error";
      return
    }if(form.playerdob==""){
      this.flag=true;
      this.message ="age error";
      return
    }
    if(form.pan==""){
        this.flag=true;
        this.message ="age error";
        return
      }
      if(form.playerEmail==""){
        this.flag=true;
        this.message ="age error";
        return
      } if(form.playerPhone==""){
        this.flag=true;
        this.message ="age error";
        return
      }if(form.playerPwd==""){
        this.flag=true;
        this.message ="age error";
        return
      }
    else{
      this.flag=false;
      this.message ="";
      this.service.resistraion(form).subscribe((data)=>{
        console.log(data);
        if (data.msg!="Success"){
            this.flag=true;
            this.message =data.msg;
        }else{
            alert("PlayerId is :"+data.obj.playerId);
            this.router.navigateByUrl('/');
        }
      })
    }
    
  }


}
