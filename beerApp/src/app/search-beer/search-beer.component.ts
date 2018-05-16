import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormControl } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { switchMap } from 'rxjs/operators';
import { Beer } from '../models/beer';
@Component({
    selector: 'app-search-beer',
    templateUrl: './search-beer.component.html',
    styleUrls: ['./search-beer.component.scss']
})
export class SearchBeerComponent implements OnInit {

    termInput = new FormControl();
    beers: Beer[] = [];
    constructor(private http: HttpClient) {
    }

    ngOnInit() {
        this.termInput.valueChanges.pipe(term => {
            return this.search(term);
        }).subscribe((res: any) => {
            this.beers = res.data;
        });
    }

    search(term) {
        return this.http.get(`/api/v2/search?key=a81493ef1e81335e3dc2fc1d5e394053&type=beer&q=${term}`);
    }

    onKey(value) {
        console.log(value);
    }
}
