import { Component, OnInit } from '@angular/core';
import { UseClienteService } from '../../services/use-cliente.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbAlertConfig } from '@ng-bootstrap/ng-bootstrap';
import { AccesspointService } from 'src/app/services/accesspoint.service';



@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  formLoginUsers = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });

  formRegistroUsers = new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    apellido: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    confir_password: new FormControl('', [Validators.required]),
    tipo_Vehiculo: new FormControl('', [Validators.required]),
    revision_vehiculo: new FormControl('', [Validators.required]),
    placa_vehiculo: new FormControl('', [Validators.required])
  });

  token = '';

  constructor(
    private useClienteService: UseClienteService,
    private router: Router,
    private accesspointService: AccesspointService

  ) { }

  ngOnInit(): void {
  }


    // tslint:disable-next-line:typedef
    login(){
      // console.log(this.formLoginUsers.value);
      const data = {
        users: this.formLoginUsers.value
      };
      console.log(data);
      this.useClienteService.signin(data)
      .subscribe(
        res => {
          console.log(res.idUser);
          localStorage.setItem('iduser', res.idUser ); // * Guardando token en localStorage
          localStorage.setItem('nombreUser', res.nombre ); // * Guardando token en localStorage
          localStorage.setItem('apellidoUser', res.apellido ); // * Guardando token en localStorage
          // this.accesspointService.onIdUSer.emit(res.idUser);
          console.log(res);
          this.token = res.token;
          localStorage.setItem('token', res.token ); // * Guardando token en localStorage
          this.router.navigate(['/perfil']);
        },
        err => {
          console.log(err);
          alert('***Datos Erroneos');
        }
        );
    }

  // tslint:disable-next-line:typedef
  signup(){
    console.log(this.formRegistroUsers.value);
    const data = {
      user: this.formRegistroUsers.value
    };
    console.log(data);
    this.useClienteService.signup(data)
    .subscribe(
      res => {
        console.log(res);
        localStorage.setItem('token', res.token);
        localStorage.setItem('iduser', res.idUser ); // * Guardando token en localStorage
        localStorage.setItem('nombreUser', res.nombreUser ); // * Guardando token en localStorage
        localStorage.setItem('apellidoUser', res.apellidoUser ); // * Guardando token en localStorage
        this.formRegistroUsers.reset();
        alert('***Estas registrado Vienenido')
        this.router.navigate(['/perfil']);
        this.accesspointService.onMensajeSuccess.emit(res);
      },
      err => {
      console.log(err);
      alert('***Datos Erroneos');
    }
      );
  }
}
