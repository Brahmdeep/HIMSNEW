import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ZonesService {
  constructor(private http:HttpClient) {}
  getAllZones(){
    return this.http.get('/routes/posts/').pipe(map((zones)=>{
      console.log("sending data from console "+zones);
      return zones;
    }));
}}
