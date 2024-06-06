import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PrioridadesService {
  private API_SERVER = "http://localhost:8080/prioridad/";

  constructor(
    private httpClient: HttpClient,
  ) { }

  public getAllPrioridades(): Observable<any> {
    return this.httpClient.get(this.API_SERVER);
  }

}
