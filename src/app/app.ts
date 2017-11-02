import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { RESTService } from "./services/rest.service";

@Component({
    selector: 'app',
    templateUrl: 'app.html',
    styleUrls: ['../styles/_base.scss'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements OnInit {

    public menu = [];
    public page = {};

    constructor(public restService: RESTService) {}

    ngOnInit() {

        this.restService.getMenu().subscribe(data => {
            this.menu = data;
        });

        this.restService.getPage('test').subscribe( data => {
            this.page = data;
        });
    }

}
