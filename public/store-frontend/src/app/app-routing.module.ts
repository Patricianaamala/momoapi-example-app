import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppConfig } from "./config/app.config";
import { Error404Page } from "./core/pages/error404/error404.page";
import { ProductListPage } from "./modules/store/pages/product-list/product-list.page";

const routes: Routes = [
  { path: "", redirectTo: "/products", pathMatch: "full" },

  { path: AppConfig.routes.error404, component: Error404Page },
  {
    path: AppConfig.routes.products,
    loadChildren: "./modules/store/store.module#StoreModule"
  },

  // otherwise redirect to 404
  { path: "**", redirectTo: "/" + AppConfig.routes.error404 }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: "enabled",
      anchorScrolling: "enabled"
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
