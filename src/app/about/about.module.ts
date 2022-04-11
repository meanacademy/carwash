import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { ServiceStartComponent } from './service-start/service-start.component';
import { FactStartComponent } from './fact-start/fact-start.component';
import { TeamStartComponent } from './team-start/team-start.component';
import { AboutusComponent } from './aboutus/aboutus.component';


@NgModule({
  declarations: [
    AboutComponent,
    PageHeaderComponent,
    ServiceStartComponent,
    FactStartComponent,
    TeamStartComponent,
    AboutusComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule
  ]
})
export class AboutModule { }
