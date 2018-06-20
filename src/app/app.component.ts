import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    icons:any=[]

    ngOnInit(){
      this.icons=[
        {name:"Registration",iconClass:"fas fa-registered fa-5x"},
        {name:"Doctor",iconClass:"fas fa-user-md fa-5x"}
      ]
    }
}
