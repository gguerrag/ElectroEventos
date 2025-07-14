import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventoService {

  private apiUrl = 'https://gguerrag.github.io/json/eventos.json';

  constructor(private http: HttpClient) { }


  getEventos(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }


  crearEvento(evento: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, evento);
  }

  actualizarEvento(id: number, evento: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, evento);
  }

  deleteEvento(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
