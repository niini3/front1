import { Component, OnInit } from '@angular/core';
import Web1 from '../../models/web1';
import { Web1Service } from '../../services/web1.service';

@Component({
  selector: 'app-listservice',
  templateUrl: './listservice.component.html',
  styleUrls: ['./listservice.component.css']
})
export class ListserviceComponent implements OnInit {

  web1s: Web1[];
  constructor(private ws: Web1Service) { }

  ngOnInit() {
    this.ws
    .getWeb1()
    .subscribe((data: Web1[]) => {
      console.log("ListserviceComponent -- ngOnInit");
      console.log(data);
      this.web1s = data;
    }, error => console.log('oops', error));
  }

}
