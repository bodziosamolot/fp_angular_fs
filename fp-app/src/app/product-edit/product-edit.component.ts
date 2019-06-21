import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {

  public productDetails$: Observable<any>;


  constructor(public activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.productDetails$ = this.activatedRoute.paramMap
      .pipe(
        map(() => window.history.state)
      )
  }

}
