import { Injectable } from '@angular/core';
import { GoogleSheetsDbService } from 'ng-google-sheets-db';
import { asapScheduler, Observable, of, scheduled } from 'rxjs';
import { map, mergeMap, tap } from 'rxjs/operators';

import { o2CylinderMapping } from './models/mappings/o2cylinder-mapping';
import { Resource } from './models/resource';

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

  getResourceDataByCity(city: string, resourceType: string): Observable<Resource[]> {    
    return this.getCityWorksheetMap().pipe(map(worksheets => worksheets.find(worksheet => worksheet.city = city)),
      mergeMap(cityWorkSheet => this.googleSheetDbService.get<Resource>(
        cityWorkSheet?.worksheetId || '',
        this.getSheetId(resourceType),
        this.getMapping(resourceType)
      )));
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

  private getSheetId(resourceType: string): number {
    // todo
    return 1;
  }

  private getMapping(resourceType: string) {
    return o2CylinderMapping;
  }
  
}
