import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ResourcesComponent } from "./components/resources.component";

export const routes: Routes = [{ path: "", component: ResourcesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResourcesRoutesModule {}
