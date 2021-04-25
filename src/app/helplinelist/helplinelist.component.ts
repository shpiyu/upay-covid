import { SimpleChanges } from '@angular/core';
import { Component, Input, OnChanges, OnInit, SimpleChange } from '@angular/core';
import { DataService } from '../data.service';
import { Resource } from '../models/resource';
import { ResourceType } from '../models/resource-types';

@Component({
  selector: 'helpline-list',
  templateUrl: './helplinelist.component.html',
  styleUrls: ['./helplinelist.component.css'],
})
export class HelplinelistComponent implements OnInit, OnChanges {
  resourceList: Resource[] = [];

  @Input() city: string = '';
  @Input() resourceType: ResourceType = ResourceType.o2cylinders; 

  constructor(private dataService: DataService) {}

  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.city);
    console.log(this.resourceType);
    this.setResources();
  }

  private setResources() {
    this.dataService
      .getResourceDataByCity(this.city, this.resourceType)
      .subscribe(
        (resources) => {
          this.resourceList = resources;
          console.log(`Successfully fetched data for city '${this.city}' and resource type '${this.resourceType}'`);
          console.log(resources);
        },
        (error) => {
          this.resourceList = [];
          console.error(
            `Error fetching resource list for city '${this.city}' and resource type '${this.resourceType}'`
          )
        }
      );
  }

}
