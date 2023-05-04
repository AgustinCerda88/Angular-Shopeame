import { ServiciosService } from './../../servicios.service';
import { Producto } from './../models/products.models';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  @Input() product!: Producto;
  estrellas: any;

  constructor(private serviciosService: ServiciosService) { }

  ngOnInit() {
    this.estrellas = this.calcularEstrellas(this.product.stars);
  }

  calcularEstrellas(stars: number): string {
    let starRating = '';
    for (let i = 0; i < stars; i++) {
      starRating += '★';
    }
    return starRating;
  }

  eliminarProducto() {
    console.log(this.product.id);
    this.serviciosService.deleteProductos(this.product.id)
    location.reload();
  }

}