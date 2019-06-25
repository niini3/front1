import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Web1Service {
  uri = 'http://localhost:3000/blog';
  constructor(private http: HttpClient) { }

  // insert
  addWeb1(a, b) { //function insert input
    const obj = {  //json
      a,
      b

    };
    console.log(obj);
    this.http.post(`${this.uri}/create`, obj)  // /create name link = cfg.js
        .subscribe(res => console.log('Done'));
  }

  getWeb1() {
    console.log("Get in getWeb1");
    return this
           .http
           .get(`${this.uri}`
           ,{headers: {
            'Access-Control-Allow-Origin': '*'
           }}
           );
  }

}
