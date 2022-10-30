import { LocationsService } from './../../shared/services/locations.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-locations-page',
  templateUrl: './locations-page.component.html',
  styleUrls: ['./locations-page.component.css']
})
export class LocationsPageComponent implements OnInit {

  locations:any= []

  constructor(private locationsService : LocationsService) { }

  ngOnInit(): void {

    this.locationsService.getLocations().subscribe((res:any) =>{
      console.log(res);

      this.locations= res.results;

  })
}
}
