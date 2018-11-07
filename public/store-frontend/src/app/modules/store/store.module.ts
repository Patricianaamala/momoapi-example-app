import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { StoreRoutingModule } from "./store-routing.module";
import { SharedModule } from "../../shared/shared.module";

import { ProductDetailPage } from "./pages/product-detail/product-detail.page";
import { ProductListPage } from "./pages/product-list/product-list.page";
import { ProductComponent } from "./pages/product/product.component";

@NgModule({
  imports: [FormsModule, ReactiveFormsModule, SharedModule, StoreRoutingModule],
  declarations: [ProductListPage, ProductDetailPage, ProductComponent]
})
export class StoreModule {}
