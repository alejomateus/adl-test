import { Component, OnInit, Input } from '@angular/core';
import { Products } from '@dashboard/models/products';
import { ProducDetailComponent } from './components/produc-detail/produc-detail.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() product: Products;
  @Input() showBank: boolean;
  constructor(
  ) {

  }
  getCardType(cardNumber: string): string {
    const re = new RegExp('^4');
    if (cardNumber.match(re) != null) {
      return 'Visa';
    }
    if (/^(5[1-5][0-9]{14}|2(22[1-9][0-9]{12}|2[3-9][0-9]{13}|[3-6][0-9]{14}|7[0-1][0-9]{13}|720[0-9]{12}))$/.test(cardNumber)) {
      return 'Mastercard';
    }
    return '';
  }
  calculatePercent(product: Products): string {
    const total = product.productAccountBalances.cupo_total.amount;
    const current = product.productAccountBalances.saldo_actual.amount;
    const totalSpent = total - current;
    const percent = `${(totalSpent / total) * 100}%`;
    return percent;
  }
  // showProductDetail(): void {

  // }
}

