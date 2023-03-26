import { PagesModule } from './pages/pages.module';
import { ServicesModule } from './services/services.module';
import { LayoutModule } from './layout/layout.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    PagesModule,
    FormsModule,
  ],
  providers: [ServicesModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
