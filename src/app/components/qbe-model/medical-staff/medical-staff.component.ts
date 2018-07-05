import { Component, OnInit } from '@angular/core';
import {ZonesService} from '../../../services/FetchingServices/zones.service'
import {FlashMessagesService} from 'angular2-flash-messages'
import {SendDataService} from '../../../services/PostingServices/send-data.service'
@Component({
  selector: 'app-medical-staff',
  templateUrl: './medical-staff.component.html',
  styleUrls: ['./medical-staff.component.css']
})
export class MedicalStaffComponent implements OnInit {

  doctors:any=[];
  requestUrl:string;


  //////////Properties/////////////
  empid:string;
  designation:string;
  name:string;
  speciality:string;
  ////////////////////////////////

  constructor(private getdata:ZonesService,
    private flashMessage:FlashMessagesService,
    private sendData:SendDataService) { }

  ngOnInit() {
  }

  onEnter(value:string,value2:string){
    this.doctors=[];
    console.log(value);
    console.log(value2);

    if(value=="" && value2==""){
      this.flashMessage.show('Please Enter a Value',{cssClass:'alert-danger',timeout:3000}); 
    }else if(value!="" ){
      this.requestUrl="http://localhost:3000/api/MedicalStaffQbes?filter=%7B%22where%22%3A%7B%22speciality%22%3A%20%22"+value+"%22%7D%7D";
    }else if(value2!=""){
      this.requestUrl="http://localhost:3000/api/MedicalStaffQbes?filter=%7B%22where%22%3A%7B%22designation%22%3A%20%22"+value2+"%22%7D%7D"
    }
    this.getdata.getAlldata(this.requestUrl).then(data=>{
      console.log(data);
      this.doctors=data;
    },err=>{
      console.log(err);
    })
    
  }
  onEnter3(designation:string,name:string,speciality:string,doctor){
    console.log("data sent = "+designation+""+name+""+speciality+""+doctor.empid);
    this.requestUrl="http://localhost:3000/api/MedicalStaffQbes";
    this.sendData.modifydata(this.requestUrl,{
      "designation":designation,
      "empid":doctor.empid,
      "name":name,
      "speciality":speciality
    }).then(data=>{
        console.log(data);
      });
      this.flashMessage.show('updated',{cssClass:'alert-success',timeout:3000}); 
  }

  onsubmitAdd(){
    let doctor={
      designation:this.designation,
      empid:this.empid,
      name:this.name,
      speciality:this.speciality
    }
    this.requestUrl="http://localhost:3000/api/MedicalStaffQbes";
    this.sendData.adddata(this.requestUrl,doctor).then(data=>{
      console.log(data);
    },err=>{
      console.log(err);
    })
    this.flashMessage.show('Added Succesfully',{cssClass:'alert-success',timeout:3000}); 
    window.location.href="http://localhost:4200/medstaff";
  }


}
