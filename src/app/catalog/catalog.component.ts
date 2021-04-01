import { Component, OnInit } from '@angular/core';
import { Catalog } from '../../catalog'
import { CatalogService } from '../catalog.service'

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  catalogSelected: Catalog;
  isChecked:boolean = false;
  currentIndex: number;
  slideActive:boolean;
  slideDuration = 1000;
  slideTimer = null;
  slideIndex = 0;
  catalogs: Array<Catalog> = [
    {
      thumb: '/assets/images/thumb/tea-light-thumb.jpeg',
      image: '/assets/images/tea-light.jpeg'
    },
    {
      thumb: '/assets/images/thumb/white-light-thumb.jpeg',
      image: '/assets/images/white-light.jpeg',
    },
    {
      thumb: '/assets/images/thumb/pink-light-thumb.jpeg',
      image: '/assets/images/pink-light.jpeg',
    },
    {
      thumb: '/assets/images/thumb/tea-light-thumb.jpeg',
      image: '/assets/images/tea-light.jpeg',
    }
  ];

  constructor(private ser :CatalogService ) { 

  }

  ngOnInit() {
    this.currentIndex = 0
    this.catalogSelected = this.catalogs[0]   
  }

  selectedCatalog(index: number) {
    this.currentIndex = index
    this.catalogSelected = this.catalogs[index]    
  }

  previousClick() {
    if(this.currentIndex == 0){
      this.currentIndex = this.catalogs.length-1
      this.catalogSelected = this.catalogs[this.catalogs.length-1]
      //console.log(this.currentIndex) 
    }
    else{
      this.currentIndex-=1
      this.catalogSelected = this.catalogs[this.currentIndex]
      //console.log(this.currentIndex) 
    }    
  }

  nextClick() {
    if(this.currentIndex == this.catalogs.length-1){
      this.currentIndex = 0
      this.catalogSelected = this.catalogs[0]
      //console.log(this.currentIndex) 
    }
    else{
      this.currentIndex+=1
      this.catalogSelected = this.catalogs[this.currentIndex]
      //console.log(this.currentIndex) 
    }        
  }

  slideChange(event) {
    var timer = setInterval(()=>{
      if(event.target.checked){
        //this.ser.setChecked(true)
        //this.slideActive = true
        //console.log(this.slideActive)
        this.nextClick()
      }
      else{
        clearInterval(timer)
        //this.ser.setChecked(false)
        //this.slideActive = false
        //console.log(this.slideActive)
      }      
    },this.slideDuration)
  }
  resetSlideTimer() {
    
  }

  onSlideChange = function() {
    
  }
}
