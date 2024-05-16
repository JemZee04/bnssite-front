import { ProductInList } from "../store/beekneesApi";

export type Size = NonNullable<ReturnType<NonNullable<ProductInList['sizes']>['at']>>;