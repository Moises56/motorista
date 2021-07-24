import { Component, OnInit } from '@angular/core';
import { UseClienteService } from '../../services/use-cliente.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  user = {
    email: '',
    password: ''
  };

  constructor(
    private useClienteService: UseClienteService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  signIn(){
    console.log(this.user);
      // this.useClienteService.signIn(this.user)
   }
   
 
     signUp(){
    //   // console.log(this.user);
    //   this.authService.signup(this.user)
    //   .subscribe(
    //     res =>{
    //       console.log(res)
    //       localStorage.setItem('token', res.token ); //* Guardando token en localStorage
    //       this.router.navigate(['/perfil'])
    //     },
    //     err => console.log(err)
    //   )
     }
}
