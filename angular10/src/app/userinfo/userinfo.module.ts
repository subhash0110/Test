import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{MaterialModule} from '../material/material.module'
import { UserinfoRoutingModule } from './userinfo-routing.module';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    UserinfoRoutingModule,
    MaterialModule
  ]
})
export class UserinfoModule { }
