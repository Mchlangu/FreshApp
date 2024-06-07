import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Motor } from '../models/motor.model';
import { Observable } from 'rxjs';


const baseUrl = 'http://localhost:8080/api/motor';

@Injectable({
    providedIn: 'root'
})
export class MotorService {

    constructor(private http: HttpClient) { }

    getAll(): Observable<Motor[]> {
        return this.http.get<Motor[]>(baseUrl);
      }
    
      get(id: any): Observable<Motor> {
        return this.http.get(`${baseUrl}/${id}`);
      }
    
      create(data: any): Observable<any> {
        return this.http.post(baseUrl, data);
      }
    
      update(id: any, data: any): Observable<any> {
        return this.http.put(`${baseUrl}/${id}`, data);
      }
    
      delete(id: any): Observable<any> {
        return this.http.delete(`${baseUrl}/${id}`);
      }
    
      deleteAll(): Observable<any> {
        return this.http.delete(baseUrl);
      }
    
      findByTitle(title: any): Observable<Motor[]> {
        return this.http.get<Motor[]>(`${baseUrl}?title=${name}`);
      }

}
