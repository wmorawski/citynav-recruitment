import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { BikeStation } from 'src/app/shared/types/bike.types';

@Component({
  selector: 'app-bike-station-details',
  templateUrl: './bike-station-details.component.html',
  styleUrls: ['./bike-station-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BikeStationDetailsComponent implements OnInit {
  @Input() bikeStation: BikeStation;
  constructor() { }

  ngOnInit(): void {
  }

}
