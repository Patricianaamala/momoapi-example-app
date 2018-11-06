import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import {
  MatCheckboxModule,
  MatProgressBarModule,
  MatButtonToggleModule,
  MatSlideToggleModule
} from "@angular/material";
import {
  MAT_LABEL_GLOBAL_OPTIONS,
  MatNativeDateModule
} from "@angular/material/core";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";
import { MatRadioModule } from "@angular/material/radio";
import { MatSelectModule } from "@angular/material/select";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatTabsModule } from "@angular/material/tabs";

import { MatToolbarModule, MatProgressSpinnerModule } from "@angular/material";

import { CustomErrorStateMatcherDirective } from "./error-state-matcher";
import { MatListOptionFixDirective } from "./mat-list-option-fix";
import { NgrxMatSelectViewAdapter } from "./mat-select-view-adapter";
import { MatGridListModule } from "@angular/material/grid-list";
import { ObserversModule } from "@angular/cdk/observers";
import { MatDialogModule } from "@angular/material/dialog";

@NgModule({
  imports: [
    MatInputModule,
    MatCheckboxModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatSlideToggleModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatTabsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatGridListModule,
    ObserversModule,
    MatDialogModule,
    MatProgressBarModule,
    MatProgressSpinnerModule
  ],
  declarations: [
    NgrxMatSelectViewAdapter,
    CustomErrorStateMatcherDirective,
    MatListOptionFixDirective
  ],
  exports: [
    MatInputModule,
    MatCheckboxModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatTabsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NgrxMatSelectViewAdapter,
    CustomErrorStateMatcherDirective,
    MatListOptionFixDirective,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatGridListModule,
    ObserversModule,
    MatDialogModule,
    MatProgressBarModule,
    MatButtonToggleModule,
    MatSlideToggleModule
  ],
  providers: [
    { provide: MAT_LABEL_GLOBAL_OPTIONS, useValue: { float: "always" } }
  ]
})
export class MaterialModule {}
