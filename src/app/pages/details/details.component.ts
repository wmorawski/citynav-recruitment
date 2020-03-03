import { Component, OnInit } from '@angular/core';
import { BikeStation } from 'src/app/shared/types/bike.types';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  public bikeStation: BikeStation;

  constructor(private readonly location: Location, private readonly router: Router) { }

  ngOnInit(): void {
    if('id' in (this.location.getState() as BikeStation)) {
      const {navigationId, ...rest} = this.location.getState() as BikeStation & {navigationId: number };
      this.bikeStation = rest;
    } else {
      this.router.navigate(['/list']);
    }

  }

}
