import { Component, Input, OnInit } from '@angular/core';
import { Catalog } from 'src/catalog';
import { CatalogService } from '../catalog.service';

@Component({
  selector: 'app-catalog-item',
  templateUrl: './catalog-item.component.html',
  styleUrls: ['./catalog-item.component.css']
})
export class CatalogItemComponent implements OnInit {

  @Input() catalog: Catalog;
  @Input() check:number;
  slideChecked:boolean;
  constructor(private ser:CatalogService) { }

  ngOnInit() {
    this.slideChecked=this.ser.checked
  }

}
