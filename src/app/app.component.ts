import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'upay-covid';

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    console.log("data");
    this.dataService.getO2Cylinders().subscribe(console.log);
  }
}
