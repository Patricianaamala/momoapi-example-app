import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Location } from "@angular/common";
import { AppConfig } from "../../../../config/app.config";
import { Product } from "../../shared/product.model";
import { StoreService } from "../../shared/store.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-product-detail",
  templateUrl: "./product-detail.page.html",
  styleUrls: ["./product-detail.page.scss"]
})
export class ProductDetailPage implements OnInit {
  product: Product;
  canVote: boolean;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  isOptional = false;

  constructor(
    private storeService: StoreService,
    private location: Location,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private _formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    const pId = this.activatedRoute.snapshot.paramMap.get("id");
    this.storeService.getHeroById(pId).subscribe((product: Product) => {
      this.product = product;
    });

    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ["", Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ""
    });
  }

  goBack(): void {
    this.location.back();
  }
}
