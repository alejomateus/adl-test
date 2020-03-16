import { TestBed } from '@angular/core/testing';

import { ProductsService } from './products.service';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

describe('ProductsService', () => {
  let service: ProductsService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductsService],
      imports: [HttpClientTestingModule]
    });
    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(ProductsService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('returned Observable should match the right data', () => {
    const mockProducts = [
      {
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
      },
      {
        "accountInformation": {
          "accountIdentifier": "3000011501509",
          "productType": "CERTIFIED_DEPOSIT_TERM",
          "bank": "BANCO_4"
        },
        "locked": true,
        "id": "3000011501509",
        "typeAccount": "CERTIFIED_DEPOSIT_TERM",
        "openedDate": "2006-05-16T00:00:00",
        "closedDate": "2008-05-19T00:00:00",
        "dueDate": "2019-12-03T10:32:15.531",
        "lastTransactionDate": "2019-12-03T10:32:15.27",
        "term": {
          "count": 90,
          "units": "Days"
        },
        "periodicityOfPayment": {
          "count": 30,
          "units": "Days"
        },
        "productAccountBalances": {
          "saldo_pendiente_pago": {
            "amount": 270734
          },
          "tasa_nominal": {
            "amount": 0,
            "rate": 7.25
          },
          "interes_pagado": {
            "amount": 0
          },
          "valor_constitucion": {
            "amount": 5500000
          },
          "intereses_causados": {
            "amount": 33231
          },
          "retefuente": {
            "amount": 0
          }
        }
      },
    ];

    service.getProducts()
      .subscribe(products => {
        expect(products[0].typeAccount).toEqual('CERTIFIED_DEPOSIT_TERM');
        expect(products[0].locked).toEqual(true);
        expect(products[1].id).toEqual('3000011501509');
        expect(products[0].locked).toEqual(true);
      });

    const req = httpTestingController.expectOne(
      'http://localhost:3000/products'
    );

    req.flush(mockProducts);
  });
});
