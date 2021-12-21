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
  filtro: string = " ";
  constructor(private httpclient: HttpClient) {
    this.users = this.httpclient.get('https://raw.githubusercontent.com/jd-f/1.11T-Aplicaci-n-responsive-personalizada/main/src/MOCK_DATA.json');
  }

}
