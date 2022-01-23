import { Component, Input, OnInit } from '@angular/core';
import { Producto } from '../../models/products.model';

import * as printJS from 'print-js'; 



@Component({
  selector: 'app-comanda',
  templateUrl: './comanda.component.html',
  styleUrls: ['./comanda.component.css']
})
export class ComandaComponent implements OnInit {

    @Input () arrProductos: Producto[];

    peluqueriaJSON: JSON;
    

  constructor() { 

    
  }

  ngOnInit(): void {
  }

  calculaTotal() {

    let resultado = 0;
    for (let producto of this.arrProductos){
      resultado += (producto.precio * producto.cantidad);
    }    

    return resultado;
  }

  
  onClickBorrar(indice){

    if(this.arrProductos[indice].cantidad === 1){
      this.arrProductos.splice(indice,1);
    }else{
      this.arrProductos[indice].cantidad--  ;
    }

   
  }

  onClickBorrarTodo(indice){

    if(this.arrProductos[indice].cantidad === 1){
      this.arrProductos.splice(indice,100);
    }else{
      this.arrProductos[indice].cantidad--  ;
    }

   
  }
  
  

}
