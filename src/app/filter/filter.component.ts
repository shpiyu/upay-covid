import { Component, OnInit } from '@angular/core';
import { City } from '../models/city';
import { ResourceType } from '../models/resource-types';

interface ResourceValue {
  viewValue: string,
  value: ResourceType
}

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  cities: string[] = ['pune', 'delhi']
  resources: ResourceValue[] = [
    { viewValue: 'Oxygen Cylinders', value: ResourceType.o2cylinders },
    { viewValue: 'Meals', value: ResourceType.meals },
    { viewValue: 'Oxygen Refills', value: ResourceType.o2refills },
    { viewValue: 'Hospitals', value: ResourceType.hospitals },
    { viewValue: 'Remdevisir', value: ResourceType.remdesivir },
    { viewValue: 'Fabiflu', value: ResourceType.fabiflu },
    { viewValue: 'General Medicine', value: ResourceType.genMeds },
    { viewValue: 'Testing Labs', value: ResourceType.testingLabs }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
