import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { of } from 'rxjs';

import { DashboardComponent } from './dashboard.component';
import { Products } from './models/products';
import { ProductsService } from './services/products.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let productService: ProductsService;
  const products = [
    {
      "accountInformation": {
        "accountIdentifier": "110080000680",
        "productType": "CURRENT_ACCOUNT",
        "currencyCode": "COP",
        "bank": "BANCO_3"
      },
      "locked": true,
      "id": "110080000680",
      "typeAccount": "CURRENT_ACCOUNT",
      "status": "ACTIVE",
      "dueDate": "2019-12-03T10:32:31.192",
      "lastTransactionDate": "2019-12-03T10:32:30.3",
      "overDraftDays": 0,
      "productAccountBalances": {
        "saldo_canje": {
          "amount": 0
        },
        "cupo_aprobado_remesas": {
          "amount": 0
        },
        "cupos_aprobado_sobregiro": {
          "amount": 0
        },
        "saldo_disponible": {
          "amount": 240504.96
        },
        "cupo_disponible_sobregiro": {
          "amount": 0
        },
        "saldo_canje_48_horas": {
          "amount": 0
        },
        "saldo_canje_72_horas": {
          "amount": 0
        },
        "saldo_canje_24_horas": {
          "amount": 0
        },
        "saldo_ayer": {
          "amount": 240504.96
        },
        "saldo_actual": {
          "amount": 240504.96
        }
      }
    },
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
    {
      "accountInformation": {
        "accountIdentifier": "1315000180",
        "productType": "CREDIT",
        "bank": "BANCO_2"
      },
      "locked": true,
      "id": "1315000180",
      "typeAccount": "CREDIT"
    },
    {
      "accountInformation": {
        "accountIdentifier": "4544769920667610",
        "productType": "CREDIT_CARD",
        "bank": "BANCO_2"
      },
      "locked": true,
      "id": "4544769920667610",
      "typeAccount": "CREDIT_CARD",
      "dueDate": "2019-12-26T00:00:00",
      "productAccountBalances": {
        "pago_total_pesos": {
          "amount": -126012.54,
          "currencyCode": "COP"
        },
        "cupo_disponible_avances_pesos": {
          "amount": 35000000,
          "currencyCode": "COP"
        },
        "saldo_mora_pesos": {
          "amount": 0.38,
          "currencyCode": "COP"
        },
        "saldo_actual": {
          "amount": -126012.54,
          "currencyCode": "COP"
        },
        "cupo_disponible_compras_pesos": {
          "amount": 35000000,
          "currencyCode": "COP"
        },
        "valor_pago_minimo": {
          "amount": 0.38,
          "currencyCode": "COP"
        },
        "cupo_total": {
          "amount": 35000000,
          "currencyCode": "COP"
        }
      },
      "capacity": 100
    },
  ];
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardComponent],
      providers: [
        HttpClient,
        HttpHandler,
        ProductsService,
      ],
      imports: [
        HttpClientTestingModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(inject([ProductsService], s => {
    productService = s;
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it("should call getProducts and return list of products", async(() => {
    const response: Products[] = products;
    spyOn(productService, 'getProducts').and.returnValue(of(response))
    component.ngOnInit();
    fixture.detectChanges();
    expect(component.products).toEqual(response);
  }));

  it("should call getProducts and return list of products", async(() => {
    component.products = products;
    component.productsFiltered = products;
    component.productsAll = true;
    component.ngOnInit();
    component.changeProducts();
    fixture.detectChanges();
    expect(component.productsAll).toBeFalsy();
  }));
  it("should call getProducts and return list of products", async(() => {
    component.products = products;
    component.ngOnInit();
    component.changeProducts();
    fixture.detectChanges();
    expect(component.productsAll).toBeTruthy();
  }));
});
