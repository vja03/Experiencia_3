import { Component, Inject, OnInit } from '@angular/core';
import { ApicrudService } from 'src/app/servicios/apicrud.service';
import { Router } from '@angular/router';
import { QR } from 'src/app/interfaces/interfaces';
import { AuthService } from 'src/app/servicios/auth.service';
@Component({
  selector: 'app-qr',
  templateUrl: './qr.page.html',
  styleUrls: ['./qr.page.scss'],
})

export class QrPage implements OnInit {

  nombreClase:any;

  nombreClaseTitulo = ""

  docenteNombre:any

  fechaActual:any
  idPerson:any

  qr:QR ={
    nombreDocente:'',
    asignatura:'',
    fecha:''
  }

  usuario = {
    id:0,
    username: '',
    rol:'',
    email:'',
    password:'',
    asignatura:'', 
    isactive: false
  }

  constructor(private auth:AuthService, private router: Router, private api:ApicrudService) { 
    const fecha = new Date();
    const opcionesDeFormato: Intl.DateTimeFormatOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    this.fechaActual = fecha.toLocaleDateString('es-ES', opcionesDeFormato);
  }

  getIdFromUrl(){
    let url=this.router.url;
    let arr=url.split("/",3);
    let id = arr[2];
    return id;
  }

  numeroAleatorio(min:number, max:number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  getUsuarioById(userID:number){
    this.auth.BuscarUsuarioId(this.idPerson).subscribe(
      (resp:any)=>{  
        this.usuario={
          id: resp[0].id,
          username: resp[0].username,
          rol: resp[0].rol,
          password: resp[0].password,
          asignatura: resp[0].asignatura,
          isactive: resp[0].isactive,
          email: resp[0].email,
        }
      }
    )
  }

  crearQR(){
    this.qr.nombreDocente = this.usuario.username;
    this.qr.asignatura = this.nombreClaseTitulo;
    this.qr.nombreDocente = this.docenteNombre;
    this.qr.fecha = this.fechaActual;
    this.api.CrearQR(this.qr).subscribe();
  }

  ngOnInit() {
    this.nombreClase = this.getIdFromUrl();
    this.nombreClaseTitulo = this.nombreClase.toUpperCase().replace(/_/g, ' ');
    this.docenteNombre = sessionStorage.getItem('username');
    this.crearQR(); 
  }

}
