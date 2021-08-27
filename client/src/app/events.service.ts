import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { FormData } from 'src/interfaces/FormData';

@Injectable({
  providedIn: 'root',
})
export class EventsService {
  private URL = 'http://localhost:3000/events';
  public cache = new Map();
  constructor(private http: HttpClient) {}

  public getEvents(): Observable<FormData[]> {
    const dataFromCache = this.cache.get(this.URL);

    if (dataFromCache) {
      return of(dataFromCache);
    }
    const response = this.http.get<FormData[]>(this.URL);
    response.subscribe(data => this.cache.set(this.URL, data));
    return response;
  }
}
