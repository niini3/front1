import { Component, OnInit } from '@angular/core';
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
    this.ws
    .getAppservice()
    .subscribe((data: App_service_list[]) => {
      console.log("AppserviceService -- ngOnInit");
      console.log(data);
      this.webappservice = data;
    }, error => console.log('oops', error));
  }
 
}