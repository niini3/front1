import { Component, OnInit } from '@angular/core';
import { CreditDocumentSet2013Service } from '../../services/credit-document-set-2013.service';
import Credit_document_set_2013 from '../../models/credit_document_set_2013';
@Component({
  selector: 'app-listcredit',

  templateUrl: './listcredit.component.html',
  styleUrls: ['./listcredit.component.css']
})
export class ListcreditComponent implements OnInit {


  webcredit: Credit_document_set_2013[];
  constructor(private ws: CreditDocumentSet2013Service) { }

  ngOnInit() {
    this.ws
    .getCredit()
    .subscribe((data: Credit_document_set_2013[]) => {
      console.log("ListserviceComponent -- ngOnInit");
      console.log(data);
      this.webcredit = data;
    }, error => console.log('oops', error));
  }
 
}
