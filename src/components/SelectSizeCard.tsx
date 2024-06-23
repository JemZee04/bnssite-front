import { Space } from "antd"
import { Size } from "../@types/types"


type SelectSizeCardProps = {
    sizes: Size[],
    onSelect: (size: Size) => void
}

export const SelectSizeCard: React.FC<SelectSizeCardProps> = ({ sizes, onSelect }) => {

    return (
        <Space direction='horizontal' size={20}>
            {sizes.map(size => (
                <div
                    style={{
                        cursor: "pointer",
                        fontFamily: "Source Sans 3",
                        fontWeight: 400,
                        fontSize: 24,
                        color: "#FFFFFF",
                        border: "2px solid #6712FB",
                        borderRadius: 10,
                        padding: 20,
                        display: "flex",
                        justifyContent: "center",
                        textAlign: 'center'
                    }}
                    onClick={() => onSelect(size)}
                >
                    {size.name}
                </div>
            ))}
        </Space>

    );
}