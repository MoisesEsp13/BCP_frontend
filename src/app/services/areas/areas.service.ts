import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AreasService {
  private API_SERVER = "http://localhost:8080/area/";

  constructor(
    private httpClient: HttpClient,
  ) { }

  public getAllAreas(): Observable<any> {
    return this.httpClient.get(this.API_SERVER);
  }

}
