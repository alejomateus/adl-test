import { Component, OnInit } from '@angular/core';
import { User } from './models/toolbar';

@Component({
  selector: 'toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  public userData: User;
  constructor(
  ) { }

  ngOnInit(): void {
    this.userData = {
      name: "Alejandro"
    }
  }
}
