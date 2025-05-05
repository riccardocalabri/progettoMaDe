import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { School } from '../interfaces/school';

@Injectable({
  providedIn: 'root'
})
export class MadeService {

  baseURL: string = 'https://api.retescuolevallagarina.it'

  httpClient = inject(HttpClient)

  getSchools(): Observable<School> {
    console.log('cercando le scuole...')
    return this.httpClient.get<School>(`${this.baseURL}/items/schools`);
  }
  
}
