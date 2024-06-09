import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PedidosService {
  private API_SERVER = "http://localhost:8080/pedido/";
  private apiUrl = "http://localhost:8080/pedido/top3";

  constructor(private httpClient: HttpClient) {}

  public getAllPedidos(): Observable<any>{
    return this.httpClient.get(this.API_SERVER);
  }

  public savePedido(pedido: any): Observable<any>{
    return this.httpClient.post(this.API_SERVER, pedido);
  }


  public getTop3Pedidos(): Observable<any> {
    return this.httpClient.get<any>(this.apiUrl);
  }

}
