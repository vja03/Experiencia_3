import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  User = {
    id:0,
    username: '',
    rol:'',
    email:'',
    asignatura:'',
    password:'', 
    isactive: false
  }
  constructor(private authService: AuthService,
              private router: Router,
              private alertcontroller: AlertController) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.getUserByID(this.getIdFromUrl());
  }

  getIdFromUrl(){
    let url=this.router.url;
    let arr=url.split("/",3);
    let id = parseInt(arr[2]);
    console.log('ID Obetenida', id);
    return id;
  }

  getUserByID(usuarioID:number){
    this.authService.BuscarUsuarioId(usuarioID).subscribe(
      (resp:any)=>{
        this.User={
          id: resp[0].id,
          username: resp[0].username,
          rol: resp[0].rol,
          password: resp[0].password,
          isactive: resp[0].isactive,
          email: resp[0].email,
          asignatura: resp[0].asignatura
        };
       
      
      }
    )
  }
}
  

