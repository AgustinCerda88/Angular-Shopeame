import { ServiciosService } from './../../servicios.service';
import { AfterViewChecked, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent implements OnInit, AfterViewChecked {
  
  productsss!: any;
  datos: any;
  datosFiltrados: any[] = []
  dataBase: any;
  numeroProductos: number = 0;
  filter: any;
  public numeroElementos: number = 0;
  public viewChecked: boolean = false;

  constructor(private serviciosService: ServiciosService) { }

  ngOnInit(): void {
    this.serviciosService.getProductos().subscribe((res: any) => {
      this.productsss = res;
      this.datos = res;
      this.dataBase = res;
      this.filtername();
      console.log(res);

      setTimeout(() => {
        const elementos = document.querySelectorAll('.elemento');
        this.numeroElementos = elementos.length;
        console.log('numero de elementos', this.numeroElementos);
      });
    });
  }

  ngAfterViewChecked() {
    if (!this.viewChecked) {
      this.viewChecked = true;
      const elementos = document.querySelectorAll('.elemento'); // Cambia '.elemento' por el selector que corresponda a tus elementos
      this.numeroElementos = elementos.length;
      console.log('numero de elementos', this.numeroElementos);
    }
  }

  filtername() {
    if (!this.filter) { // Verifica si this.filter es undefined
      this.datos = this.dataBase;
    } else {
      this.datos = this.dataBase.filter((producto: any) => {
        return producto.name.toLowerCase().includes(this.filter.toLowerCase());
      });
    }
    this.numeroProductos = this.datos.length;
  }
}