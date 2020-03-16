import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardComponent } from './card.component';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    component.product = {
      "accountInformation": {
        "accountIdentifier": "3001101234845",
        "productType": "CERTIFIED_DEPOSIT_TERM",
        "bank": "BANCO_3"
      },
      "locked": true,
      "id": "3001101234845",
      "typeAccount": "CERTIFIED_DEPOSIT_TERM",
      "openedDate": "2002-02-27T00:00:00",
      "closedDate": "2002-05-27T00:00:00",
      "dueDate": "2019-12-03T10:32:13.449",
      "lastTransactionDate": "2019-12-03T10:32:12.42",
      "term": {
        "count": 90,
        "units": "Days"
      },
      "periodicityOfPayment": {
        "count": 90,
        "units": "Days"
      },
      "productAccountBalances": {
        "saldo_pendiente_pago": {
          "amount": 0
        },
        "tasa_nominal": {
          "amount": 0,
          "rate": 13
        },
        "interes_pagado": {
          "amount": 0
        },
        "valor_constitucion": {
          "amount": 12500000
        },
        "intereses_causados": {
          "amount": 135417
        },
        "retefuente": {
          "amount": 0
        }
      }
    } 
    fixture.detectChanges();
  });

  it('should create', () => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
