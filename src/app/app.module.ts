import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router'
import { AppComponent } from './app.component';
import { EmpRegComponent } from './components/emp-reg/emp-reg.component';
import { HomeIconsComponent } from './components/home-icons/home-icons.component';
import { MedregComponent } from './components/medreg/medreg.component';
import { AlreadyRegComponent } from './components/already-reg/already-reg.component';
import { GpeComponent } from './components/gpe/gpe.component';
import { SceComponent } from './components/sce/sce.component';
import { BasicinfoComponent } from './components/basicinfo/basicinfo.component';
import { InvestComponent } from './components/invest/invest.component';
import {HttpClientModule} from '@angular/common/http'
import { ZonesService } from './services/zones.service';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import{FlashMessagesModule, FlashMessagesService} from 'angular2-flash-messages';
import{ValidateService} from './services/validate.service'
import{SendDataService} from './services/send-data.service'
import { HttpModule } from '@angular/http';


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
    InvestComponent
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
      {path:'checkup/invest',component:InvestComponent}
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
