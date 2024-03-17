import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Property } from '../shared/models/Property';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  constructor(private httpClient: HttpClient) { }

    getProperty(): Observable<Property[]>{
      const {appUrl} = environment;
      return this.httpClient.get<Property[]>(`${appUrl}/property`);
    }


  
}
