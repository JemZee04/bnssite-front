import { Outlet, Route, Routes, useNavigate } from "react-router";
import { useLocation } from "react-router-dom";
import AppLayout from "../App";
import Cart from "../pages/cart/ui/Cart";
import Catalog from "../pages/catalog/ui/Catalog";
import Error from "../pages/error/ui/Error";
import Favourites from "../pages/favourites/ui/Favourites";
import Main from "../pages/main/ui/Main";
import Product from "../pages/product/ui/Product";
import Portal from "../shared/ui/portal/Portal";
import {
    ABOUT_PATH,
    AUTH_PATH,
    CART_PATH,
    CATALOG_PATH,
    CATEGORY_PATH,
    CHANGE_PASSWORD_PATH,
    CITIES_PATH,
    CONTACTS_PATH,
    DELETE_PROFILE_PATH,
    EMAIL_PATH,
    FAST_BUY_PATH,
    FAVOURITES_PATH,
    FILTERS_PATH,
    HELP_PATH,
    HOME_PATH,
    ORDERS_PATH,
    ORDER_CALL_PATH,
    ORDER_SUCCESS_PATH,
    PAYMENT_DELIVERY_PATH,
    PERSON_PATH,
    POLITICS_PATH,
    PRODUCT_PATH,
    PROFILE_PATH,
    RECOVERY_PASSWORD_PATH,
    SEARCH_PATH
} from "../shared/utils/constants";
// import Auth from "../widgets/auth/ui/Auth";
import ChangePassword from "../widgets/changePassword/ui/ChangePassword";
import Cities from "../widgets/cities/ui/Cities";
import DeleteProfile from "../widgets/deleteProfile/ui/deleteProfile";
import FastBuy from "../widgets/fastBuy/ui/FastBuy";
import RecoveryPassword from "../widgets/recoveryPassword/ui/RecoveryPassword";
import Regist from "../widgets/regist/ui/Regist";
import { ModalRoute } from "../shared/ui/modal/ModalRoute";
import { AuthGuard } from "./AuthGuard";
import { ProfilePage } from "../pages/profile/ui/ProfilePage";

const Router: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const previousLocation = location.state?.previousLocation;

    return (
        <>
            <Routes location={previousLocation || location}>
                <Route path={HOME_PATH} element={<AppLayout />}>
                    <Route path={HOME_PATH} element={<Main />} />
                    <Route path={CATALOG_PATH} element={<Catalog />}>
                        <Route path={`${CATALOG_PATH}${SEARCH_PATH}`} element={<Catalog />} />
                        <Route path={`${CATALOG_PATH}${CATEGORY_PATH}`} element={<Catalog />} />
                        <Route path={`${CATALOG_PATH}${FILTERS_PATH}`} element={<Catalog />} />
                        <Route path={`${CATALOG_PATH}${SEARCH_PATH}${CATEGORY_PATH}`} element={<Catalog />} />
                        <Route path={`${CATALOG_PATH}${SEARCH_PATH}${FILTERS_PATH}`} element={<Catalog />} />
                        <Route path={`${CATALOG_PATH}${CATEGORY_PATH}${FILTERS_PATH}`} element={<Catalog />} />
                        <Route path={`${CATALOG_PATH}${SEARCH_PATH}${CATEGORY_PATH}${FILTERS_PATH}`} element={<Catalog />} />
                    </Route>
                    <Route path={`${PRODUCT_PATH}/:productId`} element={<Product />} />
                    {/* <Route path={PROFILE_PATH} element={<ProfileMain />}>
                        <Route path={PROFILE_PATH} element={<Profile />} />
                        <Route path={ORDERS_PATH} element={<Orders />} />
                    </Route> */}
                    {/* <Route path={FAVOURITES_PATH} element={<Favourites />} />
                    <Route path={PAYMENT_DELIVERY_PATH} element={<PaymentDelivery />} />
                    <Route path={ABOUT_PATH} element={<AboutUs />} />
                    <Route path={CONTACTS_PATH} element={<Contacts />} />
                    <Route path={HELP_PATH} element={<Help />} />
                    <Route path={POLITICS_PATH} element={<Politics />} /> */}
                    <Route path="*" element={<Error />} />
                </Route>
            </Routes>
            {
                previousLocation && (
                    <Routes>
                        <Route path={CART_PATH} element={<ModalRoute prevLocation={previousLocation}>
                            <Cart />
                        </ModalRoute>} />
                        <Route path={FAVOURITES_PATH} element={<ModalRoute prevLocation={previousLocation}>
                            <Favourites />
                        </ModalRoute>} />
                        <Route path={PROFILE_PATH} element={<ModalRoute prevLocation={previousLocation}>
                            <ProfilePage />
                        </ModalRoute>
                        }
                        />
                        {/* <Route path={REGIST_PATH} element={<Portal children={<Regist />} />} /> */}
                        {/* <Route path={AUTH_PATH} element={<Portal children={<Auth />} />} /> */}
                        {/* <Route path={ORDER_SUCCESS_PATH} element={<Portal children={
                                <Modal title="Ваш заказ принят"
                                    content="Мы свяжемся с вами в кротчайшее время"
                                    buttonContent="Вернуться на главную"
                                    clickHandler={() => navigate(HOME_PATH)} />
                            } />} />
                            <Route path={ORDER_CALL_PATH} element={<Portal children={
                                <Modal title="Ваша заявка принята"
                                    content="Мы свяжемся с вами в кротчайшее время"
                                    buttonContent="Вернуться на главную"
                                    clickHandler={() => navigate(HOME_PATH)} />
                            } />} /> */}
                    </Routes>
                )
            }

        </>
    )
}

export default Router;