import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurdComponent } from './components/curd/curd.component';
import { UxProductsService } from './services/ux-products.service';

@NgModule({
  declarations: [
    AppComponent,
    CurdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [UxProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
