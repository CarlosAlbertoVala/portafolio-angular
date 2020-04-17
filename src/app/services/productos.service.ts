import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { interfaceProducto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  productos: interfaceProducto[] ;


  constructor(private http: HttpClient) {
    this.cargarProductos();

   }

   private cargarProductos(){
    this.http.get('https://angular-html-40be7.firebaseio.com/productos_idx.json')
      .subscribe((resp: interfaceProducto[]) => {
        this.productos = resp;
        this.cargando = false;
        // console.log(resp);

      });
   }
   getProducto(id: string){
    return this.http.get(`https://angular-html-40be7.firebaseio.com/productos/${id}.json`);

   }



}
