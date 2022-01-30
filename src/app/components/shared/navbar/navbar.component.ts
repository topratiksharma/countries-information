import {
  Component,
  OnInit,
  OnDestroy,
  Output,
  EventEmitter,
  Input,
} from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss', './modal.scss'],
})
export class NavbarComponent implements OnInit, OnDestroy {
  @Output() search: EventEmitter<string> = new EventEmitter<string>();

  public isCollapsed: boolean = true;
  @Input() public searchText: string = '';
  public closeResult: string = '';

  constructor(private modalService: NgbModal) {}

  ngOnInit() {}

  open(content: any) {
    this.searchText = this.closeResult;
    this.modalService
      .open(content, { windowClass: 'modal-search' })
      .result.then(
        (result) => {
          this.searchText = '';
          this.closeResult = '';
          this.search.emit(this.searchText);
        },
        (reason) => {
          if (reason == 'close') {
            this.searchText = '';
          }
          this.closeResult = this.searchText;
          this.search.emit(this.searchText);
        }
      );
  }

  public onSeachTextChange() {
    this.search.emit(this.searchText);
  }

  ngOnDestroy() {}
}
