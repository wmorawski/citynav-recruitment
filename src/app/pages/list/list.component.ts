import { BikeService } from 'src/app/shared/services/bike.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BikeStationsResponse, BikeStation } from 'src/app/shared/types/bike.types';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  public bikeStations: Observable<BikeStationsResponse>;
  constructor(private readonly bikeService: BikeService, private readonly router: Router) {}

  ngOnInit(): void {
    this.bikeStations = this.bikeService.getBikeStations();
  }

  navigateWithData(station: BikeStation) {
    this.router.navigate(['/details'], {state: {...station}})
  }
}
