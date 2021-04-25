import { Component, Input, OnInit } from '@angular/core';
import { Resource } from '../models/resource';

@Component({
  selector: 'helpline',
  templateUrl: './helpline.component.html',
  styleUrls: ['./helpline.component.css'],
})
export class HelplineComponent implements OnInit {
  @Input() resource: Resource = {id: '', name: '', location: '', phone: '' };

  constructor() {}

  ngOnInit(): void {}
}
