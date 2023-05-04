import { Producto } from './components/models/products.models';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {


  constructor(private http: HttpClient) { }

   
  getProductos (){
    return this.http.get("http://localhost:3000/products")
  }


  postProductos(newProduct: Producto){
    return this.http.post<Producto>("http://localhost:3000/products", newProduct)
  }

  deleteProductos(id:number){
    return this.http.delete<Producto>("http://localhost:3000/products/"+id).subscribe()
  }

  putProductos(id:any, modify: Producto){
    return this.http.put(`http://localhost:3000/products/${id}`, modify)
  }
  
  getNameProductos(name: any) {
    return this.http.get<Object[]>('http://localhost:3000/products/').pipe(
      map((producto: Object[])=>{
        return producto.find((p:any) => p.name === name)
      })
    )
  }
}
