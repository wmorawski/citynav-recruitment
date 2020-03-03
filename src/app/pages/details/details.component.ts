import { BikeService } from 'src/app/shared/services/bike.service';
import { Component, OnInit } from '@angular/core';
import { BikeStation } from 'src/app/shared/types/bike.types';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import { tileLayer, latLng, Map, marker, icon, divIcon } from 'leaflet';
import 'leaflet.locatecontrol';
import * as L from 'leaflet';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  public bikeStation: BikeStation;
  public leafletOptions: L.MapOptions;
  public leafletLayers: L.Layer[];

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
        } else {
          this.configureOptions();
          this.configureLayers();
        }
      });
  }

  onMapReady(map: Map): void {
    const locateOptions: L.Control.LocateOptions & {
      compassStyle: L.PathOptions;
    } = {
      setView: false,
      keepCurrentZoomLevel: true,
      flyTo: true,
      circleStyle: {
        fillColor: 'rgb(66,100,251)',
        fillOpacity: 0.3
      },
      markerStyle: {
        fillColor: 'rgb(66,100,251)',
        color: 'rgb(66,100,251)'
      },
      compassStyle: {
        opacity: 0
      },
      icon: 'fa fa-location-arrow'
    };
    const lc = L.control.locate(locateOptions).addTo(map);
    lc.start();
  }

  private configureOptions(): void {
    this.leafletOptions = {
      zoomControl: false,
      layers: [
        tileLayer(
          'https://api.mapbox.com/styles/v1/ratten/ck7c5bgbq05ql1iquxwdzapjv/tiles/256/{z}/{x}/{y}?access_token=' +
            environment.mapbox.key,
          {
            maxZoom: 22,
            minZoom: 14
          }
        )
      ],
      zoom: 18,
      center: latLng(
        this.bikeStation.geometry.coordinates[1],
        this.bikeStation.geometry.coordinates[0]
      )
    };
  }

  private configureLayers(): void {
    this.leafletLayers = [
      marker(
        [
          this.bikeStation.geometry.coordinates[1],
          this.bikeStation.geometry.coordinates[0]
        ],
        {
          icon: divIcon({
            iconSize: [128, 36],
            iconAnchor: [18, 41],
            html: `<img src='assets/icons/marker.svg' /><span class='bikes'>${this.bikeStation.properties.bikes}</span>`,
            className: 'citynav-icon'
          })
        }
      )
    ];
  }
}
