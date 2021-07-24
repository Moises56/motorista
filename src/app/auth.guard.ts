import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UseClienteService } from './services/use-cliente.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private useClienteService: UseClienteService,
    private router: Router
  ) { }

  canActivate(): boolean{
    if (this.useClienteService.loggedIng()){
      return true;
    }
    this.router.navigate(['/signin']);
    return false;
  }
}
