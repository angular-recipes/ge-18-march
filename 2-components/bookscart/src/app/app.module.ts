import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { AddBookPageComponent } from './components/add-book-page/add-book-page.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { AddBookFormPageComponent } from './components/add-book-form-page/add-book-form-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutComponent,
    ContactComponent,
    BookDetailsComponent,
    AddBookPageComponent,
    ShoppingCartComponent,
    AddBookFormPageComponent
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
