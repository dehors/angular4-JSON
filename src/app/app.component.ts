import { Component } from '@angular/core';
import { Dunebook } from './Dunebook';
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  dunebookList: Dunebook[];

  constructor(private http: Http) { }

  getDunebookData() {
    this.http.get('http://localhost:3004/posts')
    .subscribe(res => this.dunebookList =
    res.json() as Dunebook[]);
  }
}
