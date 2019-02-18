import { NgModule } from "@angular/core";
import { ProductRepository } from "./product.repository";
import { StaticDataSource } from "./static.datasource";
@NgModule({
  providers: [ProductRepository, StaticDataSource]
})

// providers tells Angular which classes should be used as services for the dependency injection feature
export class ModelModule { }
