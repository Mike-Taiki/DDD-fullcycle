import { Product } from "../../product";
import { RepositoryInterface } from "../../@shared/repository/repository-interface";

export interface ProductRepositoryInterface
  extends RepositoryInterface<Product> {}
