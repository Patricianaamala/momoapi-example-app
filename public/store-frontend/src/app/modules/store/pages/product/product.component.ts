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

  constructor(private dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(ProductDetailPage, {
      width: "250px",
      data: { product: this.product }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("The dialog was closed");
      this.product = result;
    });
  }
}
