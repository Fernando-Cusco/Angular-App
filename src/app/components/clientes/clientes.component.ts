import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../models/cliente';
import { ClienteService } from '../../services/cliente.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[] = [];

  constructor(private clienteService: ClienteService) { 
    
  }

  ngOnInit(): void {

    this.clienteService.getClientes().subscribe(response => {
      console.log(response);
      
      this.clientes = response;
    });
  }

  eliminarCliente(cliente: Cliente) {
    const swalWithBootstrapButtons = swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Está seguro?',
      text: "No se podra revertir",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText: 'No, cancelar!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.clienteService.eliminarCliente(cliente.id).subscribe(response => {
          this.clientes = this.clientes.filter(c => c!= cliente);
          swalWithBootstrapButtons.fire(
            'Eliminado!',
            `El cliente ${cliente.nombres} fue eliminado`,
            'success'
          )
        });
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelado',
          `Cliente ${cliente.nombres} no se eliminó :)`,
          'error'
        )
      }
    })
  }



}
