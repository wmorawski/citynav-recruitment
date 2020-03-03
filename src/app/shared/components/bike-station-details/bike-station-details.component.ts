import { PositionService } from './../../position.service';
import { Component, OnInit, Input } from '@angular/core';
import { BikeStation } from 'src/app/shared/types/bike.types';

@Component({
  selector: 'app-bike-station-details',
  templateUrl: './bike-station-details.component.html',
  styleUrls: ['./bike-station-details.component.scss']
})
export class BikeStationDetailsComponent implements OnInit {
  @Input() bikeStation: BikeStation;
  @Input() isDetails = false;
  position: Position;
  place: any;
  constructor(public positionService: PositionService) {}

  ngOnInit(): void {
    this.positionService.getPosition().then(p => {
      this.position = p;
    });
    const [longitude, latitude] = this.bikeStation.geometry.coordinates;
    this.place = this.positionService.getPlace(longitude, latitude);
  }
}
