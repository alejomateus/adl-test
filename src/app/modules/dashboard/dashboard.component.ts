import { Component, OnInit } from '@angular/core';
import { ProductsService } from './services/products.service';
import { Products, CountTypeAccount } from './models/products';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
  products: Array<Products>;
  productstoShow: Array<Products>;
  productsFiltered: Array<Products>;
  counttypeAccount: CountTypeAccount;
  productsAll = false;
  constructor(
    private productsServices: ProductsService,
  ) {
    this.counttypeAccount = {
      CERTIFIED_DEPOSIT_TERM: 0,
      CURRENT_ACCOUNT: 0,
      CREDIT: 0,
      CREDIT_CARD: 0
    };
  }

  ngOnInit(): void {
    this.productsServices.getProducts().subscribe((res: Array<Products>) => {
      this.products = res;
      this.products.forEach(product => {
        switch (product.typeAccount) {
          case 'CERTIFIED_DEPOSIT_TERM':
            this.counttypeAccount.CERTIFIED_DEPOSIT_TERM += 1;
            break;
          case 'CREDIT':
            this.counttypeAccount.CREDIT += 1;
            break;
          case 'CREDIT_CARD':
            this.counttypeAccount.CREDIT_CARD += 1;
            break;
          case 'CURRENT_ACCOUNT':
            this.counttypeAccount.CURRENT_ACCOUNT += 1;
            break;
        }
      });
      this.productsAll = false;
      this.productsFiltered = this.productstoShow = this.products.filter(
        (product) => product.accountInformation.bank === 'BANCO_1');
    }, (err) => {
      console.log(err);
    });
  }
  changeProducts(): void {
    this.productsAll = !this.productsAll;
    if (this.productsAll) {
      this.productstoShow = this.products;
    } else {
      this.productstoShow = this.productsFiltered;
    }
    this.orderProducts();
    console.log(this.productsAll);
  }
  orderProducts(): void {
    this.productstoShow.sort((a, b) => {
      if (a.accountInformation.bank > b.accountInformation.bank) {
        return 1;
      }
      if (a.accountInformation.bank < b.accountInformation.bank) {
        return -1;
      }
      return 0;
    });
  }
}
