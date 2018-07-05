import { Component, OnInit } from '@angular/core';
import{ZonesService} from '../../../services/FetchingServices/zones.service'
import {SendDataService} from '../../../services/PostingServices/send-data.service'

@Component({
  selector: 'app-hospital-reg',
  templateUrl: './hospital-reg.component.html',
  styleUrls: ['./hospital-reg.component.css']
})
export class HospitalRegComponent implements OnInit {
////////
 zone:any;
 division:any;
 station:any;
 name:any;
 center:any;

/////////
  selectedZone:any;
  zones:any=[];
  divisions:any=[];
  availableDivision:any=[];
  uniqueid:String;
  healthcarecode:any=[];
  availableStation:any=[];
  divisionCodeSelected:String;
  divCd:any;
  zoneCd:any;
  stationCd:any;
  constructor(private zoneService:ZonesService,
  private sendData:SendDataService) { }

  ngOnInit() {
   var url;
    this.uniqueid="H"+Date.now();
    console.log(this.uniqueid);
    this.zoneService.getAlldata(url).then(zones=>{
      this.zones=zones;
    })
    this.zoneService.getAllDivisions().then(divisions=>{
      this.divisions=divisions;
    })
    this.healthcarecode=[
      {hospital_type:"CH",hospital_desc:"Central Hospital"},
      {hospital_type:"CTR",hospital_desc:"Central"},
      {hospital_type:"DH",hospital_desc:"Division Unit"},
      {hospital_type:"SD",hospital_desc:"Sub Divisional"},
      {hospital_type:"POL",hospital_desc:"Polycline"},
      {hospital_type:"HU",hospital_desc:"Health Unit"},
      {hospital_type:"SUS",hospital_desc:"Super Speciality"}
    ]
  }
  
  onChangezone(deviceValue) {
    this.selectedZone=deviceValue;
    this.availableDivision=[];
    this.zoneCd=this.selectedZone.substring(0,2);
    this.zoneService.getAvailableDivisions(this.selectedZone.substring(0,2)).then(availableDivision=>{
      this.availableDivision=availableDivision;
    })
    
  }
  onChangedivision(deviceValue){
    var availablecode=deviceValue;
    this.availableStation=[];
    this.divisionCodeSelected="";
    var i:any;
    var ctr:any;
    ctr=0;
    for(i=0;i<availablecode.length;i++){
      if(availablecode.charAt(i)=='-'){
        break;
      }
      this.divisionCodeSelected+=availablecode.charAt(i);
      this.divCd=this.divisionCodeSelected;
    }
    this.zoneService.getAvailableStations(this.divisionCodeSelected).then(availableStation=>{
      this.availableStation=availableStation;
    })
  }
  onchangestation(deviceValue){
    this.stationCd="";
    var ctr:any;
    ctr=0;

    for(var i=0;i<deviceValue;i++){
      if(deviceValue.charAt(i)=='-'){
        break;
      }
      this.stationCd+=deviceValue.charAt(i);
    }
  }
  onsubmit(){
    let hospital={
      name:this.name,
      center:this.center,
      zoneCode:this.zoneCd,
      divisionCode:this.divCd,
      stationCd:this.stationCd,
      hospitalid:this.uniqueid
    }
    this.sendData.registerHospital(hospital).then(data=>{
      console.log(data);
    },err=>{
      console.log(err);
    })
    alert("regisetered");
    window.location.href="http://localhost:4200";
  }
}
