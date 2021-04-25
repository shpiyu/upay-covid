import { Component, OnChanges, OnInit, Output, SimpleChange, SimpleChanges } from '@angular/core';
import * as EventEmitter from 'events';
import { error } from 'protractor';
import { DataService } from '../data.service';
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
export class FilterComponent implements OnInit, OnChanges {
  
  cities: string[] = []
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

  selectedCity: String = '';
  selectedResourceValue: ResourceValue = this.resources[0];

  // @Output() cityChange = new EventEmitter();
  // @Output() resourceChange = new 

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getCityList().subscribe(
      cities => this.cities = cities,
      error => console.error("Could not fetch city list", error));
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

}
