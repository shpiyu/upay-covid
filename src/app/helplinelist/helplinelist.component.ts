import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Resource } from '../models/resource';
import { ResourceType } from '../models/resource-types';

@Component({
  selector: 'helpline-list',
  templateUrl: './helplinelist.component.html',
  styleUrls: ['./helplinelist.component.css'],
})
export class HelplinelistComponent implements OnInit {
  resourceList: Resource[] = []

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getResourceDataByCity('pune', ResourceType.o2cylinders).subscribe(
      resources => this.resourceList = resources,
      error => console.error(`Error fetching resource list for city '${'pune'}' and resource type '${ResourceType.o2cylinders.toString()}'`)
    );
  }
}
