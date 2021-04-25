import { Component, OnInit } from '@angular/core';
import { defaulHelpline, Helpline } from '../helpline/helpline.model';

@Component({
  selector: 'helpline-list',
  templateUrl: './helplinelist.component.html',
  styleUrls: ['./helplinelist.component.css'],
})
export class HelplinelistComponent implements OnInit {
  helplineList: Helpline[] = [
    defaulHelpline,
    defaulHelpline,
    defaulHelpline,
    defaulHelpline,
    defaulHelpline,
    defaulHelpline,
  ];

  constructor() {}

  ngOnInit(): void {}
}
