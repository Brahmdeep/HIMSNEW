import { Component, OnInit } from '@angular/core';
import {ValidateService} from '../services/validate.service'
import {FlashMessagesService} from 'angular2-flash-messages';
import {SendDataService} from '../services/send-data.service'
import{Router} from '@angular/router'
@Component({
  selector: 'app-medreg',
  templateUrl: './medreg.component.html',
  styleUrls: ['./medreg.component.css']
})
export class MedregComponent implements OnInit {
  //properties
  firstname:string;
  middlename:string;
  lastname:string;
  healthcarecenter:string;
  designation:string;
  department:string;
  station:string;
  email:string;
  mobile:string;
  railwayno:string;
  role:string;


  constructor(private validateService:ValidateService,private flashMessage:FlashMessagesService,private sendService:SendDataService,private router:Router) { }

  ngOnInit() {
    function main($scope){
      $scope.healthcarecenter='bob';
    }
  }
  onRegisterSubmit(){
    const staff={
      name:this.firstname+this.middlename+this.lastname,
      email:this.email,
      center:this.healthcarecenter,
      designation:this.designation,
      department:this.department,
      station:this.station,
      mobile:this.mobile,
      railno:this.railwayno,
      role:this.role
    }

    if(!this.validateService.validateRegister(staff)){
      this.flashMessage.show('Please fill all the "Fields"',{cssClass:'alert-danger',timeout:3000});
      return false;
    }
    if(!this.validateService.validateEmail(staff.email)){
      this.flashMessage.show('Please fill email in proper email format',{cssClass:'alert-danger',timeout:3000});
      return false;
    }
    //Register Staff
    this.sendService.registerStaff(staff).then(data=>{
      console.log(data);
    })
    this.flashMessage.show('registered',{cssClass:'alert-success',timeout:3000}); 
    window.location.href="http://localhost:4200";   
  }
}
