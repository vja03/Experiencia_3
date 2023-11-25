import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { ApicrudService } from 'src/app/servicios/apicrud.service';
import { newUser,Users } from 'src/app/interfaces/interfaces';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/servicios/auth.service';
@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
})



export class RegistrarPage implements OnInit {
 
  registroForm: FormGroup;

  userdata: any;
  
  usuario: Users={
    id: 0,
    username:'',
    password:'',
    email:'',
    rol:'',
    asignatura:'ninguna',
    isactive: false
  }
  
  constructor(private menuController : MenuController,
              private alertController: AlertController,
              private apiCrud : ApicrudService,
              private router : Router,
              private authservice:AuthService,
              private builder: FormBuilder) {
                this.registroForm = this.builder.group({
                  'username': new FormControl("", [Validators.required, Validators.minLength(4)]),
                  'password': new FormControl("", [Validators.required, Validators.minLength(4)]),
                  'email':    new FormControl("", [Validators.required]),
                  'rol': new FormControl("", [Validators.required]),
                  'asignatura': new FormControl("", [Validators.required])
                  
                })
               }

  ngOnInit() {
  }
  MostrarMenu(){
   this.menuController.open('first');
  }

  async mostrarMensaje(){
    const alert = await this.alertController.create({
      header: 'Gracias!' + ' '+ this.usuario.username,
      message: 'Se Ha registrado Correctamente',
      buttons: ['OK'],
    });

    await alert.present();
    this.usuario.username='';
    this.usuario.email="";
    this.usuario.password='';
    this.usuario.rol='';
    this.router.navigateByUrl("/inicio");


  }
  crearUser(){
    this.usuario.isactive= true;
    this.apiCrud.CrearUsuario(this.usuario).subscribe(
      (response) => {
        console.log('Registro Exitoso', response);
        this.mostrarMensaje();
        
      },
      (error) => {

        console.error('Error al registrar', error);
        if (error.status === 409) {
          console.log('Usuario ya existe.');
      }
    }
  
    );
   

  
  }
  
  


  
  Back(){
    this.router.navigateByUrl("/inicio");
  }
}
