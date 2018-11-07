import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProductDetailPage } from "./pages/product-detail/product-detail.page";
import { ProductListPage } from "./pages/product-list/product-list.page";

const productRoutes: Routes = [
  { path: "", component: ProductListPage },
  { path: ":id", component: ProductDetailPage }
];

@NgModule({
  imports: [RouterModule.forChild(productRoutes)],
  exports: [RouterModule]
})
export class StoreRoutingModule {}
