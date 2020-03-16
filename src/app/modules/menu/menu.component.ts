import { Component, OnInit } from '@angular/core';
import { MenuOptions } from '@menu/models/menu';
import { MenuService } from '@menu/services/menu.service';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  options: Array<MenuOptions>;
  constructor(
    private menuService: MenuService,
  ) { }

  ngOnInit(): void {
    this.menuService.getMenu().subscribe((res: Array<MenuOptions>) => {
      this.options = res;
    }, (err) => {
      console.log(err);
    });
  }
}
