import { Component, Input, OnInit } from '@angular/core';
import { Catalog } from 'src/catalog';

@Component({
  selector: 'app-catalog-view',
  templateUrl: './catalog-view.component.html',
  styleUrls: ['./catalog-view.component.css']
})
export class CatalogViewComponent implements OnInit {

  @Input() catalog: Catalog;

  constructor() { }

  ngOnInit(): void {
  }

}
