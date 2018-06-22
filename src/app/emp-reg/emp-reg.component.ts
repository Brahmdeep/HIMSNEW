import { Component, OnInit } from '@angular/core';
import { ZonesService } from '../zones.service';
import { CommonModule } from '@angular/common';  

@Component({
  selector: 'app-emp-reg',
  templateUrl: './emp-reg.component.html',
  styleUrls: ['./emp-reg.component.css']
})

export class EmpRegComponent implements OnInit {
 
  //Properties
  
 
 
 
  zone:any;
  zones:any=[];
  categoryopt:any[];
  divisions:any=[];
  forCompare:any;
  availabledivisions:any=[];


  constructor(private zoneService:ZonesService) { }
  category:any;
  ngOnInit() {
    this.zoneService.getAllZones().subscribe(zones=>{
      this.zones=zones;
    })
    this.zoneService.getAllDivisions().subscribe(divisions=>{
      this.divisions=divisions;
    })
    this.categoryopt=[
      {opt:"NR"},
      {opt:"REIHS"},
      {opt:"RF"},
      {opt:"TEMP"},
      {opt:"OS"},
  
    ]
  }
  makeid() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
    for (var i = 0; i < 6; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  
    alert(text);
  }
  onChange(deviceValue) {
    this.category=deviceValue;
  }
  onChangezone(deviceValue) {
    this.availabledivisions=[];
    this.zone=deviceValue;
    this.forCompare=this.zone.substring(0,2);
    for(var i=0;i<this.divisions.length;i++){
        if(this.forCompare==this.divisions[i].znCd){
        this.availabledivisions.push(this.divisions[i]);
    }
   }
 }
 
}
