import { Component, OnInit } from '@angular/core';
import { MenuOptions } from '@menu/models/menu';
import { ProductsService } from './services/products.service';
import { Products } from './models/products';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  options: Array<MenuOptions>;
  constructor(
    private productsServices: ProductsService,
  ) { }

  ngOnInit(): void {
    this.productsServices.getUsers().subscribe((res: Array<Products>) => {
      this.options = res;
    }, (err) => {
      console.log(err);
    });
  }
}
