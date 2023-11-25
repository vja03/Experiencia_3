import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from '../interfaces/interfaces';
import { environment } from 'src/environments/environment';
import { Clases } from '../interfaces/interfaces';
import { ClaseEspecifica } from '../interfaces/interfaces';
import { CodigoQR } from '../interfaces/interfaces';
import { QR } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ApicrudService {

  constructor(private httpclient: HttpClient){ }
  BuscarQRId(id:number):Observable<CodigoQR>{
    return this.httpclient.get<CodigoQR>(`${environment.apiUrl}/codigosQR/?id=${id}`);
  }

  ListarClases():Observable<Clases>{
    return this.httpclient.get<Clases>(`${environment.apiUrl}/clases`);
  }

  CrearClase(newClase: ClaseEspecifica): Observable<ClaseEspecifica>{
    return this.httpclient.post<Clases>(`${environment.apiUrl}/clases`, newClase);
  }

  CrearQR(newQR: QR): Observable<QR>{
    return this.httpclient.post<CodigoQR>(`${environment.apiUrl}/codigosQR`, newQR);
  }
  CrearUsuario(newUsuario: Users): Observable<Users>{
    return this.httpclient.post<Users>(`${environment.apiUrl}/usuarios`, newUsuario);
  }
}
