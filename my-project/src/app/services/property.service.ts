import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Property } from '../shared/models/Property';
import { Property_URL } from '../shared/constants/url';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  constructor(private httpClient: HttpClient) { }

    getAll(): Observable<Property[]>{
      return this.httpClient.get<Property[]>(Property_URL);
    }


  
}
