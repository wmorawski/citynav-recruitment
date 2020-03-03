import { BikeStationDetailsComponent } from './components/bike-station-details/bike-station-details.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { DistancePipe } from './pipes/distance.pipe';
import { ShortNumberPipe } from './pipes/short-number.pipe';
@NgModule({
  declarations: [BikeStationDetailsComponent, DistancePipe, ShortNumberPipe],
  imports: [CommonModule, MatCardModule, MatIconModule],

  exports: [BikeStationDetailsComponent]
})
export class SharedModule {}
