import { Component, OnInit } from '@angular/core';
import{ZonesService} from '../../../services/FetchingServices/zones.service'

@Component({
  selector: 'app-hospital-reg',
  templateUrl: './hospital-reg.component.html',
  styleUrls: ['./hospital-reg.component.css']
})
export class HospitalRegComponent implements OnInit {

  selectedZone:any;
  zones:any=[];
  divisions:any=[];
  availableDivision:any=[];
  uniqueid:String;

  constructor(private zoneService:ZonesService) { }

  ngOnInit() {
    this.uniqueid="H"+Date.now();
    console.log(this.uniqueid.substring(0,5));
    this.zoneService.getAllZones().then(zones=>{
      this.zones=zones;
    })
    this.zoneService.getAllDivisions().then(divisions=>{
      this.divisions=divisions;
    })
  }
  
  onChangezone(deviceValue) {
    this.selectedZone=deviceValue;
    this.availableDivision=[];
    this.zoneService.getAvailableDivisions(this.selectedZone.substring(0,2)).then(availableDivision=>{
      console.log(availableDivision);
      this.availableDivision=availableDivision;
      console.log(this.availableDivision);
    })
    
  }
}
