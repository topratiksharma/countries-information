import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  public sidebarColor: string = 'red';
  searchText: string = '';

  constructor() {}

  searchCountries(searchText: string) {
    this.searchText = searchText;
  }

  ngOnInit() {}
}
