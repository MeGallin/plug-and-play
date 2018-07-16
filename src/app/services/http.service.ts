import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {
  }

  getData() {
    const url = '../assets/menu_data.json';
    return this._http.get(url);
  }

}
