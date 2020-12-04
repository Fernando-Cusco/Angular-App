import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Cliente } from '../../models/cliente';
import { ClienteService } from '../../services/cliente.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  titulo: string = "";

  cliente: Cliente = new Cliente();



  constructor(private serviceCliente: ClienteService, 
              private router: Router, 
              private activeRoute: ActivatedRoute) { 
  }

  ngOnInit(): void {
    this.cargarCliente();
  }

  crear(){
    this.serviceCliente.crearCliente(this.cliente).subscribe(response => {
      this.router.navigate(['/clientes']);
      this.notificacion('Nuevo cliente', 'creado con éxito', 'success');
    });
    
  }

  cargarCliente() {
    
    this.activeRoute.params.subscribe(params => {
      let id = params['id'];
      if(id) {
        this.titulo = "Actualizar";
        this.serviceCliente.obtenerCliente(id).subscribe(response => {
          this.cliente = response;
        });
      } else {
        this.titulo = "Nuevo";
      }
    });
  }

  actualizarCliente() {
    this.serviceCliente.actulizarCliente(this.cliente).subscribe(response => {
      this.router.navigate(['/clientes']);
      this.notificacion('CLiente actualizado', 'actualizado con éxito', 'success');
    });
  }

  notificacion(titulo: string, contenido: string, tipo){
    swal.fire(
      titulo,
      `El cliente ${this.cliente.nombres} ${this.cliente.apellidos}, ${contenido}`,
      tipo
     );
  }

}
