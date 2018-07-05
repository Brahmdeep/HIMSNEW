import { Component, OnInit } from '@angular/core';
import {GetdataService} from '../../../services/QbeService/getting/getdata.service'
import {FlashMessagesService} from 'angular2-flash-messages';
import {ZonesService} from '../../../services/FetchingServices/zones.service'
import {SendDataService} from '../../../services/PostingServices/send-data.service'
@Component({
  selector: 'app-qbe-example',
  templateUrl: './qbe-example.component.html',
  styleUrls: ['./qbe-example.component.css']
})
export class QbeExampleComponent implements OnInit {

  divCode:String;
  divName:String;
  divisions:any=[];
  value = '';
  requestUrl:string;
  division:{
    divCd:string,
    divNm:string,
    znCd:string
  }
  //////////////Properties For addition////////
  divisionCode:String;
  divisionName:String;
  ZoneCode:String;
  /////////////////////////////////////////////////
  
  constructor(private getData:GetdataService,private flashMessage:FlashMessagesService,
  private getreq:ZonesService,
  private sendData:SendDataService) { }

  ngOnInit() {
  }
  onEnter(value: string) { 
    this.divisions=[];
    this.value = value;
    console.log(this.value);
    if(this.value==undefined||this.value==""){
      this.flashMessage.show('Please Enter a Value',{cssClass:'alert-danger',timeout:3000}); 
    }else{
      this.requestUrl="http://localhost:3000/api/DivisionMsts?filter=%7B%22where%22%3A%7B%22znCd%22%3A%22"+this.value+"%22%7D%7D";
    }
    this.getreq.getAlldata(this.requestUrl).then(data=>{
      this.divisions=data;
    })
  } 
  onEnter3(value:string,value2:string,div){
    this.requestUrl="http://localhost:3000/api/DivisionMsts";
    this.sendData.modifydata(this.requestUrl,{
      "divCd":div.divCd,
      "divNm":value,
      "znCd":value2
    }).then(data=>{
        console.log(data);
      });
      this.flashMessage.show('updated',{cssClass:'alert-success',timeout:3000}); 
    }
    onsubmitAdd(){
      let division={
        divCd:this.divisionCode,
        divNm:this.divisionName,
        znCd:this.ZoneCode
      }
      this.requestUrl="http://localhost:3000/api/DivisionMsts";
      this.sendData.adddata(this.requestUrl,division).then(data=>{
        console.log(data);
      },err=>{
        console.log(err);
      })
      this.flashMessage.show('Added Successfully!',{cssClass:'alert-success',timeout:3000}); 
      // window.location.href="http://localhost:4200/qbeexample";

    }
  }
  

  

  
