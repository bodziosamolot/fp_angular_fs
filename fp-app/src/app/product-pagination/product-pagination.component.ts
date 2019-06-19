import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-pagination',
  templateUrl: './product-pagination.component.html',
  styleUrls: ['./product-pagination.component.scss']
})
export class ProductPaginationComponent implements OnInit {

  pageNumbers = [];
  pages;
  @Input() initialPage;
  @Input()
  set totalPages(pages) {
    this.pages = pages;
    for (let i = 1; i <= pages; i++) {
      this.pageNumbers.push(i)
    }
  };
  @Output() pageChange = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }

}
