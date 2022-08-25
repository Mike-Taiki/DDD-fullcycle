import { Product } from "../../domain/entity";
import { ProductRepository } from "../../infrastructure/repository/product.repository";

export const productRepository = new ProductRepository();

export async function createProduct(
  id: string,
  name: string,
  price: number
): Promise<Product> {
  const product = new Product(id, name, price);

  await productRepository.create(product);
  return product;
}
