import { BikeService } from 'src/app/shared/services/bike.service';
import { Component, OnInit } from '@angular/core';
import { BikeStation } from 'src/app/shared/types/bike.types';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import { tileLayer, latLng } from 'leaflet';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  public bikeStation: BikeStation;
  public leafletOptions = {
    layers: [
      tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18
      })
    ],
    zoom: 5,
    center: latLng(46.879966, -121.726909)
  };

  constructor(
    private readonly bikeService: BikeService,
    private readonly router: Router,
    private readonly ar: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.bikeService
      .getBikeStations()
      .pipe(first())
      .subscribe(response => {
        this.bikeStation = response.features?.find(
          station => station.id === this.ar.snapshot.params.id
        );
        if (!this.bikeStation) {
          this.router.navigate(['/list']);
        }
      });
  }
}
