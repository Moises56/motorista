import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// *Components

// import { AppComponent } from './components/app/app.component';
import { LandinpageComponent } from './components/landinpage/landinpage.component';
import { AuthComponent } from './components/auth/auth.component';
import { ContenidoComponent } from './components/contenido/contenido.component';
import { HeaderComponent } from './components/header/header.component';
import { InformacionComponent } from './components/informacion/informacion.component';
import { LugaresComponent } from './components/lugares/lugares.component';
import { NgbdCarouselBasicComponent } from './components/ngbd-carousel-basic/ngbd-carousel-basic.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { SigninComponent } from './components/signin/signin.component';

import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    component: LandinpageComponent
  },
  {
    path: 'perfil',
    component: PerfilComponent,
    // canActivate: [AuthGuard] // * Protegiendo la ruta
  },
  {
    path: 'signin',
    component: AuthComponent
  },
   {
     path: 'signup',
     component: AuthComponent
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
