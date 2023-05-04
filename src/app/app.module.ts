import { FormsModule } from '@angular/forms';
import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesComponent } from './pages/pages.component';
import { GestionPageComponent } from './pages/gestion-page/gestion-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { ComponentsComponent } from './components/components.component';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './components/footer/footer.component';
import { ProductsComponent } from './components/products/products.component';
import { FiltroProdPipe } from './filtro-prod.pipe';



@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    GestionPageComponent,
    HomePageComponent,
    ProductsPageComponent,
    ComponentsComponent,
    HeaderComponent,
    FooterComponent,
    ProductsComponent,
    FiltroProdPipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
