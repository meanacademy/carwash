import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { ContactStartComponent } from './contact-start/contact-start.component';


@NgModule({
  declarations: [
    ContactComponent,
    PageHeaderComponent,
    ContactStartComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule
  ]
})
export class ContactModule { }
