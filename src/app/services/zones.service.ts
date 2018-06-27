import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ZonesService {
  constructor(private http:HttpClient) {}
  getAllZones(){
    return new Promise(resolve=>{
      this.http.get('http://localhost:3000/api/ZoneMsts').subscribe(data=>{
        resolve(data);
      },err=>{
        console.log(err);
      })
    })
}
  getAllDivisions(){
    return new Promise(resolve=>{
      this.http.get('http://localhost:3000/api/DivisionMsts').subscribe(data=>{
        resolve(data);
      },err=>{
        console.log(err);
      })
    })
  }

}
