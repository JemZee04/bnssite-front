import { HeartOutlined } from "@ant-design/icons";
import { ProductInList } from "../store/beekneesApi";
import { useAppDispatch, useAppSelector } from "../store/store";
import { addFavorite, deleteFavorite, favoritesSelectors, isFavoriteSelector } from "../store/slices/favorites";
import { MouseEventHandler } from "react";

type AddToFavoritesButtonProps = {
    item: ProductInList
}

export const AddToFavoritesButton: React.FC<AddToFavoritesButtonProps> = ({ item }) => {

    const dispatch = useAppDispatch();

    const isFavorite = useAppSelector(state => isFavoriteSelector(state, item))

    const toggleFavorite = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
        e.preventDefault();
        e.stopPropagation();
        if (isFavorite) dispatch(deleteFavorite(item));
        else dispatch(addFavorite(item));
    }

    return (
        <HeartOutlined
            onClick={toggleFavorite}
            style={{
                fontSize: 20,
                color: isFavorite ? 'greenyellow' : 'black'
            }} />
    );
}