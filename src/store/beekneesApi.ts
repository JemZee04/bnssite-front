import { emptySplitApi as api } from "./emptyApi";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    getHealthCheck: build.query<
      GetHealthCheckApiResponse,
      GetHealthCheckApiArg
    >({
      query: () => ({ url: `/health/check` }),
    }),
    getMainPage: build.query<GetMainPageApiResponse, GetMainPageApiArg>({
      query: () => ({ url: `/main-page` }),
    }),
    getCatalogPage: build.query<
      GetCatalogPageApiResponse,
      GetCatalogPageApiArg
    >({
      query: (queryArg) => ({
        url: `/catalog-page`,
        params: {
          gender: queryArg.gender,
          categories: queryArg.categories,
          sizes: queryArg.sizes,
          colors: queryArg.colors,
          shops: queryArg.shops,
          searchValue: queryArg.searchValue,
          sort: queryArg.sort,
          limit: queryArg.limit,
          offset: queryArg.offset,
        },
      }),
    }),
    getProductPageByProductId: build.query<
      GetProductPageByProductIdApiResponse,
      GetProductPageByProductIdApiArg
    >({
      query: (queryArg) => ({ url: `/product-page/${queryArg["product-id"]}` }),
    }),
    getShopPageByShopId: build.query<
      GetShopPageByShopIdApiResponse,
      GetShopPageByShopIdApiArg
    >({
      query: (queryArg) => ({ url: `/shop-page/${queryArg["shop-id"]}` }),
    }),
    postProductByProductIdUserAndUserIdAddToCart: build.mutation<
      PostProductByProductIdUserAndUserIdAddToCartApiResponse,
      PostProductByProductIdUserAndUserIdAddToCartApiArg
    >({
      query: (queryArg) => ({
        url: `/product/${queryArg["product-id"]}/user/${queryArg["user-id"]}/add-to-cart`,
        method: "POST",
      }),
    }),
    getUserByUserIdCart: build.query<
      GetUserByUserIdCartApiResponse,
      GetUserByUserIdCartApiArg
    >({
      query: (queryArg) => ({ url: `/user/${queryArg["user-id"]}/cart` }),
    }),
    postUserSignIn: build.mutation<
      PostUserSignInApiResponse,
      PostUserSignInApiArg
    >({
      query: (queryArg) => ({
        url: `/user/sign-in`,
        method: "POST",
        body: queryArg.body,
      }),
    }),
    postUserSignUp: build.mutation<
      PostUserSignUpApiResponse,
      PostUserSignUpApiArg
    >({
      query: (queryArg) => ({
        url: `/user/sign-up`,
        method: "POST",
        body: queryArg.userSignIn,
      }),
    }),
    postUserRefresh: build.mutation<
      PostUserRefreshApiResponse,
      PostUserRefreshApiArg
    >({
      query: (queryArg) => ({
        url: `/user/refresh`,
        method: "POST",
        body: queryArg.body,
      }),
    }),
    getProductByProductIdReviews: build.query<
      GetProductByProductIdReviewsApiResponse,
      GetProductByProductIdReviewsApiArg
    >({
      query: (queryArg) => ({
        url: `/product/${queryArg["product-id"]}/reviews`,
      }),
    }),
    getShopByShopIdReviews: build.query<
      GetShopByShopIdReviewsApiResponse,
      GetShopByShopIdReviewsApiArg
    >({
      query: (queryArg) => ({ url: `/shop/${queryArg["shop-id"]}/reviews` }),
    }),
    postUserByUserIdProductAndProductIdReviews: build.mutation<
      PostUserByUserIdProductAndProductIdReviewsApiResponse,
      PostUserByUserIdProductAndProductIdReviewsApiArg
    >({
      query: (queryArg) => ({
        url: `/user/${queryArg["user-id"]}/product/${queryArg["product-id"]}/reviews`,
        method: "POST",
        body: queryArg.saveReview,
      }),
    }),
    postShopSignUp: build.mutation<
      PostShopSignUpApiResponse,
      PostShopSignUpApiArg
    >({
      query: (queryArg) => ({
        url: `/shop/sign-up`,
        method: "POST",
        body: queryArg.body,
      }),
    }),
    postShopByShopIdProducts: build.mutation<
      PostShopByShopIdProductsApiResponse,
      PostShopByShopIdProductsApiArg
    >({
      query: (queryArg) => ({
        url: `/shop/${queryArg["shop-id"]}/products`,
        method: "POST",
        body: queryArg.body,
      }),
    }),
    postShopSignIn: build.mutation<
      PostShopSignInApiResponse,
      PostShopSignInApiArg
    >({
      query: (queryArg) => ({
        url: `/shop/sign-in`,
        method: "POST",
        body: queryArg.body,
      }),
    }),
    getUserOrdersUsersByUserId: build.query<
      GetUserOrdersUsersByUserIdApiResponse,
      GetUserOrdersUsersByUserIdApiArg
    >({
      query: (queryArg) => ({
        url: `/user/orders/users/${queryArg["user-id"]}`,
      }),
    }),
    postUserOrdersUsersByUserId: build.mutation<
      PostUserOrdersUsersByUserIdApiResponse,
      PostUserOrdersUsersByUserIdApiArg
    >({
      query: (queryArg) => ({
        url: `/user/orders/users/${queryArg["user-id"]}`,
        method: "POST",
        body: queryArg.createOrder,
      }),
    }),
    getUserOrdersShopsByShopId: build.query<
      GetUserOrdersShopsByShopIdApiResponse,
      GetUserOrdersShopsByShopIdApiArg
    >({
      query: (queryArg) => ({
        url: `/user/orders/shops/${queryArg["shop-id"]}`,
        params: { status: queryArg.status },
      }),
    }),
    patchUserOrdersByOrderIdStatus: build.mutation<
      PatchUserOrdersByOrderIdStatusApiResponse,
      PatchUserOrdersByOrderIdStatusApiArg
    >({
      query: (queryArg) => ({
        url: `/user/orders/${queryArg["order-id"]}/status`,
        method: "PATCH",
        body: queryArg.body,
      }),
    }),
    patchUserOrdersByOrderIdUsersAndUserIdReturn: build.mutation<
      PatchUserOrdersByOrderIdUsersAndUserIdReturnApiResponse,
      PatchUserOrdersByOrderIdUsersAndUserIdReturnApiArg
    >({
      query: (queryArg) => ({
        url: `/user/orders/${queryArg["order-id"]}/users/${queryArg["user-id"]}/return`,
        method: "PATCH",
        body: queryArg.body,
      }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as beekneesApi };
export type GetHealthCheckApiResponse =
  /** status 200 A successful response. */ ОбъектСИнформациейОРаботоспособностиСервиса;
export type GetHealthCheckApiArg = void;
export type GetMainPageApiResponse =
  /** status 200 Метод успешно отработал */ ГлавнаяСтраница;
export type GetMainPageApiArg = void;
export type GetCatalogPageApiResponse =
  /** status 200 Метод успешно отработал */ СтраницаКаталогаТоваров;
export type GetCatalogPageApiArg = {
  /** Значение для фильтрации по категориям */
  gender?: string;
  /** Значение для фильтрации по категориям */
  categories?: string[];
  /** Значение для фильтрации по размерам */
  sizes?: string[];
  /** Значение для фильтрации по цвету */
  colors?: string[];
  /** Значение для фильтрации по брендам/магазинам */
  shops?: string[];
  /** Значение для поиска */
  searchValue?: string;
  /** Значение для сортировки */
  sort: string;
  /** Значение для лимита */
  limit: number;
  /** Значение для смещения */
  offset: number;
};
export type GetProductPageByProductIdApiResponse =
  /** status 200 Метод успешно отработал */ СтраницаТовара;
export type GetProductPageByProductIdApiArg = {
  /** ID страницы */
  "product-id": Uuid;
};
export type GetShopPageByShopIdApiResponse =
  /** status 200 Метод успешно отработал */ СтраницаТовара2;
export type GetShopPageByShopIdApiArg = {
  /** ID страницы */
  "shop-id": Uuid;
};
export type PostProductByProductIdUserAndUserIdAddToCartApiResponse = unknown;
export type PostProductByProductIdUserAndUserIdAddToCartApiArg = {
  /** ID страницы */
  "product-id": Uuid;
  /** ID страницы */
  "user-id": Uuid;
};
export type GetUserByUserIdCartApiResponse =
  /** status 200 Метод успешно отработал */ Cart;
export type GetUserByUserIdCartApiArg = {
  /** ID страницы */
  "user-id": Uuid;
};
export type PostUserSignInApiResponse =
  /** status 200 Метод успешно отработал */ {
    accessToken?: string;
    refreshToken?: string;
    userProfile?: User;
  };
export type PostUserSignInApiArg = {
  /** Данные элемента страницы */
  body: {
    phone?: string;
    password?: string;
  };
};
export type PostUserSignUpApiResponse =
  /** status 200 Метод успешно отработал */ {
    accessToken?: string;
    refreshToken?: string;
    userProfile?: User;
  };
export type PostUserSignUpApiArg = {
  /** Данные элемента страницы */
  userSignIn: UserSignIn;
};
export type PostUserRefreshApiResponse =
  /** status 200 Метод успешно отработал */ {
    accessToken?: string;
    refreshToken?: string;
  };
export type PostUserRefreshApiArg = {
  /** Данные элемента страницы */
  body: {
    accessToken?: string;
    refreshToken?: string;
  };
};
export type GetProductByProductIdReviewsApiResponse =
  /** status 200 Метод успешно отработал */ Review[];
export type GetProductByProductIdReviewsApiArg = {
  /** ID страницы */
  "product-id": Uuid;
};
export type GetShopByShopIdReviewsApiResponse =
  /** status 200 Метод успешно отработал */ Review[];
export type GetShopByShopIdReviewsApiArg = {
  /** ID страницы */
  "shop-id": Uuid;
};
export type PostUserByUserIdProductAndProductIdReviewsApiResponse =
  /** status 201 Метод успешно отработал */ {
    /** Идентификатор отзыва */
    reviewId: string;
  };
export type PostUserByUserIdProductAndProductIdReviewsApiArg = {
  /** ID страницы */
  "user-id": Uuid;
  /** ID страницы */
  "product-id": Uuid;
  /** Данные элемента страницы */
  saveReview: SaveReview;
};
export type PostShopSignUpApiResponse =
  /** status 200 Метод успешно отработал */ {
    accessToken?: string;
    refreshToken?: string;
    shopProfile?: ShopProfile;
  };
export type PostShopSignUpApiArg = {
  /** Данные элемента страницы */
  body: {
    file?: Файл;
    shop?: ShopSave;
  };
};
export type PostShopByShopIdProductsApiResponse =
  /** status 200 Метод успешно отработал */ Product;
export type PostShopByShopIdProductsApiArg = {
  /** ID страницы */
  "shop-id": Uuid;
  /** Данные товара */
  body: {
    file?: Файл;
    product?: ProductSave;
  };
};
export type PostShopSignInApiResponse =
  /** status 200 Метод успешно отработал */ {
    accessToken?: string;
    refreshToken?: string;
    shopProfile?: ShopProfile;
  };
export type PostShopSignInApiArg = {
  /** Данные для авторизации */
  body: {
    phone?: string;
    password?: string;
  };
};
export type GetUserOrdersUsersByUserIdApiResponse =
  /** status 200 Successful response */ Order[];
export type GetUserOrdersUsersByUserIdApiArg = {
  /** ID of the user */
  "user-id": string;
};
export type PostUserOrdersUsersByUserIdApiResponse =
  /** status 201 Successful response */ Uuid;
export type PostUserOrdersUsersByUserIdApiArg = {
  /** ID of the user */
  "user-id": string;
  /** Order details */
  createOrder: CreateOrder;
};
export type GetUserOrdersShopsByShopIdApiResponse =
  /** status 200 Successful response */ Order[];
export type GetUserOrdersShopsByShopIdApiArg = {
  /** ID of the shop */
  "shop-id": string;
  /** Order status */
  status?: string;
};
export type PatchUserOrdersByOrderIdStatusApiResponse =
  /** status 200 Successful response */ void;
export type PatchUserOrdersByOrderIdStatusApiArg = {
  /** ID of the order */
  "order-id": string;
  /** Order status update */
  body: {
    status: string;
  };
};
export type PatchUserOrdersByOrderIdUsersAndUserIdReturnApiResponse =
  /** status 200 Successful response */ Order;
export type PatchUserOrdersByOrderIdUsersAndUserIdReturnApiArg = {
  /** ID of the order */
  "order-id": Uuid;
  /** ID of the user */
  "user-id": Uuid;
  /** Order status update */
  body: {
    productVariationIds?: Uuid[];
  };
};
export type ОбъектСИнформациейОРаботоспособностиСервиса = {
  status?: string;
};
export type ОбъектОшибки = {
  error?: string;
  code?: number;
  message?: string;
  debug?: string;
};
export type Uri = string;
export type MenuItem = {
  text?: string;
  url?: Uri;
  menuItems?: MenuItem[];
};
export type Uuid = string;
export type CategoriesProducts = {
  id?: Uuid;
  name?: string;
  subCategories?: CategoriesProducts[];
};
export type Sluggable = string;
export type ОбъектМедиа = {
  /** ID */
  id?: string;
  /** Название файла */
  name?: string;
  /** Название файла с форматом */
  filename?: string;
  /** Значение alt */
  alt?: string;
  /** Значение title */
  title?: string;
  /** Размер файла */
  size?: number;
  /** Путь к файлу */
  filepath?: string;
  /** Время создания */
  createdAt?: string;
  /** Время последнего обновления */
  updatedAt?: string;
  /** ID папки */
  folderId?: string;
};
export type ShopInList = {
  id?: Uuid;
  code?: Sluggable;
  name?: string;
  logo_image?: ОбъектМедиа;
};
export type Цвет = {
  id?: Uuid;
  name?: string;
  hex?: string;
};
export type Размер = {
  id?: Uuid;
  name?: string;
};
export type ProductInList = {
  id?: Uuid;
  name?: string;
  shop?: ShopInList;
  price?: number;
  colors?: Цвет[];
  sizes?: Размер[];
  images?: ОбъектМедиа[];
};
export type ГлавнаяСтраница = {
  headerMenu?: MenuItem[];
  categories?: CategoriesProducts[];
  shopList?: ShopInList[];
  saleProductList?: ProductInList[];
  popularProductList?: ProductInList[];
};
export type Error = {
  /** Код ошибки, к которому привел вызов метода
   */
  applicationErrorCode: string;
  /** Человекочитаемое сообщение об ошибке
   */
  message: string;
  /** Дополнительная отладочная информация
   */
  debug?: string;
};
export type FiltersAndSorting = {
  categories?: CategoriesProducts[];
  sizes?: Размер[];
  colors?: Цвет[];
  shops?: ShopInList[];
  sortBy?: string[];
};
export type СтраницаКаталогаТоваров = {
  headerMenu?: MenuItem[];
  filters?: FiltersAndSorting;
  productList?: ProductInList[];
};
export type ShopWithProduct = {
  id?: Uuid;
  code?: Sluggable;
  name?: string;
  logo_image?: ОбъектМедиа;
  description?: string;
  orderQuantity?: number;
  createdAt?: string;
  rating?: number;
};
export type Product = {
  id?: Uuid;
  name?: string;
  description?: string;
  shop?: ShopWithProduct;
  price?: number;
  sizes?: Размер[];
  colors?: Цвет[];
  gender?: string;
  rating?: number;
  quantityReviews?: number;
  sizesInformationImg?: ОбъектМедиа;
  images?: ОбъектМедиа[];
};
export type СтраницаТовара = {
  headerMenu?: MenuItem[];
  product?: Product;
  popularProductList?: ProductInList[];
};
export type Shop = {
  id?: Uuid;
  code?: Sluggable;
  name?: string;
  description?: string;
  orderQuantity?: number;
  createdDate?: string;
  rating?: number;
  quantityReviews?: number;
  mainImage?: ОбъектМедиа;
  images?: ОбъектМедиа[];
  logo?: ОбъектМедиа;
};
export type Links = {
  text?: string;
  url?: Uri;
};
export type ФутерСтраницы = {
  links?: Links[];
};
export type СтраницаТовара2 = {
  headerMenu?: MenuItem[];
  shop?: Shop;
  popularProductOfShopList?: ProductInList[];
  footer?: ФутерСтраницы;
};
export type ProductInCart = {
  id?: Uuid;
  name?: string;
  price?: number;
  quantity?: number;
  image?: ОбъектМедиа;
};
export type Cart = {
  productList?: ProductInCart[];
  quantity?: number;
  totalPrice?: number;
};
export type User = {
  id?: Uuid;
  phone?: string;
  email?: string;
  lastName?: string;
  name?: string;
  gender?: string;
};
export type UserSignIn = {
  phone?: string;
  name?: string;
  password?: string;
};
export type UserShort = {
  id?: Uuid;
  name?: string;
};
export type Review = {
  rating?: number;
  text?: string;
  user?: UserShort;
};
export type SaveReview = {
  rating?: number;
  text?: string;
};
export type ShopProfile = {
  id?: Uuid;
  code?: Sluggable;
  name?: string;
  description?: string;
  orderQuantity?: number;
  createdAt?: string;
  rating?: number;
};
export type Файл = Blob;
export type ShopSave = {
  code?: Sluggable;
  name?: string;
  description?: string;
  orderQuantity?: number;
  createdAt?: string;
  rating?: number;
  quantityReviews?: number;
};
export type ProductSave = {
  name?: string;
  description?: string;
  composition?: string;
  shopId?: Uuid;
  material?: string;
  price?: number;
  sizeIds?: Uuid[];
  colors?: Uuid[];
  gender?: string;
  categoryIds?: Uuid[];
};
export type ProductInOrder = {
  id?: Uuid;
  name?: string;
  shop?: Shop;
  price?: number;
  colors?: Цвет;
  sizes?: Размер;
  images?: ОбъектМедиа;
  quantity: number;
};
export type Order = {
  id?: string;
  user?: User;
  totalPrice?: number;
  status?: string;
  productItems?: ProductInOrder[];
  date?: string;
};
export type ProductInCreateOrder = {
  productItemId?: Uuid;
  sizeId?: Uuid;
  colorId?: Uuid;
  shopId?: Uuid;
  quantity?: number;
};
export type CreateOrder = {
  userId?: Uuid;
  totalPrice?: number;
  status?: string;
  productItems?: ProductInCreateOrder[];
};
export const {
  useGetHealthCheckQuery,
  useGetMainPageQuery,
  useGetCatalogPageQuery,
  useGetProductPageByProductIdQuery,
  useGetShopPageByShopIdQuery,
  usePostProductByProductIdUserAndUserIdAddToCartMutation,
  useGetUserByUserIdCartQuery,
  usePostUserSignInMutation,
  usePostUserSignUpMutation,
  usePostUserRefreshMutation,
  useGetProductByProductIdReviewsQuery,
  useGetShopByShopIdReviewsQuery,
  usePostUserByUserIdProductAndProductIdReviewsMutation,
  usePostShopSignUpMutation,
  usePostShopByShopIdProductsMutation,
  usePostShopSignInMutation,
  useGetUserOrdersUsersByUserIdQuery,
  usePostUserOrdersUsersByUserIdMutation,
  useGetUserOrdersShopsByShopIdQuery,
  usePatchUserOrdersByOrderIdStatusMutation,
  usePatchUserOrdersByOrderIdUsersAndUserIdReturnMutation,
} = injectedRtkApi;
