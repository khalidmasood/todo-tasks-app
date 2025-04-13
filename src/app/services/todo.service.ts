import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private apiUrl = '../../assets/mock/todos.json'; // Replace with your real API

  constructor(private http: HttpClient) {}

  getTodoList(): Observable<any> {
    
    return this.http.get<any>(this.apiUrl);
    
    /*return this.http.get<any>(this.apiUrl).pipe(
      catchError(err => {
        console.error('Error loading JSON:', err);
        return of(null); // fallback for SSR/prerendering
      })
    );*/
  }
}
