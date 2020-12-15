import { MaterialModule } from './material/material.module';
import { MatTableModule } from '@angular/material/table';
import { Emp1Service } from './services/emp1.service';
import { NavbarService } from 'src/app/shared/navbar.service';
import { CategoryService } from './shared/category.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginService } from './shared/login.service';
import { Dashboard1Component } from './scart1/dashboard1/dashboard1.component';
import { MatTableComponent } from './mat-table/mat-table.component';
@NgModule({
  declarations: [AppComponent, Dashboard1Component, MatTableComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MaterialModule,
  ],
  providers: [LoginService, CategoryService, NavbarService, Emp1Service],
  bootstrap: [AppComponent],
})
export class AppModule {}
