import { PositionService } from 'src/app/shared/services/position.service';
import { Component, Input, OnChanges, OnDestroy } from '@angular/core';
import { BikeStation } from 'src/app/shared/types/bike.types';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-bike-station-details',
  templateUrl: './bike-station-details.component.html',
  styleUrls: ['./bike-station-details.component.scss']
})
export class BikeStationDetailsComponent implements OnChanges, OnDestroy {
  @Input() bikeStation: BikeStation;
  @Input() isDetails = false;
  position: Position;
  place: any;
  positionSubscriber$ = new Subscription();
  constructor(public positionService: PositionService) {}

  ngOnChanges(): void {
    this.positionService.getPosition().then((position: Position) => {
      this.position = position;
    });
    this.positionSubscriber$.add(this.positionService.positionChange.subscribe((position: Position) => {
      this.position = position;
    }));
    const [longitude, latitude] = this.bikeStation.geometry.coordinates;
    this.place = this.positionService.getPlace(longitude, latitude);
  }

  ngOnDestroy(): void {
    this.positionSubscriber$.unsubscribe();
  }
}
