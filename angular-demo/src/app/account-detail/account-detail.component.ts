import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-account-detail',
  templateUrl: './account-detail.component.html',
  styleUrls: ['./account-detail.component.sass'],
})
export class AccountDetailComponent implements OnInit {

  data$: Observable<any>;

  constructor(private http: Http) { }

  ngOnInit() {
    this.data$ = this.http.get('/assets/data/account-details.json').map(resp => resp.json());
  }

}
