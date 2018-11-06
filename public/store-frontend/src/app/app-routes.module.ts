import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";

export const routes: Routes = [
  //{ path: "", redirectTo: "/results", pathMatch: "full" },

  //{ path: "surveys", redirectTo: "/surveys", pathMatch: "full" },
  {
    path: "",
    //loadChildren: "./indicators/indicators.module#IndicatorsModule",
    //data: { preload: true },
    children: [
      {
        path: "resources",
        loadChildren: "./resources/resources.module#ResourcesModule"
      },
      {
        path: "results",
        loadChildren: "./results/results.module#ResultsModule",
        data: { preload: true }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutesModule {}
