import { Pipe, PipeTransform } from '@angular/core';
import { LatLng } from 'leaflet';

@Pipe({
  name: 'distance'
})
export class DistancePipe implements PipeTransform {
  transform(value: number[], position: Position): number {
    return new LatLng(
      position.coords.latitude,
      position.coords.longitude
    ).distanceTo(new LatLng(value[1], value[0]));
  }
}
