import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { AccountComponent } from './account/account.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CartComponent } from './cart/cart.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { AddressComponent } from './address/address.component';
import { ViewComponent } from './view/view.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { OderCompleteComponent } from './oder-complete/oder-complete.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AdminComponent } from './backpage/admin/admin.component';
import { AccountTableComponent } from './backpage/account-table/account.table.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminSidebarComponent } from './backpage/admin-sidebar/admin-sidebar.component';
import { AdminHeaderComponent } from './backpage/admin-header/admin-header.component';

import { CategoryTableComponent } from './backpage/category-table/category-table.component';
import { AdminNavbarComponent } from './backpage/admin-navbar/admin-navbar.component';
import { AdminMainContentComponent } from './backpage/admin-main-content/admin-main-content.component';
import { AdminFooterComponent } from './backpage/admin-footer/admin-footer.component';
import { AdminProductModalComponent } from './backpage/admin-product-modal/admin-product-modal.component';
import { AdminProductTableComponent } from './backpage/admin-product-table/admin-product-table.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ShopComponent,
    AccountComponent,
    LoginComponent,
    RegisterComponent,
    CartComponent,
    WishlistComponent,
    AddressComponent,
    ViewComponent,
    ChangepasswordComponent,
    OderCompleteComponent,
    CheckoutComponent,
    AdminComponent,
    AccountTableComponent,
    AdminSidebarComponent,
    AdminHeaderComponent,
    CategoryTableComponent,
    AdminNavbarComponent,
    AdminMainContentComponent,
    AdminFooterComponent,
    AdminProductModalComponent,
    AdminProductTableComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
