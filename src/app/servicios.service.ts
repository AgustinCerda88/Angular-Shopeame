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
    return this.http.get("https://back-shopeame.vercel.app/products")
  }


  postProductos(newProduct: Producto){
    return this.http.post<Producto>("https://back-shopeame.vercel.app/products", newProduct)
  }

  deleteProductos(id:number){
    return this.http.delete<Producto>("https://back-shopeame.vercel.app/products/"+id).subscribe()
  }

  putProductos(id:any, modify: Producto){
    return this.http.put(`https://back-shopeame.vercel.app/products/${id}`, modify)
  }
  
  getNameProductos(name: any) {
    return this.http.get<Object[]>('https://back-shopeame.vercel.app/products/').pipe(
      map((producto: Object[])=>{
        return producto.find((p:any) => p.name === name)
      })
    )
  }
}
