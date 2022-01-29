import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { MaterialModule } from 'src/app/core/material.module';
@NgModule({
  declarations: [SearchBarComponent],
  imports: [CommonModule, MaterialModule],
  exports: [SearchBarComponent],
})
export class SharedModule {}
