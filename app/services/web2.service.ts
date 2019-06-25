import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Web2Service {
  uri = 'http://localhost:3000/blog';
  constructor(private http: HttpClient) { }

  getWeb2() {
    console.log("Get in getWeb2");
    return this
           .http
           .get(`${this.uri}/a`
           ,{headers: {
            'Access-Control-Allow-Origin': '*'
           }}
           );
  }
}
