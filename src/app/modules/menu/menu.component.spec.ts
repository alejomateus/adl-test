import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { of } from 'rxjs';

import { MenuComponent } from './menu.component';
import { MenuOptions } from './models/menu';
import { MenuService } from './services/menu.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';


describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;
  let menuService: MenuService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MenuComponent],
      providers: [
        HttpClient,
        HttpHandler,
        MenuService,
      ],
      imports: [
        HttpClientTestingModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(inject([MenuService], s => {
    menuService = s;
    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should call getUsers and return list of users', async(() => {
    const response: MenuOptions[] = [];
    spyOn(menuService, 'getMenu').and.returnValue(of(response));
    component.ngOnInit();
    fixture.detectChanges();
    expect(component.options).toEqual(response);
  }));
});
