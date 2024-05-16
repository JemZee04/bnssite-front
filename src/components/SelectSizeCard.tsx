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
                        width: '60px',
                        height: '60px',
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