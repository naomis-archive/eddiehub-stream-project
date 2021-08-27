import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { FormData } from 'src/interfaces/FormData';
import { ResponseData } from 'src/interfaces/ResponseData';

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
    response.subscribe((data) => this.cache.set(this.URL, data));
    return response;
  }

  public postEvent(data: FormData): Observable<ResponseData> {
    return this.http.post<ResponseData>(this.URL, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
