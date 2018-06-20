import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-already-reg',
  templateUrl: './already-reg.component.html',
  styleUrls: ['./already-reg.component.css']
})
export class AlreadyRegComponent implements OnInit {
  categoryopt:any[];
  relations:any[];
  departments:any[];
  constructor() { }

  ngOnInit() {
    this.categoryopt=[
      {opt:"0NR"},
      {opt:"0REIHS"},
      {opt:"0RF"},
      {opt:"0TEMP"},
      {opt:"0OS"},
  
    ]
    this.relations=[
      {opt:"0Son"},
      {opt:"1Son"},
      {opt:"2Son"},
      {opt:"3Son"},
      {opt:"4Son"},
    ]
    this.departments=[
      {opt:"Den"},
      {opt:"Ent"},
      {opt:"Eye"},
      {opt:"G1"},
      {opt:"G2"},
      {opt:"G3"},
      {opt:"H1"},
      {opt:"H2"},
      {opt:"H3"},
      {opt:"H4"},
    ]
  }

}
