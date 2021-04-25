import { Component } from '@angular/core';
import { DataService } from './data.service';
import { ResourceType } from './models/resource-types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'upay-covid';
  currentCity = 'pune';
  currentResourceType = ResourceType.o2cylinders;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    console.log("data");
    this.dataService.getResourceDataByCity('pune', ResourceType.o2cylinders).subscribe(console.log);
  }

  onCityChange(city: string) {
    console.log(city);
    this.currentCity = city;
  }

  onResourceTypeChange(resourceType: ResourceType) {
    console.log(resourceType);
    this.currentResourceType = resourceType;
  }
}
