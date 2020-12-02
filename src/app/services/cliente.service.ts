import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { clientesList } from '../components/clientes/clientes.json';
import { Cliente } from '../models/cliente';
@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor() { }

  getClientes(): Observable<Cliente[]> {
    return of(clientesList);
  }
}
