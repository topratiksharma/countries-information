import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  public sidebarColor: string = 'red';
  searchText: string = '';

  constructor() {}

  searchCountries(data: string) {
    this.searchText = data;
  }

  ngOnInit() {}
}
