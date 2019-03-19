import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { AddBookPageComponent } from './components/add-book-page/add-book-page.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'home', component: HomePageComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'add-book', component: AddBookPageComponent},
  {path: 'cart', component: ShoppingCartComponent},
  {path: 'book/:id', component: BookDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
