import { Component, OnInit } from '@angular/core';
import { ApicrudService } from 'src/app/servicios/apicrud.service';
import { InfiniteScrollCustomEvent } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-menudocente',
  templateUrl: './menudocente.page.html',
  styleUrls: ['./menudocente.page.scss'],
})
export class MenudocentePage implements OnInit {

  usuarioNombre:any;

  idPerson:any;

  User= {
    id:0,
    username:"",
    password:"",
    rol:"",
    email:"",
    asignatura:"",
    isactive:"",
  }

  constructor(private userService: ApicrudService, private router: Router, private auth:AuthService) { }
  
  ionViewWillEnter(){
    this.getUserById(this.getIdFromUrl());
    this.idPerson = sessionStorage.getItem('userId');
  }

  getIdFromUrl(){
    let url=this.router.url;
    let arr=url.split("/",3);
    let id = parseInt(arr[2]);
    return id;
  }

  getUserById(userID:number){
    this.auth.getUserById(this.idPerson).subscribe(
      (resp:any)=>{   
        this.User={
          id: resp[0].id,
          username: resp[0].username,
          password: resp[0].password,
          rol: resp[0].rol,
          email: resp[0].email,
          asignatura: resp[0].asignatura,
          isactive: resp[0].isactive
        }
      }
    )
  }

  cerrarSesion(){
    sessionStorage.clear();
  }
  

  ngOnInit() {
    this.usuarioNombre = sessionStorage.getItem('username');
  }

}
