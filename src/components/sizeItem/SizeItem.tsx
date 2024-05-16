import { Size } from "../../@types/types";

type SizeItemProps = {
    size: Size;
    clickHandler: () => void;
}

const SizeItem: React.FC<SizeItemProps> = ({size, clickHandler}) => {
    return(
        <div onClick={clickHandler}>
            <p>{size.name}</p>
        </div>
    )
}

export default SizeItem;