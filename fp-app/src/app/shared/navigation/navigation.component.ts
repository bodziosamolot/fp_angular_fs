import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  links = [{ name: 'Home', url: "/" }, { name: 'Products', url: "/products" }, { name: 'Contact', url: "/contact" }];
  activeLink = this.links[0];
  background = '';

  constructor() { }

  ngOnInit() {
  }

}
