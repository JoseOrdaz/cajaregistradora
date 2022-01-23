import { Component } from '@angular/core';
import { Producto } from './models/products.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  

  title=('Caja registradora');

    arrCorte: Producto[];
    arrParking: Producto[];

    productosSeleccionados: Producto[];

  
  
  constructor (){


    this.productosSeleccionados = [];

    this.arrCorte = [

      new Producto( 'Corte y barba','https://i.pinimg.com/originals/58/95/56/5895569f805b08685af3f33caf6c137f.jpg', 17),
      
      new Producto( 'Corte caballero','https://casaydiseno.com/wp-content/uploads/2020/12/cortes-de-pelo-para-hombre-peinados-atras.jpg', 13),

      new Producto( 'Arreglo de barba','https://i.ytimg.com/vi/wjR1Gn3JyDY/maxresdefault.jpg', 9),

      new Producto( 'Corte de niño','https://i.pinimg.com/474x/aa/70/b6/aa70b63a9ccc30c7611fd5dafcfe6e86.jpg', 11),
      
      new Producto( 'Corte bebé','https://www.menudospeques.net/images/tuhijo/como-cortar-pelo-bebe.jpg', 2.50),

      new Producto( 'Parking','https://www.lovevalencia.com/wp-content/uploads/2015/11/parkings-en-valencia.jpg', 1),
     
    ]


    this.arrParking = [

      new Producto( 'Parking Coche','https://www.lovevalencia.com/wp-content/uploads/2015/11/parkings-en-valencia.jpg', 2.50),
      
      new Producto( 'Parking Moto','https://www.lovevalencia.com/wp-content/uploads/2015/11/parkings-en-valencia.jpg', 2.50),
     
     
    ]

    }

    onProductoSeleccionado($event){

     //this.productosSeleccionados.push($event);
     
     const productoEncontrado = this.productosSeleccionados.find(producto => producto.nombre === $event.nombre);

     if(productoEncontrado){
       productoEncontrado.cantidad++;
     }
     
     else{

      $event.cantidad = 1;
      this.productosSeleccionados.push($event);
     }
     
    }



    


    


}
