import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';
import { ProductCardComponent } from '../ui/product-card/product-card.component';
import { Product } from '../../../interfaces/product.interface';
import { interval, take, tap } from 'rxjs';


@Component({
  selector: 'input-output',
  standalone: true,
  imports: [
    CommonModule, TitleComponent, ProductCardComponent,
  ],
  templateUrl: './input-output.component.html',

  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class InputOutputComponent {


  public products = signal<Product[]>([
    {
      id: 1,
      name: `Product 1`,
      quantity: 0,
    },
    {
      id: 2,
      name: `Product 2`,
      quantity: 1,
    },
  ])

  private intervalSubscription = interval(1000).pipe(
    tap(() => {
      this.products.update((products) => [
        ...products,
        {
          id: products.length +1,
          name: `Product ${products.length +1 }`,
          quantity: 0,
        },
      ]);
    }),
    take(7) // le dice a mi observable despues de siete emisiones que se limpie
  ).subscribe();

  ngOnDestroy(): void {
   this.intervalSubscription.unsubscribe();

  }

 public updateProduct(product: Product, newQuantity : number) {
      this.products.update((products) =>//actualizar los productos con el listado
        products.map((p) =>//barrer todos los productos
          // donde el p id con el producto que recibo como
          // argumento y si son iguales le hago una nueva catidad
         ( p.id === product.id ? { ...p, quanty: newQuantity} :p)

      )
      );
    }

 }
