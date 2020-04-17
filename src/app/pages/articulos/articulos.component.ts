import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { Subscriber } from 'rxjs';
import { ProductosService } from '../../services/productos.service';
import { ProductoDescripcion } from '../../interfaces/producto-descripcion.interface';

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.css']
})
export class ArticulosComponent implements OnInit {

  constructor(private route: ActivatedRoute, 
              public productoService: ProductosService) { }

  ngOnInit(): void {
    this.route.params
    .subscribe(parametros => {
      // console.log(parametros['id']);
      this.productoService.getProducto(parametros['id'])
          .subscribe( (producto: ProductoDescripcion) => {
            console.log(producto);
          });
    });
  }

}
