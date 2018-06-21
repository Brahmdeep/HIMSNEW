import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ZonesService {
  constructor(private http:HttpClient) {}
  getAllZones(){
    return this.http.get('/routes/zones/').pipe(map((zones)=>{
      console.log("sending data from console "+zones);
      return zones;
    }));
}
  getAllDivisions(){
    return this.http.get('/routes/divisions').pipe(map((divisions)=>{
      console.log("sending all the division "+divisions);
      return divisions;
    }))
  }

}
