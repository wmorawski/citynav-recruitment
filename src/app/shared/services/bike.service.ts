import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BikeStationsResponse } from '../types/bike.types';

@Injectable({
  providedIn: 'root'
})
export class BikeService {
  constructor(private readonly http: HttpClient) {}

  getBikeStations() {
    const params: HttpParams = new HttpParams()
      .set('mtype', 'pub_transport')
      .set('co', 'stacje_rowerowe');
    return this.http.get<BikeStationsResponse>(environment.poznanApi, {
      params
    });
  }
}
