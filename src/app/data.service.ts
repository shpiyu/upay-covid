import { Injectable } from '@angular/core';
import { GoogleSheetsDbService } from 'ng-google-sheets-db';
import { Observable } from 'rxjs';
import { o2CylinderMapping } from './models/mappings/o2cylinder-mapping';
import { O2Cylinder } from './models/o2cylinder';
import { Resource } from './models/resource';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private googleSheetDbService: GoogleSheetsDbService) {}

  getO2Cylinders(): Observable<O2Cylinder[]> {
    return this.googleSheetDbService.get<O2Cylinder>(
      '1o9F0VNjYwwjAjbBX_3vteJoCwE36LOARx7Xs62dZVYY',
      'O2 Cylinder',
      o2CylinderMapping);
  }

  getResourceByCity(resourceType: string, city: string): Observable<Resource[]> {
    return this.googleSheetDbService.get<Resource>(
      this.getWorksheetId(city, resourceType),
      this.getSheetId(resourceType),
      this.getMapping(resourceType)
    );
  }

  private getWorksheetId(city: string, resourceType: string): string {
    // todo
    return '1o9F0VNjYwwjAjbBX_3vteJoCwE36LOARx7Xs62dZVYY';
  }

  private getSheetId(resourceType: string): number {
    // todo
    return 1;
  }

  private getMapping(resourceType: string) {
    return o2CylinderMapping;
  }
  
}
