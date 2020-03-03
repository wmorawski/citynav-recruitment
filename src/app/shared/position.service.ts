import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PositionService {
  constructor(private readonly http: HttpClient) {}

  public getPosition() {
    return new Promise<Position>((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  }

  public getPlace(longitude: number, latitude: number) {
    const params = new HttpParams()
      .set('access_token', environment.mapbox.key)
      .set('types', 'address');
    return this.http.get(
      `${environment.mapbox.url}/geocoding/v5/mapbox.places/${longitude},${latitude}.json`,
      { params }
    );
  }
}
