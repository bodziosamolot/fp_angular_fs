import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/shared/products.service';

@Component({
  selector: 'app-product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.scss']
})
export class ProductListItemComponent implements OnInit {

  @Input() product: Product;
  @Output() productRemoved = new EventEmitter<string>();

  constructor(private _productService: ProductsService) { }

  ngOnInit() {
  }

  async deleteProduct()
  {
    await this._productService.deleteProduct$(this.product.id).toPromise()
    this.productRemoved.emit(this.product.id);
  }
}
