import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectSelectionComponent } from './project-selection/project-selection.component';
import { GenderPredictionComponent } from './gender-prediction/gender-prediction.component';
import { DatesComponent } from './dates/dates.component';
import { BonusComponent } from './bonus/bonus.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'selection' },
  { path: 'selection', component: ProjectSelectionComponent },
  { path: 'dates', component: DatesComponent },
  { path: 'bonus', component: BonusComponent },
  { path: 'genderPredection', component: GenderPredictionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
