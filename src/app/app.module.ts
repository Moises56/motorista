import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { HeaderComponent } from './components/header/header.component';
import { InformacionComponent } from './components/informacion/informacion.component';
import { LugaresComponent } from './components/lugares/lugares.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PerfilComponent } from './components/perfil/perfil.component';
import { NgbdCarouselBasicComponent } from './components/ngbd-carousel-basic/ngbd-carousel-basic.component';
import { ContenidoComponent } from './components/contenido/contenido.component';
import { AuthComponent } from './components/auth/auth.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InformacionComponent,
    LugaresComponent,
    PerfilComponent,
    NgbdCarouselBasicComponent,
    ContenidoComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
