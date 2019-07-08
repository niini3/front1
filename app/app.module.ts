import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Web1Service } from './services/web1.service';
import { ListserviceComponent } from './components/listservice/listservice.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { Web2Service } from './services/web2.service';
import { Listweb2Component } from './components/listweb2/listweb2.component';
import { CreditDocumentSet2013Service } from './services/credit-document-set-2013.service';
import { ListcreditComponent } from './components/listcredit/listcredit.component';
import { AppserviceService } from './services/appservice.service';
import { ListappserviceComponent } from './components/listappservice/listappservice.component';

@NgModule({
  declarations: [
    AppComponent,
    ListserviceComponent,
    HeaderComponent,
    FooterComponent,
    Listweb2Component,
    ListcreditComponent,
    ListappserviceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [Web1Service,Web2Service,CreditDocumentSet2013Service,AppserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }