import { TestBed } from '@angular/core/testing';

import { MenuService } from './menu.service';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
describe('MenuService', () => {
  let service: MenuService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MenuService],
      imports: [HttpClientTestingModule]
    });
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(MenuService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('returned Observable should match the right data', () => {
    const mockMenuOptions = [
      {
        name: 'TUS PRODUCTOS',
        type: 'old',
        active: true
      },
      {
        name: 'TU ORGANIZADOR',
        type: 'new',
        active: false
      }
    ];

    service.getMenu()
      .subscribe(products => {
        expect(products[0].name).toEqual('TUS PRODUCTOS');
        expect(products[0].active).toBeTruthy();
        expect(products[1].type).toEqual('new');
        expect(products[1].active).toBeFalsy();
      });

    const req = httpTestingController.expectOne(
      'http://localhost:3000/menu'
    );

    req.flush(mockMenuOptions);
  });
});
