import { Component, OnInit } from '@angular/core';
import { ClaseEspecifica } from 'src/app/interfaces/interfaces';
import { ApicrudService } from 'src/app/servicios/apicrud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crearasignatura',
  templateUrl: './crearasignatura.page.html',
  styleUrls: ['./crearasignatura.page.scss'],
})
export class CrearasignaturaPage implements OnInit {

  usuarioNombre:any;

  nombreClase = ""

  newClase:ClaseEspecifica = {
    nombre:"",
    codigo:"",
    docente:"",
    anio:0,
    semestre:"",
    horasSemanales:0
  }

  constructor(private apicrudService:ApicrudService, private router:Router) { }

  crearClase(){
    this.nombreClase = this.newClase.nombre.toLowerCase().replace(/ /g, '_');
    this.newClase.codigo = this.nombreClase;
    this.newClase.docente = this.usuarioNombre;
    this.apicrudService.CrearClase(this.newClase).subscribe();
  }

  ngOnInit() {
    this.usuarioNombre = sessionStorage.getItem('username');
  }

}


