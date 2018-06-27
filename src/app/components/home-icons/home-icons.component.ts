import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-icons',
  templateUrl: './home-icons.component.html',
  styleUrls: ['./home-icons.component.css']
})
export class HomeIconsComponent implements OnInit {

  constructor() { }
  icons:any=[]

  ngOnInit(){
    this.icons=[
      {name:"Registration",iconClass:"fas fa-registered fa-5x"},
      {name:"Dr. OPD",iconClass:"fas fa-user-md fa-5x"},
      {name:"Diagnostics",iconClass:"fas fa-flask fa-5x"},
      {name:"MIS Report",iconClass:"far fa-address-card fa-5x"},
      {name:"Store Department",iconClass:"fas fa-store fa-5x"},
      {name:"Reimbursment",iconClass:"fas fa-stream fa-5x"},
      {name:"Annual Health Checkup",iconClass:"fas fa-heartbeat fa-5x"}
     ]
  }
 

}
