import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../model/product.model';
import { ProductRepository } from '../model/product.repository';

@Component({
  templateUrl: 'productEditor.component.html'
})
export class ProductEditorComponent {
  editing: boolean = false;
  product: Product = new Product();

  /**
   Angular will provide an ActivatedRoute object as a constructor argument when it creates a new instance of the component class and that
   can be used to inspect the activated route. In this case, the component works out whether it should be editing or creating a product and,
   if editing, retrieves the current details from the repository. There is also a save method, which uses the repository to save changes that the user has made.
   **/
  constructor(private repository: ProductRepository,
              private router: Router,
              activeRoute: ActivatedRoute) {
    this.editing = activeRoute.snapshot.params['mode'] == 'edit';
    if (this.editing) {
      Object.assign(this.product,
        repository.getProduct(activeRoute.snapshot.params['id']));
    }
  }

  save(form: NgForm) {
    this.repository.saveProduct(this.product);
    this.router.navigateByUrl('/admin/main/products');
  }
}
