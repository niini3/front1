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
           .get(`${this.uri}/service`
           ,{headers: {
            'Access-Control-Allow-Origin': '*'
           }}
           );
  }
}
