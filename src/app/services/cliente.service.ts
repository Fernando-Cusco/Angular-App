import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { clientesList } from '../components/clientes/clientes.json';
import { Cliente } from '../models/cliente';
@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private URL_ENDPOINT: string = "http://localhost:8080/api/clientes/";

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})


  constructor(private http:HttpClient) { }

  getClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(`${this.URL_ENDPOINT}`);
  }

  crearCliente(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(`${this.URL_ENDPOINT}`, cliente, {headers: this.httpHeaders});
  }

  obtenerCliente(id: number): Observable<Cliente> {
    return this.http.get<Cliente>(`${this.URL_ENDPOINT}${id}`);
  }

  actulizarCliente(cliente: Cliente): Observable<Cliente> {
    return this.http.put<Cliente>(`${this.URL_ENDPOINT}${cliente.id}`, cliente, {headers: this.httpHeaders});
  }

  eliminarCliente(id: number): Observable<Cliente> {
    return this.http.delete<Cliente>(`${this.URL_ENDPOINT}${id}`);
  }


}
