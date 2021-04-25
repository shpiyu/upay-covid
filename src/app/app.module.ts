import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { GoogleSheetsDbService } from 'ng-google-sheets-db';
import { DataService } from './data.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelplineComponent } from './helpline/helpline.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { HelplinelistComponent } from './helplinelist/helplinelist.component';
import { HelplinedialogComponent } from './helplinedialog/helplinedialog.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    HelplineComponent,
    HelplinelistComponent,
    HelplinedialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    HttpClientModule,
    MatCardModule,
    MatGridListModule,
    MatDialogModule,
  ],
  providers: [GoogleSheetsDbService, DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
