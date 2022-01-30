import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchPipe } from './search/search.pipe';
import { FormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    FormsModule,
    MatProgressSpinnerModule,
  ],
  declarations: [NavbarComponent, SearchPipe],
  exports: [NavbarComponent, SearchPipe,MatProgressSpinnerModule],
})
export class SharedModule {}
