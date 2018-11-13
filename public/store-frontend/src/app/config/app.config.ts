import { InjectionToken } from "@angular/core";

import { IAppConfig } from "./iapp.config";

export let APP_CONFIG = new InjectionToken("app.config");

export const AppConfig: IAppConfig = {
  routes: {
    products: "products",
    error404: "404"
  },
  endpoints: {
    products: "http://127.0.0.1:5000/products"
  },
  snackBarDuration: 3000,
  repositoryURL: "https://github.com/sparkplug/momoapi-example-app"
};
