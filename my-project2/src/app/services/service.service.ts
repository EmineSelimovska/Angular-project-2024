import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Service } from '../shared/models/Service';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private httpClient: HttpClient) { }

  getService(): Observable<Service[]> {
    const {appUrl} = environment;
    return this.httpClient.get<Service[]>(`${appUrl}/services`);
  }

}
