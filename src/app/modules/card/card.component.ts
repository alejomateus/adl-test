import { Component, OnInit, Input } from '@angular/core';
import { Products } from '@dashboard/models/products';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() product: Products;
  @Input() showBank: boolean;
  closeResult: string;

  constructor(
    private modalService: NgbModal
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
  showProductDetail(): void {
    const modalRef = this.modalService.open(ProductDetailComponent);
    modalRef.componentInstance.product = this.product;
  }
}

