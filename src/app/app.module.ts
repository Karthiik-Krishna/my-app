import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { AuthComponent } from './auth/auth.component';
//import { LoginComponent } from './login/login.component';
//import { SignupComponent } from './signup/signup.component';
//import { CustomerComponent } from './customer/customer.component';
import { CatalogComponent } from './catalog/catalog.component';
import { CatalogItemComponent } from './catalog-item/catalog-item.component';
import { CatalogItemsComponent } from './catalog-items/catalog-items.component';
import { CatalogViewComponent } from './catalog-view/catalog-view.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    //AuthComponent,
    //LoginComponent,
    //SignupComponent,
    //CustomerComponent,
    CatalogComponent,
    CatalogItemComponent,
    CatalogItemsComponent,
    CatalogViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
