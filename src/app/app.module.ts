import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router'
import { AppComponent } from './app.component';
import { EmpRegComponent } from './components/Reg-components/emp-reg/emp-reg.component';
import { HomeIconsComponent } from './components/home-icons/home-icons.component';
import { MedregComponent } from './components/Reg-components/medreg/medreg.component';
import { AlreadyRegComponent } from './components/Reg-components/already-reg/already-reg.component';
import { GpeComponent } from './components/Checkup-components/gpe/gpe.component';
import { SceComponent } from './components/Checkup-components/sce/sce.component';
import { BasicinfoComponent } from './components/Checkup-components/basicinfo/basicinfo.component';
import { InvestComponent } from './components/Checkup-components/invest/invest.component';
import {HttpClientModule} from '@angular/common/http'
import { ZonesService } from './services/FetchingServices/zones.service';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import{FlashMessagesModule, FlashMessagesService} from 'angular2-flash-messages';
import{ValidateService} from './services/ValidationServices/validate.service'
import{SendDataService} from './services/PostingServices/send-data.service'
import { HttpModule } from '@angular/http';
import { HospitalRegComponent } from './components/Reg-components/hospital-reg/hospital-reg.component';
import { QbeComponent } from './components/qbe/qbe.component';
import { QbeExampleComponent } from './components/qbe-model/qbe-example/qbe-example.component';
import { MedicalStaffComponent } from './components/qbe-model/medical-staff/medical-staff.component';


@NgModule({
  declarations: [
    AppComponent,
    EmpRegComponent,
    HomeIconsComponent,
    MedregComponent,
    AlreadyRegComponent,
    GpeComponent,
    SceComponent,
    BasicinfoComponent,
    InvestComponent,
    HospitalRegComponent,
    QbeComponent,
    QbeExampleComponent,
    MedicalStaffComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path:'',component:HomeIconsComponent},
      {path:'empreg',component:EmpRegComponent},
      {path:'medreg',component:MedregComponent},
      {path:'alrreg',component:AlreadyRegComponent},
      {path:'checkup/basicinfo',component:BasicinfoComponent},
      {path:'checkup/gpe',component:GpeComponent},
      {path:'checkup/sce',component:SceComponent},
      {path:'checkup/invest',component:InvestComponent},
      {path:'hospitalreg',component:HospitalRegComponent},
      {path:'qbeexample',component:QbeExampleComponent},
      {path:'medstaff',component:MedicalStaffComponent}
    ]),
    HttpClientModule,
    CommonModule,
    FormsModule,
    FlashMessagesModule,
    HttpModule
  ],
  providers: [SendDataService,ZonesService,ValidateService,FlashMessagesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
