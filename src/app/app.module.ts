import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { GalleryModule } from  'ng-gallery';
import { GALLERY_CONFIG } from 'ng-gallery';
import { GallerizeModule } from '@ngx-gallery/gallerize';
import { LightboxModule } from 'ng-gallery/lightbox';
import { LIGHTBOX_CONFIG } from 'ng-gallery/lightbox';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ServicesComponent } from './pages/services/services.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { FloatingButtonComponent } from './shared/floating-button/floating-button.component';
import { DetailedPortfolioComponent } from './pages/detailed-portfolio/detailed-portfolio.component';
import { OtherProjectsComponent } from './shared/other-projects/other-projects.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutUsComponent,
    ServicesComponent,
    ContactUsComponent,
    PortfolioComponent,
    FloatingButtonComponent,
    DetailedPortfolioComponent,
    OtherProjectsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    GalleryModule,
    GallerizeModule,
    LightboxModule,
    BrowserAnimationsModule
  ],
  providers: [HttpClientModule, 
      {
      provide: GALLERY_CONFIG,
      useValue: {
        dots: true,
        imageSize: 'cover'
      }
    },
    {
      provide: LIGHTBOX_CONFIG,
      useValue: {
        keyboardShortcuts: false
      }
    }
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
