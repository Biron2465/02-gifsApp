import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _historial:string[]=[];

  get historial(){
    
    return [...this._historial];
  }

  constructor() { }

  buscarGifs(querry:string){

    querry = querry.trim().toLocaleLowerCase();

    if(!this._historial.includes(querry)){
      this._historial.unshift(querry);
      this._historial = this._historial.splice(0,10);
    }

    

    console.log(this._historial);
  }
}
