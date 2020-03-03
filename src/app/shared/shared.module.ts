import { BikeStationDetailsComponent } from './components/bike-station-details/bike-station-details.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
@NgModule({
  declarations: [BikeStationDetailsComponent],
  imports: [CommonModule, MatCardModule],

exports: [BikeStationDetailsComponent]
})
export class SharedModule {}
