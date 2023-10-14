import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { AccountComponent } from './account/account.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CartComponent } from './cart/cart.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { AddressComponent } from './address/address.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OderCompleteComponent } from './oder-complete/oder-complete.component';
import { ViewComponent } from './view/view.component';
import { AdminSidebarComponent } from './backpage/admin-sidebar/admin-sidebar.component';
import { AdminHeaderComponent } from './backpage/admin-header/admin-header.component';
import { CategoryTableComponent } from './backpage/category-table/category-table.component';
import { AccountTableComponent } from './backpage/account-table/account.table.component';
import { AdminNavbarComponent } from './backpage/admin-navbar/admin-navbar.component';
import { AdminMainContentComponent } from './backpage/admin-main-content/admin-main-content.component';
import { AdminComponent } from './backpage/admin/admin.component';
import { AdminProductTableComponent } from './backpage/admin-product-table/admin-product-table.component';
import { AdminProductModalComponent } from './backpage/admin-product-modal/admin-product-modal.component';


const routes: Routes = [
  { path:'', component:HomeComponent},
  { path:'home', component:HomeComponent},
  { path:'view/:id', component: ViewComponent},
  { path:'shop', component:ShopComponent},
  { path:'account', component:AccountComponent},
  { path:'login', component:LoginComponent},
  { path:'register', component:RegisterComponent},
  { path:'cart', component:CartComponent},
  { path:'wishlist', component:WishlistComponent},
  { path:'address', component: AddressComponent},
  { path:'changepassword', component: ChangepasswordComponent},
  { path:'checkout', component: CheckoutComponent},
  { path:'oder-complete', component: OderCompleteComponent},

  { path:'admin-sidebar', component: AdminSidebarComponent},
  { path:'admin-header', component: AdminHeaderComponent},

  { path:'admin-category-table', component: CategoryTableComponent},
  { path:'account-table', component: AccountTableComponent},
  { path:'admin-navbar', component: AdminNavbarComponent},
  { path:'admin-main-content', component: AdminMainContentComponent},
  { path: 'admin', component: AdminComponent},
  { path: 'admin-products-modal', component: AdminProductModalComponent},
  { path: 'admin-products-table', component: AdminProductTableComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
