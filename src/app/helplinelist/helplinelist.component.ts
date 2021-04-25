import { Component, OnInit } from '@angular/core';
import { defaulHelpline, Helpline } from '../helpline/helpline.model';

@Component({
  selector: 'helpline-list',
  templateUrl: './helplinelist.component.html',
  styleUrls: ['./helplinelist.component.css'],
})
export class HelplinelistComponent implements OnInit {
  helplineList: Helpline[];

  constructor() {
    this.helplineList = this.getHelplines();
  }

  ngOnInit(): void {}

  getHelplines(): Helpline[] {
    return [
      {
        name: 'Srishti Hopital',
        contactNumber: 'xxxxxxxxxx',
        address: 'kasdgakjshgdjadgskjagshdkjasgdjhagsdjash',
        lastVerified: new Date(),
      },
      {
        name: 'NA',
        contactNumber: 'xxxxxxxxxx',
        address:
          'kasdgakjshgdjadgskjagshdkjasgdjhagsdjashaskdhalksjdhlakjsdhklajsdhkajsdhlkajsdhlkl',
        lastVerified: new Date(),
      },
      {
        name: 'NA',
        contactNumber: 'xxxxxxxxxx',
        address: 'NA',
        lastVerified: new Date(),
      },
      {
        name: 'NA',
        contactNumber: 'xxxxxxxxxx',
        address: 'NA',
        lastVerified: new Date(),
      },
    ];
  }
}
