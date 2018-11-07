import { Component, OnInit, ViewChild } from "@angular/core";

import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from "@angular/forms";
import { MatDialog } from "@angular/material";
import { Router } from "@angular/router";
import { LoggerService } from "../../../../core/services/logger.service";
import { AppConfig } from "../../../../config/app.config";
import { StoreService } from "../../shared/store.service";
import { Product } from "../../shared/product.model";
import { ObservableMedia } from "@angular/flex-layout";
import { of } from "rxjs";
import { distinctUntilChanged } from "rxjs/operators";
import { ProductComponent } from "../product/product.component";
import { ProductDetailPage } from "../product-detail/product-detail.page";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.page.html",
  styleUrls: ["./product-list.page.scss"]
})
export class ProductListPage implements OnInit {
  products: Product[];
  newHeroForm: FormGroup;
  canVote = false;
  error: string;
  product;
  @ViewChild("form")
  myNgForm; // just to call resetForm method

  breakpoints: { [size: string]: number } = {
    ["xs"]: 1,
    ["sm"]: 1,
    ["md"]: 2,
    ["lg"]: 3,
    ["xl"]: 3
  };
  public cols = of(2);

  constructor(
    private heroService: StoreService,
    private dialog: MatDialog,
    private router: Router,
    private formBuilder: FormBuilder,
    private observableMedia: ObservableMedia
  ) {
    this.newHeroForm = this.formBuilder.group({
      name: new FormControl("", [Validators.required]),
      alterEgo: new FormControl("", [Validators.required])
    });

    const _sub1 = this.observableMedia
      .asObservable()
      .pipe(distinctUntilChanged())
      .subscribe(x => {
        return (this.cols = of(this.breakpoints[x.mqAlias]));
      });
  }

  ngOnInit() {
    this.heroService.getProducts().subscribe((products: Array<Product>) => {
      this.products = products;
    });
  }

  seeHeroDetails(product): void {
    if (product.default) {
      this.router.navigate([AppConfig.routes.products + "/" + product.id]);
    }
  }
}
