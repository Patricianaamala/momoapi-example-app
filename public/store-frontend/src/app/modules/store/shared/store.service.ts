import { Observable, of, throwError as observableThrowError } from "rxjs";
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AppConfig } from "../../../config/app.config";
import { catchError, tap } from "rxjs/operators";
import { MatSnackBar, MatSnackBarConfig } from "@angular/material";
import { TranslateService } from "@ngx-translate/core";
import { _ } from "@biesbjerg/ngx-translate-extract/dist/utils/utils";
import { LoggerService } from "../../../core/services/logger.service";
import { Product } from "./product.model";

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};

@Injectable()
export class StoreService {
  productsUrl: string;

  constructor(
    private http: HttpClient,
    private translateService: TranslateService,
    private snackBar: MatSnackBar
  ) {
    this.productsUrl = AppConfig.endpoints.products;
  }

  private static handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      LoggerService.log(`${operation} failed: ${error.message}`);

      if (error.status >= 500) {
        throw error;
      }

      return of(result as T);
    };
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl).pipe(
      tap(() => LoggerService.log(`fetched products`)),
      catchError(StoreService.handleError("getProducts", []))
    );
  }

  buy(product: Product): Observable<Product> {
    return;
  }

  getHeroById(id: string): Observable<Product | {}> {
    return this.http.get<Product>(`${this.productsUrl}/${id}`).pipe(
      tap(() => LoggerService.log(`fetched products`)),
      catchError(StoreService.handleError("getProducts", {}))
    );
  }
}
