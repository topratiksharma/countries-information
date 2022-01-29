import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchPipe } from './search/search.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, RouterModule, NgbModule, FormsModule],
  declarations: [NavbarComponent, SearchPipe],
  exports: [NavbarComponent, SearchPipe],
})
export class SharedModule {}
