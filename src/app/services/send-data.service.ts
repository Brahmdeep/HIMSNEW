import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SendDataService {
  authToken:any;
  staff:any;

  constructor(private http:Http) { }

  registerStaff(staff){
    let headers=new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('/routes/register',staff,{headers:headers})
    .pipe(map((res)=>{
      console.log('sending data '+res);
      return res;
    }));
  }
}
