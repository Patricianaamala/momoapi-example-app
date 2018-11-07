import { InjectionToken } from "@angular/core";

import { IAppConfig } from "./iapp.config";

export let APP_CONFIG = new InjectionToken("app.config");

export const AppConfig: IAppConfig = {
  routes: {
    products: "products",
    error404: "404"
  },
  endpoints: {
    products: "https://nodejs-example-app.herokuapp.com/heroes"
  },
  snackBarDuration: 3000,
  repositoryURL: "https://github.com/ismaestro/angular6-example-app"
};
