import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { post } from 'selenium-webdriver/http';
import { ResolveEnd } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GetdataService {
  divCode:String;
  divName:String;
  ZoneCode:String;
  taskStatus:String;
  url:string;
  isMod:boolean;

  constructor(private http:HttpClient) { }
  
  updateStatus(status){
    this.taskStatus=status;
    console.log(this.taskStatus);
  }
  getStatus(){
    return this.taskStatus;
  }
  updateUrl(url){
    this.url=url;
    console.log(this.url);
  }
  performtask(data){
    if(this.taskStatus=="get"){
        return new Promise(resolve=>{
          this.http.get(this.url).subscribe(data=>{
            console.log(data); 
          resolve(data);
          },err=>{
            console.log(err);
          })
        })
    }
    if(this.taskStatus=="post"){
      return new Promise(resolve=>{
        this.http.post(this.url,data).subscribe(data=>{
            console.log(data);
          resolve(data);
        },err=>{
          console.log(err);
        })
      })
    }
    if(this.taskStatus=="put"){
      return new Promise(resolve=>{
        this.http.put(this.url,data).subscribe(data=>{
          console.log(data);
          resolve(data);
        },err=>{
          console.log(err);
        })
      })
    }
  }

  putmod(status){
    if(status==undefined){
      this.isMod=false;
    }
    this.isMod=status;
  }
  getmod(status){
    return this.isMod;
  }
  

  
}
