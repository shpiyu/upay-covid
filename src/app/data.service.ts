import { Injectable } from '@angular/core';
import { GoogleSheetsDbService } from 'ng-google-sheets-db';
import { asapScheduler, Observable, of, scheduled } from 'rxjs';
import { map, mergeMap, tap } from 'rxjs/operators';
import { fabifluMapping } from './models/mappings/fabiflu-mapping';
import { GenMedMapping } from './models/mappings/gen-med-mapping';
import { hospitalMapping } from './models/mappings/hospital-mapping';
import { mealMapping } from './models/mappings/meal-mapping';
import { o2RefillMapping } from './models/mappings/o2-refill-mapping';

import { o2CylinderMapping } from './models/mappings/o2cylinder-mapping';
import { plasmaDonorMapping } from './models/mappings/plasma-donor-mapping';
import { remdesivirMapping } from './models/mappings/remdesivirMapping';
import { testLabMapping } from './models/mappings/test-lab-mapping';
import { Resource } from './models/resource';
import { ResourceType } from './models/resource-types';

interface CityWorksheetMap {
  city: string;
  worksheetId: string;
}

const cityWorksheetMapping = {
  city: 'city',
  worksheetId: 'worksheetID'
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  cityWorksheetMappingId: string = '1s4bI6gqFsKor1iWa3zCU6FjIizokJJJEjEWfGoK48zY';
  cityWorksheetMapping: Map<String, String> = new Map();

  constructor(private googleSheetDbService: GoogleSheetsDbService) {}

  getResourceDataByCity(city: string, resourceType: ResourceType): Observable<Resource[]> {    
    return this.getCityWorksheetMap().pipe(map(worksheets => worksheets.find(worksheet => worksheet.city = city)),
      mergeMap(cityWorkSheet => this.googleSheetDbService.get<Resource>(
        cityWorkSheet?.worksheetId || '',
        resourceType,
        this.getMapping(resourceType)
      )));
  }

  getCityList(): Observable<string[]> {
    return this.getCityWorksheetMap().pipe(map(worksheets => worksheets.map(worksheet => worksheet.city)));
  }

  private getCityWorksheetMap(): Observable<CityWorksheetMap[]> {
    return this.getWorksheets().pipe(tap((worksheets) => {
      if (this.cityWorksheetMapping.size == 0) {
        worksheets.forEach(worksheet => this.cityWorksheetMapping.set(worksheet.city, worksheet.worksheetId));
      }
      return scheduled(this.cityWorksheetMapping, asapScheduler);
    }, (error) => {
      console.error("Error getting city worksheet mapping");
    }));
    
  }

  // gets worksheet ids for each city
  private getWorksheets(): Observable<CityWorksheetMap[]> {
    return this.googleSheetDbService.get<CityWorksheetMap>(
      this.cityWorksheetMappingId,
      1,
      cityWorksheetMapping
    );
  }

  private getMapping(resourceType: ResourceType): Object {
    switch(resourceType) {
      case ResourceType.o2cylinders:
        return o2CylinderMapping;
      case ResourceType.hospitals:
        return hospitalMapping;
      case ResourceType.meals:
        return mealMapping;
      case ResourceType.o2refills:
        return o2RefillMapping;
      case ResourceType.testingLabs:
        return testLabMapping;
      case ResourceType.genMeds:
        return GenMedMapping;
      case ResourceType.plasmaDonors:
        return plasmaDonorMapping;
      case ResourceType.remdesivir:
        return remdesivirMapping;
      case ResourceType.fabiflu:
        return fabifluMapping;
      default:
        console.error("Invalid resource type:", resourceType);
        return {};
    }
  }
  
}
