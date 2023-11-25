import { Component, OnInit } from '@angular/core';
import { ApicrudService } from 'src/app/servicios/apicrud.service';
import { Clases } from 'src/app/interfaces/interfaces';
import { InfiniteScrollCustomEvent } from '@ionic/angular';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { AuthService } from 'src/app/servicios/auth.service';
@Component({
  selector: 'app-periodoacad',
  templateUrl: './periodoacad.page.html',
  styleUrls: ['./periodoacad.page.scss'],
})
export class PeriodoacadPage implements OnInit {

  idPerson: any
  usuario = {
    id:0
  }

  usuarioNombre:any;

  clases:Clases[]=[]

  constructor(private userService: ApicrudService, private router: Router, private loadingCtrl : LoadingController, private auth:AuthService) {}

  ionViewWillEnter(){
    this.getUserById(this.getIdFromUrl());
    this.loadClases();
    this.idPerson = sessionStorage.getItem('userId');
  }

  getIdFromUrl(){
    let url=this.router.url;
    let arr=url.split("/",3);
    let id = parseInt(arr[2]);
    return id;
  }

  getUserById(userID:number){
    this.auth.getUserById(userID).subscribe(
      (resp:any)=>{      
        this.usuario={
          id: resp[0].id
        }
      }
    )
  }

  async loadClases(event?: InfiniteScrollCustomEvent){
    const loading = await this.loadingCtrl.create({
      message: "Cargando..",
      spinner: "bubbles"
    });
    await loading.present();
    
    this.userService.ListarClases().subscribe(
      {
        next: resp =>{
          console.log(resp);
          loading.dismiss();

          let listString = JSON.stringify(resp);
          this.clases = JSON.parse(listString);

          this.clases = this.clases.filter(clases => clases.docente === this.usuarioNombre);

          event?.target.complete();
          console.log(this.clases);
        },
        error:err =>{
          console.log(err.error.message);
          loading.dismiss();
        }
      }
    )
  }

  irClaseEspecifica(){
    this.router.navigateByUrl("/qr/" + this.clases[0].codigo);
  }

  irClases(){
    this.router.navigateByUrl("/crearasignatura/" + sessionStorage.getItem(this.idPerson));
  }

  ngOnInit() {
    this.usuarioNombre = sessionStorage.getItem('username');
  }

}
