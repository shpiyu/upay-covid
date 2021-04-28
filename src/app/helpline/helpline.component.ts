import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HelplinedialogComponent } from '../helplinedialog/helplinedialog.component';
import { DialogTable } from '../models/dialog-table';
import { dialogTableMapping } from '../models/mappings/dialog-table-mapping';
import { Resource } from '../models/resource';

@Component({
  selector: 'helpline',
  templateUrl: './helpline.component.html',
  styleUrls: ['./helpline.component.css'],
})
export class HelplineComponent implements OnInit {
  @Input() resource: Resource = { id: '', name: '', location: '', phone: '' };
  ignoredKeys: string[] = ["id", "direction"];
  constructor(public dialog: MatDialog) {}
  ngOnInit(): void {}

  openDialog() {
    const dialogRef = this.dialog.open(HelplinedialogComponent, {
      data: this.mapResourceToTableData(this.resource),
    });
  }

  private mapResourceToTableData(resource: Resource): DialogTable {
    let tableData: {[key: string]: string} = {};
    
    Object.entries(resource)
    .filter(resourceItem => !this.ignoredKeys.includes(resourceItem[0]))
    .forEach(resourceItem => {
      let key: string = dialogTableMapping[resourceItem[0]] || resourceItem[0];
      tableData[key] = resourceItem[1];
    });

    return tableData;
  }
}
