import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { About } from '../shared/models/About';

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  constructor(private httpClient: HttpClient) { }


  getAbout():  Observable<About[]>{
    const {appUrl} = environment;
    return this.httpClient.get<About[]>(`${appUrl}/abouts`);
  }



}

