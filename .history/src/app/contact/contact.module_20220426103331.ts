import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

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
    FormsModule,
    ContactRoutingModule
  ]
})
export class ContactModule { }
