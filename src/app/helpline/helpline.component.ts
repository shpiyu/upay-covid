import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HelplinedialogComponent } from '../helplinedialog/helplinedialog.component';
import { Resource } from '../models/resource';

@Component({
  selector: 'helpline',
  templateUrl: './helpline.component.html',
  styleUrls: ['./helpline.component.css'],
})
export class HelplineComponent implements OnInit {
  @Input() resource: Resource = { id: '', name: '', location: '', phone: '' };
  constructor(public dialog: MatDialog) {}
  ngOnInit(): void {}

  openDialog() {
    const dialogRef = this.dialog.open(HelplinedialogComponent, {
      data: this.resource,
    });
  }
}
