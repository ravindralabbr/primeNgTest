import { Injectable } from '@angular/core';
import { Http, Response, Headers,RequestOptions, Request, RequestMethod } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class CountryService {
    
    constructor(private http: Http) {}

    // getCountries() {
    //     console.log('calling get coountry function')
    //     return this.http.request('app/country.json')
    //                 .toPromise()
    //                 .then(res => <any[]> res.json().data)
    //                 .then(data => { return data; });
    // }
    getCountries(): Promise<any>  {
        return this.http.get("~/app/country.json", this.createRequestOptions())
            .toPromise()
            .then(resp => 
                resp.json()
            )
            .catch((error) => { 
                console.log(error);
            });
}
        private createRequestOptions() {
    let headers = new Headers();
    // set headers here e.g.
    //headers.append("AuthKey", "my-key");
    //headers.append("AuthToken", "my-token");
    headers.append("Content-Type", "application/json");

    let options = new RequestOptions({ headers: headers });
    return options;
}

}
