import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { UsersComponent } from './users/users.component';
import { ProductComponent } from './product/product.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { FormsModule } from '@angular/forms';
import { CheckoutComponent } from './checkout/checkout.component';
import { AddUserComponent } from './add-user/add-user.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { ProductsComponent } from './products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    RegisterComponent,
    LoginComponent,
    PageNotFoundComponent,
    AdminDashboardComponent,
    UsersComponent,
    ProductComponent,
    ShoppingCartComponent,
    CheckoutComponent,
    AddUserComponent,
    InvoiceComponent,
    UpdateUserComponent,
    ProductAddComponent,
    WishlistComponent,
    ProductDetailComponent,
    UpdateProductComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [DashboardComponent]
})
export class AppModule { }
