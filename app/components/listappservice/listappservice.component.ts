import { Component, OnInit, ɵNG_INJECTABLE_DEF } from '@angular/core';
import { AppserviceService } from '../../services/appservice.service';
import App_service_list from '../../models/app_service_list';

@Component({
  selector: 'app-listappservice',
  templateUrl: './listappservice.component.html',
  styleUrls: ['./listappservice.component.css']
})

export class ListappserviceComponent implements OnInit {

webappservice: App_service_list[];

constructor(private ws: AppserviceService) { }

  ngOnInit() {
    this.callServiceList();
  }
  
  searchFunction(appin,ipin,servicein){
      console.log("Geting in search()");
      console.log(appin);
      console.log(ipin);
      console.log(servicein);
      var body = {
        APP_NAME:appin,
        IP:ipin,
        SERVICE_NAME: servicein
      }
      console.log(body);
      this.ws.postAppserviceSearch(body)
      .subscribe((data: App_service_list[]) => {
        console.log(data);
        this.webappservice = data;
        this.callUpdateStatusCode(this.webappservice);
      }, error => console.log('oops', error));
  }

 clickFunction(appin,ipin,servicein){
   if(
     appin != '' ||
     ipin != '' ||
     servicein != '' 
     ){
     var body = {
       APP_NAME:appin,
       IP:ipin,
       SERVICE_NAME: servicein
     }
     console.log(body);
     // Call Backend
     this.ws.postAppserviceSearch(body)
     .subscribe((data: App_service_list[]) => {
       console.log(data);
       this.webappservice = data;
       this.callUpdateStatusCode(this.webappservice);
     }, error => console.log('oops', error));
   }else{
     // refresh no call back end
     this.callUpdateStatusCode(this.webappservice);
   }
   
}





  callServiceList(){
    //var tmpA = "A" ; 
    this.ws
    .getAppservice()
    .subscribe((data: App_service_list[]) => {
      console.log("AppserviceService -- ngOnInit");
      console.log(data);
      this.webappservice = data;
      this.callUpdateStatusCode(this.webappservice);
    }, error => console.log('oops', error));
  }

  // refresh no call back end
 callUpdateStatusCode(input: App_service_list[]){
      console.log("Start")
      for (let i = 0 ; i < input.length; i++) {
        ////
    
if(!input[i].URL.includes('https') && 
input[i].URL != 'http://10.100.10.106/IMWebService/services/AuTOBizWeBService?wsdl' &&
input[i].URL != 'http://10.100.10.203/IMWebService/services/AuTOBizWeBService?wsdl' &&
input[i].URL != 'http://10.100.10.104/IMWebService/services/AuTOBizWeBService?wsdl' ){
          this.webappservice[i].START_TIME = Date.now();
          this.ws.getHttpCode(input[i].URL).subscribe(
            httpdata => {
              // Success
              console.log(httpdata);
              this.webappservice[i].RESPONSE = Date.now() - Number(this.webappservice[i].START_TIME);
              this.webappservice[i].STATUS_CODE = httpdata.status;
            }, error => {
              // Error
              console.log(error);
              this.webappservice[i].RESPONSE = Date.now() - Number(this.webappservice[i].START_TIME);
              if(error.status == 401 || 
                (error.status == 405 && input[i].URL.endsWith('GateWay')) ||
                (error.status == 500 && input[i].URL.endsWith('MinimalProxy/services/AuTOBizJavaProxyWeBService?wsdl')) ||
                error.status == 200          // 200 with warning
                ){
                this.webappservice[i].STATUS_CODE = error.status;
              }else{
                this.webappservice[i].STATUS_CODE = 0;
              }
              console.log(error);
            }
          );
        }else{
          //this.webappservice[i].STATUS_CODE = 200 ;
          //this.webappservice[i].RESPONSE = 100;
        }
      }
      console.log("End")
        // console.log(input[i].URL);
      

  }
}