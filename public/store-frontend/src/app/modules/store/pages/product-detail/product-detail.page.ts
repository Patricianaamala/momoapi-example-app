import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Location } from "@angular/common";
import { AppConfig } from "../../../../config/app.config";
import { Product } from "../../shared/product.model";
import { StoreService } from "../../shared/store.service";

@Component({
  selector: "app-product-detail",
  templateUrl: "./product-detail.page.html",
  styleUrls: ["./product-detail.page.scss"]
})
export class ProductDetailPage implements OnInit {
  hero: Product;
  canVote: boolean;

  constructor(
    private heroService: StoreService,
    private location: Location,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    const heroId = this.activatedRoute.snapshot.paramMap.get("id");
    this.heroService.getHeroById(heroId).subscribe((hero: Product) => {
      this.hero = hero;
    });
  }

  dynamicImport() {
    import("html2canvas").then((html2canvas: any) => {
      html2canvas
        .default(document.getElementById("heroe-detail"))
        .then(canvas => {
          window
            .open()
            .document.write('<img src="' + canvas.toDataURL() + '" />');
        });
    });
  }

  goBack(): void {
    this.location.back();
  }

  goToTheAnchor(): void {
    this.router.navigate([`/${AppConfig.routes.heroes}/${this.hero.id}`], {
      fragment: "heroe-detail"
    });
  }
}
