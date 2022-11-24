import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SportsService {

  constructor(private http: HttpClient) { }

  getallSports(){
    
    return this.http.get<any>(`http://localhost:9091/sports/getAll`);
  }

  getallTimmings(name:any){
    return this.http.get<any>(`http://localhost:9091/sports/getAllByName/${name}`);
  }

  getById(id:any){
    return this.http.get<any>(`http://localhost:9091/sports/getById/${id}`);
  }

  addBooking(booking:any){
    console.log(booking);
    
    return this.http.post<any>(`http://localhost:9091/booking/addBooking`,booking);
  }

  getBookingById(id:any){
    return this.http.get<any>(`http://localhost:9091/booking/get/${id}`);
  }
}
