import {
  Component,
  OnInit,
  HostBinding,
  Input,
  ChangeDetectionStrategy
} from "@angular/core";

import { Product } from "../../shared/product.model";
import { ProductDetailPage } from "../product-detail/product-detail.page";
import { MatDialog } from "@angular/material";
import { Router } from "@angular/router";
import { AppConfig } from "../../../../config/app.config";

@Component({
  selector: "app-product-component",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent implements OnInit {
  @Input()
  product: Product;

  ngOnInit() {}

  constructor(private dialog: MatDialog, private router: Router) {}

  openDetails(): void {
    this.router.navigate([`/${AppConfig.routes.products}/${this.product.id}`]);
  }
}
