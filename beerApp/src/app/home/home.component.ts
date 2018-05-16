import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Beer } from '../models/beer';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

    beer: Beer;

    constructor(private http: HttpClient) {
    }

    ngOnInit() {
        const _options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
        this.http.get('/api/v2/beer/random?key=a81493ef1e81335e3dc2fc1d5e394053&hasLabels=Y', _options).subscribe(
            (response: any) => {
                const json = response;
                this.beer = new Beer();
                this.beer.name = json.data.nameDisplay;
                this.beer.description = json.data.style.description;
                this.beer.image = json.data.labels.medium;

            }
        );
    }
}
