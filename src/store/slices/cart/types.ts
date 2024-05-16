import { ProductInList } from "../../beekneesApi";

export type ProductInCart = ProductInList & { count: number, id: NonNullable<ProductInList['id']> };
