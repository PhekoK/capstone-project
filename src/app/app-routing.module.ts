import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductComponent } from './product/product.component';
import { ProductsComponent } from './products/products.component';
import { RegisterComponent } from './register/register.component';
import { AuthService } from './services/auth.service';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UsersComponent } from './users/users.component';
import { WishlistComponent } from './wishlist/wishlist.component';

const routes: Routes = [
  { path: '', redirectTo: 'product', pathMatch: 'full'},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { 
    path: 'admin-dashboard', component: AdminDashboardComponent, children: [
         { path: '', redirectTo: 'users', pathMatch: 'full' },
         { path: 'users', component: UsersComponent },
         { path: 'products', component: ProductsComponent }
     ]
  },
  { path: 'product', component: ProductComponent },
  { path: 'shopping-cart/:id', component: ShoppingCartComponent },
  { path: 'shopping-cart', component: ShoppingCartComponent },
  { path: 'checkout', component: CheckoutComponent , canActivate: [AuthService] },
  { path: 'add-user', component: AddUserComponent },
  { path: 'update-user/:id', component: UpdateUserComponent },
  { path: 'product-add', component: ProductAddComponent },
  { path: 'wishlist', component: WishlistComponent },
  { path: 'product-detail/:id', component: ProductDetailComponent },
  { path: 'update-product/:id', component: UpdateProductComponent },
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
