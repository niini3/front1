import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CreditDocumentSet2013Service {
  uri = 'http://localhost:3000/blog';
  constructor(private http: HttpClient) { }

  getCredit() {
    console.log("Get in getWeb2");
    return this
           .http
           .get(`${this.uri}/credit`
           ,{headers: {
            'Access-Control-Allow-Origin': '*'
           }}
           );
  }
}
