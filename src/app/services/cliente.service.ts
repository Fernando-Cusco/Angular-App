import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Cliente } from '../models/cliente';

import swal from 'sweetalert2';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private URL_ENDPOINT: string = "http://localhost:8080/api/clientes/";

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  

  constructor(private http:HttpClient, private router: Router) { }

  getClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(`${this.URL_ENDPOINT}`);
  }

  crearCliente(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(`${this.URL_ENDPOINT}`, cliente, {headers: this.httpHeaders}).pipe(
      catchError(e => {
        swal.fire('Error al crear el usuario', e.error.error, 'error');
        return throwError(e);
      })
    )
  }

  obtenerCliente(id: number): Observable<Cliente> {
    return this.http.get<Cliente>(`${this.URL_ENDPOINT}${id}`).pipe(
      catchError(e => {
        this.router.navigate(['/clientes']);
        swal.fire('Error al obtener el usuario', e.error.mensaje, 'error');
        return throwError(e);
      })
    )
  }

  actulizarCliente(cliente: Cliente): Observable<Cliente> {
    return this.http.put<Cliente>(`${this.URL_ENDPOINT}${cliente.id}`, cliente, {headers: this.httpHeaders}).pipe(
      catchError(e => {
        swal.fire('Error al actualizar el usuario', e.error.error, 'error');
        return throwError(e);
      })
    )
  }

  eliminarCliente(id: number): Observable<Cliente> {
    return this.http.delete<Cliente>(`${this.URL_ENDPOINT}${id}`).pipe(
      catchError(e => {
        swal.fire('Error al eliminar el usuario', e.error.error, 'error');
        return throwError(e);
      })
    )
  }


}
