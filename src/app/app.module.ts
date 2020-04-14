import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule} from '@angular/common/http';
// rutas
import { AppRoutingModule } from './app-enrrutamiento.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { AcercaDeComponent } from './pages/acerca-de/acerca-de.component';
import { ArticulosComponent } from './pages/articulos/articulos.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ContactoComponent } from './pages/contacto/contacto.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PortafolioComponent,
    ArticulosComponent,
    AcercaDeComponent,
    BlogComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
