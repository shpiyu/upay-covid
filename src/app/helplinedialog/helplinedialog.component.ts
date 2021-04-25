import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Helpline } from '../helpline/helpline.model';

@Component({
  selector: 'app-helplinedialog',
  templateUrl: './helplinedialog.component.html',
  styleUrls: ['./helplinedialog.component.css'],
})
export class HelplinedialogComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: Helpline) {}
  ngOnInit(): void {}
}
