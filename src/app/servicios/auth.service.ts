import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';
import { Users,newUser} from '../interfaces/interfaces';
import { Observable } from 'rxjs';
import { catchError, map } from   'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl= 'C:\Users\vicen\OneDrive\Desktop\RegistrApp\src\app\data'
  constructor(private httpclient: HttpClient) { }

  getAllUsers():Observable<Users>{
    return this.httpclient.get<Users>(`${environment.apiUrl}/usuarios`);
  }
  getUserById(codigo: any):Observable<Users>{
    return this.httpclient.get<Users>(`${environment.apiUrl}/usuarios/?email=${codigo}`);
  }
  validateUser(email: string, password: string): Observable<boolean>{
    return this.httpclient.get<Users[]>(`${environment.apiUrl}/usuarios/?email=${email}`).pipe(
      map(users => {
        if (users.length === 1) {
          const user = users[0];
          return user.password === password;
        }
        return false;
      })
    );
  }
  IsLoggedIn(){
    return sessionStorage.getItem('username')!=null;
  }
  getUserrole(){
  return sessionStorage.getItem('userrole')!=null?sessionStorage.getItem('userrole')?.toString():''
  }
  BuscarUsuarioId(id:number):Observable<Users>{
    return this.httpclient.get<Users>(`${environment.apiUrl}/usuarios/?id=${id}`)
  }

  ActualizarUsuario(usuario:any):Observable<Users>{
    return this.httpclient.put<Users>(`${environment.apiUrl}/usuarios/${usuario.id}`, usuario);
  }

  getUsers(): Observable<any[]> {
    return this.httpclient.get<any[]>(this.apiUrl);
  }

  buscarIdPorNombreYCorreo(username: string, email: string): Observable<number | null> {
    return this.getUsers().pipe(map((usuarios) => {
      const usuarioEncontrado = usuarios.find(
        (usuario) => usuario.username === username && usuario.email === email
      );

      return usuarioEncontrado ? usuarioEncontrado.id : null;
    }));
  }
  CrearUsuario(newUsuario:newUser): Observable<newUser>{
    return this.httpclient.post<Users>(`${environment.apiUrl}/usuarios`, newUsuario);
  }
 
}
