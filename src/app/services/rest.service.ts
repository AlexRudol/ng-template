import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class RESTService {

    constructor( private http: Http ) {}

    private makeRequest(path: string) {
        let url = `assets/data/${ path }.json`;
        return this.http.get(url)
            .map((res) => res.json());
    }

    getMenu() {
        return this.makeRequest('menu');
    }

    getPage(page: string) {
        return this.makeRequest(`${page}`);
    }

}
