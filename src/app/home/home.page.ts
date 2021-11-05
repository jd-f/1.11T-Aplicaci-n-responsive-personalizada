import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  users: any;

  constructor(private httpclient: HttpClient) {
    this.users = this.httpclient.get('https://randomuser.me/api/?results=20').pipe(map(res => res['results']));
  }

}
