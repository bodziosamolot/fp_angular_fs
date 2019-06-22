import { Component, OnInit, OnDestroy } from '@angular/core';
import { map } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { ProductsService } from 'src/app/shared/products.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit, OnDestroy {

  public productForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl('', Validators.required),
    description: new FormControl(''),
    price: new FormControl(''),
    category: new FormControl(''),
    imageAddress: new FormControl(''),
    isActive: new FormControl(''),
    created: new FormControl(''),
  });

  public submitted = false;
  public productDetails$: Observable<any>;
  private productSubscription: Subscription;

  constructor(public activatedRoute: ActivatedRoute, private productService: ProductsService, private router: Router) { }

  ngOnInit() {
    this.productDetails$ = this.activatedRoute.paramMap
      .pipe(
        map(() => window.history.state)
      )

    this.productSubscription = this.productDetails$.subscribe(product => {
      this.productForm.controls['id'].setValue(product.id);
      this.productForm.controls['name'].setValue(product.name);
      this.productForm.controls['description'].setValue(product.description);
      this.productForm.controls['price'].setValue(product.price);
      this.productForm.controls['category'].setValue(product.category);
      this.productForm.controls['imageAddress'].setValue(product.imageAddress);
      this.productForm.controls['isActive'].setValue(product.isActive);
      this.productForm.controls['created'].setValue(product.created);
    })
  }

  ngOnDestroy() {
    this.productSubscription.unsubscribe();
  }

  onSubmit() {
    if (this.productForm.controls['id'].value) {
      this.productService.updateProduct$({
        id: this.productForm.controls['id'].value,
        name: this.productForm.controls['name'].value,
        description: this.productForm.controls['description'].value,
        price: this.productForm.controls['price'].value,
        category: this.productForm.controls['category'].value,
        imageAddress: this.productForm.controls['imageAddress'].value,
        isActive: this.productForm.controls['isActive'].value,
        created: this.productForm.controls['created'].value
      }).subscribe(x => {
        console.log(x);
        this.router.navigate(['/products']);
      })
    } else {
      this.productService.addProduct$({
        id: null, 
        name: this.productForm.controls['name'].value,
        description: this.productForm.controls['description'].value,
        price: this.productForm.controls['price'].value,
        category: this.productForm.controls['category'].value,
        imageAddress: this.productForm.controls['imageAddress'].value,
        isActive: this.productForm.controls['isActive'].value,
        created: this.productForm.controls['created'].value
      }).subscribe(x => {
        console.log(x);
        this.router.navigate(['/products']);
      })
    }
  }
}
