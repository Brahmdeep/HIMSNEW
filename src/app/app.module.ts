import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router'
import { AppComponent } from './app.component';
import { EmpRegComponent } from './emp-reg/emp-reg.component';
import { HomeIconsComponent } from './home-icons/home-icons.component';
import { MedregComponent } from './medreg/medreg.component';
import { AlreadyRegComponent } from './already-reg/already-reg.component';
import { GpeComponent } from './gpe/gpe.component';
import { SceComponent } from './sce/sce.component';
import { BasicinfoComponent } from './basicinfo/basicinfo.component';
import { InvestComponent } from './invest/invest.component';
import {HttpClientModule} from '@angular/common/http'
import { ZonesService } from './zones.service';


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
    HttpClientModule
  ],
  providers: [ZonesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
