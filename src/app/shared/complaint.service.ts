import { Injectable } from '@angular/core';
import { Http, Response, Headers } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs/Rx";

@Injectable()
export class complaintService {

  constructor(private http: Http) {
  }

  getData() {
    return this.http.get('https://ecomplain-27ef4.firebaseio.com/')
      .map((response: Response) => response.json());
  }

  sendData(complaint: any) {
    const body = JSON.stringify(complaint);
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('https://ecomplain-27ef4.firebaseio.com/115.json', body, {
      headers: headers
    })
      .map((data: Response) => data.json())
      .catch(this.handleError);
  }

  getOwnData() {
    return this.http.get('https://ecomplain-27ef4.firebaseio.com/115.json')
      .map((response: Response) => response.json());
  }

  private handleError (error: any) {
    console.log(error);
    return Observable.throw(error.json());
  }
}
