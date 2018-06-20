import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emp-reg',
  templateUrl: './emp-reg.component.html',
  styleUrls: ['./emp-reg.component.css']
})
export class EmpRegComponent implements OnInit {

  categoryopt:any[];
  constructor() { }
  category:any;
  ngOnInit() {
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
}
