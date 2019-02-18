import { NgModule } from "@angular/core";
import { ProductRepository } from "./product.repository";
import { StaticDataSource } from "./static.datasource";
import { Cart } from "./cart.model";
@NgModule({
  providers: [ProductRepository, StaticDataSource, Cart]
})

// providers tells Angular which classes should be used as services for the dependency injection feature
export class ModelModule { }
