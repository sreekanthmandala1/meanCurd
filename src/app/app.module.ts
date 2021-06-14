import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurdComponent } from './components/curd/curd.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UxProductsService } from './services/ux-products.service';
import { MeanComponent } from './components/mean/mean.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AddEmployeeComponent } from './popups/add-employee/add-employee.component';
import { AngularmaterialModule } from './angularmaterial/angularmaterial.module';
import { EditEmployeeComponent } from './popups/edit-employee/edit-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    CurdComponent,
    NavbarComponent,
    HomeComponent,
    MeanComponent,
    AddEmployeeComponent,
    EditEmployeeComponent
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    AngularmaterialModule,
  ],
  
  providers: [UxProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
