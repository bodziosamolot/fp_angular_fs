import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  public productDetails$: Observable<any>;
  public showDescription: boolean = true;
  public state$: Observable<object>;

  constructor(public activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.productDetails$ = this.activatedRoute.paramMap
      .pipe(
        map(() => window.history.state)
      )
  }

  toggleDescription() {
    this.showDescription = !this.showDescription;
  }

}
