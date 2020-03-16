import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailComponent } from './product-detail.component';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('ProducDetailComponent', () => {
  let component: ProductDetailComponent;
  let fixture: ComponentFixture<ProductDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductDetailComponent ],
      providers:[
        NgbActiveModal
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailComponent);
    component = fixture.componentInstance;
    component.product = {
      accountInformation: {
        accountIdentifier: '5201897302970640',
        productType: 'CREDIT_CARD',
        bank: 'BANCO_3'
      },
      locked: true,
      id: '5201897302970640',
      typeAccount: 'CREDIT_CARD',
      dueDate: '2019-12-05T00:00:00',
      productAccountBalances: {
        pago_total_pesos: {
          amount: 105968,
          currencyCode: 'COP'
        },
        cupo_disponible_avances_pesos: {
          amount: 24894032,
          currencyCode: 'COP'
        },
        saldo_mora_pesos: {
          amount: 5000,
          currencyCode: 'COP'
        },
        saldo_actual: {
          amount: 105968,
          currencyCode: 'COP'
        },
        cupo_disponible_compras_pesos: {
          amount: 24894032,
          currencyCode: 'COP'
        },
        valor_pago_minimo: {
          amount: 105968,
          currencyCode: 'COP'
        },
        cupo_total: {
          amount: 25000000,
          currencyCode: 'COP'
        }
      },
      capacity: 99.576128
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
