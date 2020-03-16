import { Component, OnInit, Inject, Input } from '@angular/core';
import { Products } from '@dashboard/models/products';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent {
  @Input() product:Products;

  constructor(public activeModal: NgbActiveModal) { }

}
