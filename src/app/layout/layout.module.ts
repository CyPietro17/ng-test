import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [HeaderComponent, MainComponent],
  imports: [CommonModule, RouterModule],
  exports: [HeaderComponent, MainComponent],
})
export class LayoutModule {}
