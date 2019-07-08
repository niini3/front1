import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppserviceService {

  uri = 'http://localhost:3000/blog';
  constructor(private http: HttpClient) { }

  getAppservice() {
    console.log("Get in AppserviceService");
    return this
           .http
           .post(`${this.uri}/service1`
           ,{headers: {
            'Access-Control-Allow-Origin': '*'
           }}
           );
  }
  
  postAppserviceSearch(input) {
    console.log("Get in postAppserviceSearch");
    return this
           .http
           .post(`${this.uri}/service`
           ,input
           );
  }
  getHttpCode(input) {
    console.log("Get in getHttpCode : "+input);
    return this
           .http
           .get(input, {  observe: 'response',
                          responseType: 'text',
                          headers: {
                            'Content-Type':  'application/json',
                            'Authorization': 'Basic ' + btoa('username:password'),
                            'WWW-Authenticate': 'xBasic'
                          }
          });
  }
}