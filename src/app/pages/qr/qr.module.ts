import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { QrPageRoutingModule } from './qr-routing.module';

import { QrPage } from './qr.page';
import { QRCodeModule} from 'angularx-qrcode';
import { ApicrudService } from 'src/app/servicios/apicrud.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QRCodeModule,
    QrPageRoutingModule
  ],
  declarations: [QrPage],
  providers:[ApicrudService]
})
export class QrPageModule {}
