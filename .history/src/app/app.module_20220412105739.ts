import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BannerComponent } from './components/banner/banner.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ServicesComponent } from './components/services/services.component';
import { BookserviceComponent } from './components/bookservice/bookservice.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
<<<<<<< HEAD
    SpinnerComponent
=======
    BannerComponent,
    AboutusComponent,
    ServicesComponent,
    BookserviceComponent,
>>>>>>> ff172e766232cf94200a64557dd2b84c3e6f350a
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
