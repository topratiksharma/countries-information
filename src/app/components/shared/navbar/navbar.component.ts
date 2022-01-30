import {
  Component,
  OnInit,
  OnDestroy,
  Output,
  EventEmitter,
  Input,
} from '@angular/core';

@Component({
  selector: 'ci-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit, OnDestroy {
  @Output() search: EventEmitter<string> = new EventEmitter<string>();

  public isCollapsed: boolean = true;
  @Input() public searchText: string = '';
  public closeResult: string = '';

  constructor() {}

  ngOnInit() {}

  public onSeachTextChange() {
    this.search.emit(this.searchText);
  }

  ngOnDestroy() {}
}
