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
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatGridListModule } from '@angular/material/grid-list';
import { HelplinelistComponent } from './helplinelist/helplinelist.component';
import { FilterComponent } from './filter/filter.component';
import { HelplinedialogComponent } from './helplinedialog/helplinedialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
  declarations: [
    AppComponent,
    HelplineComponent,
    HelplinelistComponent,
    HelplinedialogComponent,
    FilterComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    HttpClientModule,
    MatCardModule,
    MatGridListModule,
    MatSelectModule,
    MatDialogModule,
    MatButtonModule,
    MatExpansionModule,
  ],
  providers: [GoogleSheetsDbService, DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
