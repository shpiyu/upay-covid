import { Component, Input, OnInit } from '@angular/core';
import { defaulHelpline, Helpline } from './helpline.model';

@Component({
  selector: 'helpline',
  templateUrl: './helpline.component.html',
  styleUrls: ['./helpline.component.css'],
})
export class HelplineComponent implements OnInit {
  @Input() helpline: Helpline = defaulHelpline;
  constructor() {}

  ngOnInit(): void {}
}
