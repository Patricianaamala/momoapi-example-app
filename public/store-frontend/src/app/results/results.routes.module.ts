import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ResultsComponent } from "./components/results.component";

export const routes: Routes = [{ path: "", component: ResultsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResultsRoutesModule {}
