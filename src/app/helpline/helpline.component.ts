import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'helpline',
  templateUrl: './helpline.component.html',
  styleUrls: ['./helpline.component.css'],
})
export class HelplineComponent implements OnInit {
  @Input() name = '';
  @Input() contactNumber = '';
  @Input() availability = '';
  constructor() {}

  ngOnInit(): void {}
}
