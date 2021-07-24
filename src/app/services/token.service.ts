import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { UseClienteService } from '../services/use-cliente.service';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TokenService implements HttpInterceptor {

  constructor(
    private useClienteService: UseClienteService,
  ) { }
  intercept(req: any, next: any){
    const tokenizeReq = req.clone({
       setHeaders: {
         Authorization: `Bearer ${this.useClienteService.getToken()}`
       }
     });
    return next.handle(tokenizeReq);
   }
}
