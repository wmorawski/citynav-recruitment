import { BikeStationDetailsComponent } from './components/bike-station-details/bike-station-details.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [BikeStationDetailsComponent],
  imports: [CommonModule],
  exports: [BikeStationDetailsComponent]
})
export class SharedModule {}
