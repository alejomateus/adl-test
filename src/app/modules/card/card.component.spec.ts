import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardComponent } from './card.component';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CardComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    component.product = {
      accountInformation: {
        accountIdentifier: '3001101234845',
        productType: 'CERTIFIED_DEPOSIT_TERM',
        bank: 'BANCO_3'
      },
      locked: true,
      id: '3001101234845',
      typeAccount: 'CERTIFIED_DEPOSIT_TERM',
      openedDate: '2002-02-27T00:00:00',
      closedDate: '2002-05-27T00:00:00',
      dueDate: '2019-12-03T10:32:13.449',
      lastTransactionDate: '2019-12-03T10:32:12.42',
      term: {
        count: 90,
        units: 'Days'
      },
      periodicityOfPayment: {
        count: 90,
        units: 'Days'
      },
      productAccountBalances: {
        saldo_pendiente_pago: {
          amount: 0
        },
        tasa_nominal: {
          amount: 0,
          rate: 13
        },
        interes_pagado: {
          amount: 0
        },
        valor_constitucion: {
          amount: 12500000
        },
        intereses_causados: {
          amount: 135417
        },
        retefuente: {
          amount: 0
        }
      }
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
  it('should validate productType', async(() => {
    component.getCardType('4544769920667610');
    fixture.detectChanges();
    expect(component.product).toBeTruthy();
  }));
  it('should validate productType', async(() => {
    component.getCardType('5201897302970640');
    fixture.detectChanges();
    expect(component.product).toBeTruthy();
  }));
  it('should validate calculatePercent', async(() => {
    const product = {
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
    component.calculatePercent(product);
    fixture.detectChanges();
    expect(component.product).toBeTruthy();
  }));
  it('should validate showProductDetail', async(() => {
    component.showProductDetail();
    fixture.detectChanges();
    expect(component.product).toBeTruthy();
  }));
});
