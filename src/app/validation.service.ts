import { Injectable } from '@angular/core';
import { Http, Response, Headers,RequestOptions, Request, RequestMethod } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import { Item } from './item';
import { ITEMS } from './countries_test';
import 'rxjs/add/operator/catch';

@Injectable()
// export class CountryService {
    
//     constructor(private http: Http) {}

//     getCountries() {
//         console.log('calling get country function')
//         return this.http.get('./country.json',  this.createRequestOptions())
//                     .toPromise()
//                     .then(res => <any[]> res.json().data)
//                     .then(data => { return data; });
//     }

//     private createRequestOptions() {
//     let headers = new Headers();
//     headers.append("Content-Type", "application/json");

//     let options = new RequestOptions({ headers: headers });
//     return options;
// }
// }
@Injectable()
export class CountryService {
    
    constructor(private http: Http) {}

    // getCountries() {
    //     return this.http.get('./app/countries.json')
    //                 .toPromise()
                    // .then(res => <any[]> res.json().data)
                    // .then(data => { return data; });
                    
    // }
    //     public getCountries() {
    //             let _appUrl = './app/countries.json';
    //             let _url : string = _appUrl;
    //             return this.http.get(_url)
    //                 .toPromise()
    //                 // .then(response => response.json() as Token)
    //                 // .catch(this.handleError);
    //                 .then(res => <any[]> res.json().data)
    //                 .then(data => { return data; });
                    
    //    }
    getCountries() {
    return [{'name': 'India'}, {'name': 'USA'}, {'name': 'Indonesia'}, {'name': 'Germany'}, {'name': 'mexico'}, {'name': 'Netherland'}];
  }
    // getCountries(): Item[] {
	// return ITEMS;
    // }
}