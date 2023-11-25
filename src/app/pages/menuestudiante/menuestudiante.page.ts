import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@capacitor-mlkit/barcode-scanning';
import { Barcode } from '@capacitor-mlkit/barcode-scanning/dist/esm/definitions';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-menuestudiante',
  templateUrl: './menuestudiante.page.html',
  styleUrls: ['./menuestudiante.page.scss'],
})
export class MenuestudiantePage implements OnInit {

  usuarioNombre:any;
  idPerson:any;

  Users = {
    id:0,
    username:"",
    password:"",
    email:"",
    rol:"",
    asignatura:"",
    isactive:""
  }

  isSupported = false;
  barcodes: Barcode[] = [];

  constructor(private alertController: AlertController, private router:Router, private auth:AuthService) { }

  ionViewWillEnter(){
    this.getUserById(this.getIdFromUrl());
    this.idPerson = sessionStorage.getItem('userId');
  }
  
  cerrarSesion(){
    sessionStorage.clear();
  }

  getIdFromUrl(): number {
    try {
      let url = this.router.url;
      let arr = url.split("/", 3);
      let id = parseInt(arr[2]);
  
      console.log('ID obtenida', id);
      return id;
    } catch (error) {
      console.error('Error: no se pudo obtener la ID', error);
      return 1; // o devuelve un valor predeterminado si es necesario
    }
  }

  getUserById(userID: number): void {
    this.auth.getUserById(this.idPerson).subscribe(
      (resp: any) => {
        if (resp && resp.length > 0) {
          const userResp = resp[0];
          this.Users = {
            id: resp[0].id,
            username: resp[0].username,
            rol: resp[0].rol,
            password: resp[0].password,
            isactive: resp[0].isactive,
            email: resp[0].email,
            asignatura: resp[0].asignatura
          };
        } else {
          console.error('Respuesta de búsqueda vacía');
        }
      },
      (error) => {
        console.error('Error al buscar usuario por ID', error);
      }
    );
  }

  async startScan(): Promise<void> {
    const granted = await this.requestPermissions();
    if (!granted) {
      this.alertaError();
      return;
    }
    const { barcodes } = await BarcodeScanner.scan();
    this.barcodes.push(...barcodes);
  }

  async requestPermissions(): Promise<boolean> {
    const { camera } = await BarcodeScanner.requestPermissions();
    return camera === 'granted' || camera === 'limited';
  }

  async alertaError(): Promise<void> {
    const alert = await this.alertController.create({
      header: 'Permiso denegado!',
      message: 'Porfavor active los permisos de la camara para usar el escaner!',
      buttons: ['OK'],
    });
    await alert.present();
  }

  ngOnInit() {
    this.usuarioNombre = sessionStorage.getItem('username');
    BarcodeScanner.isSupported().then((result) => {
      this.isSupported = result.supported;
    });
  }

}
