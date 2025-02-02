import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { SearchGifsResponse, Gif } from '../interface/gifs.interface';


@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey: string ='C3bOiybQz5gWVB40XkT7YLlXt8M98xyo';
  private servicioUrl:string = 'https://api.giphy.com/v1/gifs/'
  private _historial:string[]=[];

  public resultados: Gif[]=[];

  get historial(){
    
    return [...this._historial];
  }
 
  constructor( private http: HttpClient) {
    
    this._historial = JSON.parse(localStorage.getItem('historial')!)||[];
    this.resultados = JSON.parse(localStorage.getItem('resultados')!)||[];
    // if(localStorage.getItem('historial')){
    //   this._historial = JSON.parse(localStorage.getItem('historial')!);
    // }
  }

  buscarGifs(querry:string){

    querry = querry.trim().toLocaleLowerCase();

    if(!this._historial.includes(querry)){
      this._historial.unshift(querry);
      this._historial = this._historial.splice(0,10);
      localStorage.setItem('historial', JSON.stringify(this._historial));
    }
    
    const params = new HttpParams()
      .set('api_key',this.apiKey)
      .set('limit', '10')
      .set('q', querry);
    console.log(params);


    this.http.get<SearchGifsResponse>(`${this.servicioUrl}/search`,{params})
      .subscribe((resp) =>{
        this.resultados= resp.data;
        localStorage.setItem('resultados', JSON.stringify(this.resultados));
    })
  }
}
