import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-perfilupdate',
  templateUrl: './perfilupdate.page.html',
  styleUrls: ['./perfilupdate.page.scss'],
})
export class PerfilupdatePage implements OnInit {

  

  usuario = {
    id:0,
    username: '',
    rut:'',
    role:'',
    correo:'',
    password:'', 
    isactive: false
  }

  idPerson:any;

  constructor(private authservice: AuthService,
              private router: Router, 
              private alertcontroller: AlertController) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.getUsuarioById(this.getIdFromUrl());
    this.idPerson = sessionStorage.getItem('id');
  }

  getIdFromUrl(){
    let url=this.router.url;
    let arr=url.split("/",3);
    let id = parseInt(arr[2]);
    return id;
  }

  getUsuarioById(usuarioID:number){
    this.authservice.BuscarUsuarioId(usuarioID).subscribe(
      (resp:any)=>{                 
        console.log(resp);
        this.usuario={
          id: resp[0].id,
          username: resp[0].username,
          rut: resp[0].rut,
          role: resp[0].role,
          password: resp[0].password,
          isactive: resp[0].isactive,
          correo: resp[0].correo
        }
      }
      
    )
  }

  ActualizarUsuario(){
    this.authservice.ActualizarUsuario(this.usuario).subscribe();
    this.mostrarMensaje();
    this.router.navigateByUrl("/perfil/" + this.idPerson);
  }

  async mostrarMensaje(){
    const alerta = await this.alertcontroller.create({
      header: 'Usuario Actualizado ',
      message: 'Su información se ha modificado ' + this.usuario.username,
      buttons: ['OK']
    });
    alerta.present();
  }
}
