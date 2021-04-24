import { Injectable } from '@angular/core';
import { GoogleSheetsDbService } from 'ng-google-sheets-db';
import { Observable } from 'rxjs';
import { o2CylinderMapping } from './models/mappings/o2cylinder-mapping';
import { O2Cylinder } from './models/o2cylinder';

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

  
}
