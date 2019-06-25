import { Component, OnInit } from '@angular/core';
import Web1 from '../../models/web2';
import { Web2Service } from '../../services/web2.service';
import Web2 from '../../models/web2';

@Component({
  selector: 'app-listweb2',
  templateUrl: './listweb2.component.html',
  styleUrls: ['./listweb2.component.css']
})
export class Listweb2Component implements OnInit {

  web2s: Web2[];

  constructor(private ws: Web2Service) { }

  ngOnInit() {
    this.ws
    .getWeb2()
    .subscribe((data: Web2[]) => {
      console.log("ListserviceComponent -- ngOnInit");
      console.log(data);
      this.web2s = data;
    }, error => console.log('oops', error));
  }

}
