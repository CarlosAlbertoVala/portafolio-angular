import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina} from '../interfaces/info-pagina.interface';
@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

    info: InfoPagina = {};
    cargada = false;
  constructor(private http: HttpClient) {
    // console.log('servicio de infoPagina listo carlos');

    // leer el archivo  json para que lea nuestra pagina
    this.http.get('assets/data/data-pagina.json') // es la definicion donde esta el archivo
      .subscribe( (resp: InfoPagina) => { //es para ejecutar la repuestas
        this.cargada = true;
        this.info = resp.;
        console.log(resp);  //con esto te muestra todo el contenido
        // console.log(resp['email']); // con esto especificamos que quiero que envie al navegador del archivo json
      });


  }
}
