import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

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

import { AuthGuard } from './auth.guard';
import { TokenService } from './services/token.service';
import { SigninComponent } from './components/signin/signin.component';
import { LandinpageComponent } from './components/landinpage/landinpage.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InformacionComponent,
    LugaresComponent,
    PerfilComponent,
    NgbdCarouselBasicComponent,
    ContenidoComponent,
    AuthComponent,
    SigninComponent,
    LandinpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
