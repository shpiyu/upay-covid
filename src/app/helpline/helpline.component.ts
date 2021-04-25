import { Component, Input, OnInit } from '@angular/core';
import { defaulHelpline, Helpline } from './helpline.model';
import { MatDialog } from '@angular/material/dialog';
import { HelplinedialogComponent } from '../helplinedialog/helplinedialog.component';

@Component({
  selector: 'helpline',
  templateUrl: './helpline.component.html',
  styleUrls: ['./helpline.component.css'],
})
export class HelplineComponent implements OnInit {
  @Input() helpline: Helpline = defaulHelpline;
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  openDialog() {
    const dialogRef = this.dialog.open(HelplinedialogComponent, {
      data: this.helpline,
    });
  }
}
