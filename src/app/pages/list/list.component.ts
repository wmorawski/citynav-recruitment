import { BikeService } from 'src/app/shared/services/bike.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BikeStationsResponse } from 'src/app/shared/types/bike.types';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  public bikeStations: Observable<BikeStationsResponse>;
  constructor(private readonly bikeService: BikeService) {}

  ngOnInit(): void {
    this.bikeStations = this.bikeService.getBikeStations();
  }
}
