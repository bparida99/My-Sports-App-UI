import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private http: HttpClient) { }

  resistraion(player:any){
    
    return this.http.post<any>(`http://localhost:9091/player/registration`,player);
  }

  login(auth:any){
    
    return this.http.post<any>(`http://localhost:9091/player/authenticate`,auth);
  }

  getPlayerDetails(id:any){
    return this.http.get<any>(`http://localhost:9091/player/getPlayerData/`+id,this.getHttpHeader());
  }

  updatePlayerDetails(player:any){
    return this.http.post<any>(`http://localhost:9091/player/editPlayer`,player,this.getHttpHeader());
  }

  private getHttpHeader(): { headers: HttpHeaders } {

    return {

      headers: new HttpHeaders()
        .set(
          'Authorization',
          `Bearer ${localStorage.getItem('playertoken')}`
        )

    };

  }
}
