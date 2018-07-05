import { Component, OnInit } from '@angular/core';
import {GetdataService} from '../../services/QbeService/getting/getdata.service'

@Component({
  selector: 'app-qbe',
  templateUrl: './qbe.component.html',
  styleUrls: ['./qbe.component.css']
})
export class QbeComponent implements OnInit {
  taskStatus:string;
  constructor(private getData:GetdataService) { }

  ngOnInit() {
  }
  onclickquery(){
    this.getData.putmod(false);
    this.getData.updateStatus("get");
  }
  onclickadd(){
    this.getData.putmod(false);
    this.getData.updateStatus("post");
  }
  onclickupdate(){
    this.getData.putmod(true);
    this.getData.updateStatus("put");
  }

}
