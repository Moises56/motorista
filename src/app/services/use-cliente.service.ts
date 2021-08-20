import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class UseClienteService {

   // ?Para Produccion
    private URLPRO = 'https://somopa.herokuapp.com/usermotorista/user';

   // ?Para Desarrollo
   private URLDES =  'http://localhost:3000/usermotorista/user';

 constructor(
   private httpClient: HttpClient,
   private router: Router
   ) { }

 // *1 Login Cliente
 signin(data: any): Observable<any>{
   return this.httpClient.post(
     this.URLPRO + '/signin',
     {
       email: data.users.email,
       password: data.users.password
     }
   );
 }


 // *2 registro usuario Cliente
 signup(data: any): Observable<any>{
   return this.httpClient.post(
     this.URLPRO + '/signup',
     {
       nombre: data.user.nombre,
       apellido: data.user.apellido,
       email: data.user.email,
       password: data.user.password,
       confir_password: data.user.confir_password,
       tipo_Vehiculo: data.user.tipo_Vehiculo,
       revision_vehiculo: data.user.revision_vehiculo,
       placa_vehiculo: data.user.placa_vehiculo,
     }
   );
 }

   // tslint:disable-next-line:typedef
   loggedIng(){
     return !!localStorage.getItem('token');
   }

   // tslint:disable-next-line:typedef
   getToken(){
     return localStorage.getItem('token');
   }

   // tslint:disable-next-line:typedef
   logout(){
     localStorage.removeItem('token');
     localStorage.removeItem('iduser');
     this.router.navigate(['/signin']);
   }

   // *Obtener todas las ordenes
   getOrdenes(): Observable<any>{
    return this.httpClient.get(this.URLPRO + `/ordenes`, {});
  }


   // *Obtener un cliente y  Sus ordenes
   getOrdenCliente(idCliente: any): Observable<any>{
     return this.httpClient.get(this.URLPRO + `/${idCliente}/ordenes`, {});
   }


 // private URLPRO = 'http://localhost:3000/usercliente/user';

   // *1 AObtener Prodcto Seleccionad
   getProducto(idUser: any): Observable<any>{
     return this.httpClient.get(this.URLPRO + `/${idUser}/producto`, {});
   }




}
