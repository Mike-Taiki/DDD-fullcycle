import { Product } from "../entity";

export class ProductService {
  constructor() {}

  public static increasePrice(products: Product[], percent: number): void {
    products.forEach((product) => {
      product.changePrice(product.price * (1 + percent / 100));
    });
  }
}
