import { Component, OnInit } from '@angular/core';
import { OpacityAnimation } from 'src/app/Models/opacity-animation';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css'],
  animations : [ OpacityAnimation ]
})
export class TopMenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
