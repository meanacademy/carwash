import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesRoutingModule } from './services-routing.module';
import { ServicesComponent } from './services.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { ServiceStartComponent } from './service-start/service-start.component';
import { BookingStartComponent } from './booking-start/booking-start.component';
import { TestimonialStartComponent } from './testimonial-start/testimonial-start.component';


@NgModule({
  declarations: [
    ServicesComponent,
    PageHeaderComponent,
    ServiceStartComponent,
    BookingStartComponent,
    TestimonialStartComponent
  ],
  imports: [
    CommonModule,
    ServicesRoutingModule
  ]
})
export class ServicesModule { }
