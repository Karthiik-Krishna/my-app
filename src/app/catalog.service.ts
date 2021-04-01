import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  constructor() { }

  public checked:boolean = false

  setChecked(val:boolean){
    this.checked = val    
  }
}
