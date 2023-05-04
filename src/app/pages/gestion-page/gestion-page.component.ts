import { ServiciosService } from './../../servicios.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-gestion-page',
  templateUrl: './gestion-page.component.html',
  styleUrls: ['./gestion-page.component.scss'],
})
export class GestionPageComponent {
  producto: any = {
    name: '',
    price: '',
    description: '',
    image: '',
    stars: '',
  };

  datos: any;
  id: any;
  name: any = '';
  price: any;
  description: any;
  image: any;
  stars: any;
  nombre: any;

  estrellas: any;

  constructor(private ServiciosService: ServiciosService) {}

  calcularEstrellas(stars: number) {
    let starRating = '';
    for (let i = 0; i < stars; i++) {
      starRating += '★';
    }
    return starRating;
  }

  crearPoducto() {
    if (
      !this.producto.name ||
      !this.producto.price ||
      !this.producto.description ||
      !this.producto.image ||
      !this.producto.stars
    ) {
      alert('Por favor completa todos los campos');
      return;
    }
      this.ServiciosService.postProductos(this.producto).subscribe(() => {
        console.log('Producto creado correctamente');
      });
    location.reload();
  }

  modificarPoducto() {
    if (
      !this.producto.name ||
      !this.producto.price ||
      !this.producto.description ||
      !this.producto.image ||
      !this.producto.stars
    ) {
      alert('Por favor completa todos los campos para modificar el producto');
      return;
    }
    if (this.id !== undefined && this.id !== null) {
      const productoModificado = {
        id: this.id,
        name: this.name,
        price: this.price,
        description: this.description,
        image: this.image,
        stars: this.stars,
      };

      this.ServiciosService.putProductos(this.id, productoModificado).subscribe(
        () => {
          alert('Producto modificado correctamente');
        }
      );
    }
    location.reload();
  }

  findProduct() {
    this.ServiciosService.getNameProductos(this.nombre).subscribe(
      (data: any) => {
        if (data) {
          this.producto = data;
          this.id = this.producto.id;
          this.name = this.producto.name;
          this.price = this.producto.price;
          this.description = this.producto.description;
          this.image = this.producto.image;
          this.stars = this.producto.stars;
        } else {
          (error: any) => {
            console.log(error);
          };
        }
        console.log(data);

        this.stars = this.calcularEstrellas(this.producto.stars);
      }
    );
  }
}
