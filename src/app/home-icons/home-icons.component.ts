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
      {name:"Doctor",iconClass:"fas fa-user-md fa-5x"},
      {name:"Checkup",iconClass:"fas fa-user-check fa-5x"}
    ]
  }
 

}
