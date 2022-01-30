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
export class NavbarComponent {
  @Output() search: EventEmitter<string> = new EventEmitter<string>();

  public isCollapsed: boolean = true;
  @Input() public searchText: string = '';
  public closeResult: string = '';

  constructor() {}

  public onSeachTextChange() {
    this.search.emit(this.searchText);
  }
}
