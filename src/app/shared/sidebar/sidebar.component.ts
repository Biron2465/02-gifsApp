import { Component, ViewChild, ElementRef } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';
import { SearchGifsResponse } from '../../gifs/interface/gifs.interface';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',

})
export class SidebarComponent {


  get historial(){
    return this.gifsService.historial;
  }

  constructor( private gifsService:GifsService , private http:HttpClient){

  }

  buscar(termino:string){
    this.gifsService.buscarGifs(termino);
  }

}
