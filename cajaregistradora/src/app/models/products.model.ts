export class Producto{

    nombre: string;
    imgUrl: string;
    precio: number;
    cantidad: number;

    constructor(pnombre: string, pImgUrl: string, pPrecio: number ){

        this.nombre = pnombre;
        this.imgUrl = pImgUrl;
        this.precio = pPrecio;
        this.cantidad = 0;
    }

}
