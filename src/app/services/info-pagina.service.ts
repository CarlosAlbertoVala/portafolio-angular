import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina} from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

    info: InfoPagina = {};
    cargada = false;
    equipo: any[] = [];
  constructor(private http: HttpClient) {
    // console.log('servicio de infoPagina listo carlos');
    this.cargarInfo();
    this.cargarEquipo();
  }

  private cargarInfo(){
       // leer el archivo  json para que lea nuestra pagina
    this.http.get('assets/data/data-pagina.json') // es la definicion donde esta el archivo
    .subscribe( (resp: InfoPagina) => {  // es para ejecutar la repuestas
      this.cargada = true;
      this.info = resp;
      // console.log(resp);  // con esto te muestra todo el contenido
    });
  }

  private cargarEquipo(){
    this.http.get('https://angular-html-40be7.firebaseio.com/equipo.json')
    .subscribe( (resp: any[]) => {
      this.equipo = resp;
      console.log(resp);
    });
  }

}
