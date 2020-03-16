import { Component, OnInit, Input } from '@angular/core';
import { Products } from '@dashboard/models/products';
import { ProducDetailComponent } from './components/produc-detail/produc-detail.component';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent  {
  @Input() product: Products;
  @Input() showBank: boolean;
  constructor(
  ) {
    
   }

  // ngOnInit(): void {

  // }
  // showProductDetail(): void {

  // }
}

