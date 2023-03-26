import { ComponentsModule } from './../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import { UserpageComponent } from './userpage/userpage.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    HomepageComponent,
    UserpageComponent,
    NotfoundComponent,
    LoginComponent,
  ],
  imports: [CommonModule, ComponentsModule],
  exports: [
    HomepageComponent,
    UserpageComponent,
    NotfoundComponent,
    LoginComponent,
  ],
})
export class PagesModule {}
