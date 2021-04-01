import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChange, SimpleChanges } from '@angular/core';
import { Catalog } from 'src/catalog';

@Component({
  selector: 'app-catalog-items',
  templateUrl: './catalog-items.component.html',
  styleUrls: ['./catalog-items.component.css']
})
export class CatalogItemsComponent implements OnInit {

  @Input() items: Array<Catalog> = [];
  @Input() currentIndex: number;
  @Input() slideActive:boolean;
  @Input() catalogReceived:Catalog;
  @Output() selectedCatalog: EventEmitter<number> = new EventEmitter<number>();
  constructor() {
    //console.log(this.slideActive)
   }

  ngOnInit() {
    console.log(this.slideActive)
  }

  onImageSelect(i) {
    this.selectedCatalog.emit(i)
  }

}
