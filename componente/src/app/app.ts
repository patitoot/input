import { Component, signal } from '@angular/core';
import { Producto } from './interface/producto';
import { ProductoCard } from './components/producto-card/producto-card';
@Component({
  imports: [ProductoCard],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('componente');
    objeto: Producto[] = [
    {nombre: "gaseosa", precio: 3000, id: 1},
    {nombre: "milanesa", precio: 15000, id: 2},
    {nombre: "pan", precio: 2500, id: 3}
  ]
onEliminado(id: number): void{
  this.objeto = this.objeto.filter( p => p.id !== id)
}
}