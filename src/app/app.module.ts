import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './modules/angular-material.module';
import { FlexLayoutModule } from "@angular/flex-layout";
import { HttpClientModule, HTTP_INTERCEPTORS  } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ProjectSelectionComponent } from './project-selection/project-selection.component';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { GenderPredictionComponent } from './gender-prediction/gender-prediction.component';
import { DatesComponent } from './dates/dates.component';
import { BonusComponent } from './bonus/bonus.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectSelectionComponent,
    GenderPredictionComponent,
    DatesComponent,
    BonusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FlexLayoutModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgxDaterangepickerMd.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
