import { NgModule, Optional, SkipSelf } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { throwIfAlreadyLoaded } from "./module-import-guard";
import { SharedModule } from "../shared/shared.module";
import { RouterModule } from "@angular/router";
import { ProgressBarService } from "./services/progress-bar.service";
import { LoggerService } from "./services/logger.service";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { Error404Page } from "./pages/error404/error404.page";
import { StoreService } from "../modules/store/shared/store.service";

@NgModule({
  imports: [ReactiveFormsModule, RouterModule, SharedModule],
  declarations: [Error404Page, HeaderComponent, FooterComponent],
  exports: [HeaderComponent, FooterComponent],
  providers: [StoreService, LoggerService, ProgressBarService]
})
export class CoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CoreModule
  ) {
    throwIfAlreadyLoaded(parentModule, "CoreModule");
  }
}
