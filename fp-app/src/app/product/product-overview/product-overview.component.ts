import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-overview',
  templateUrl: './product-overview.component.html',
  styleUrls: ['./product-overview.component.scss']
})
export class ProductOverviewComponent implements OnInit {

  @Input() name: string;
  @Input() category: string;
  @Input() description: string;
  @Input() imageURL: string;

  constructor() { }

  ngOnInit() {
  }

}
