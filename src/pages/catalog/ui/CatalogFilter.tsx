import { Menu, MenuProps } from "antd"
import { FiltersAndSorting } from "../../../store/beekneesApi"
import { useMemo } from "react"
import { FilterType, SelectedFiltersTypes } from "./Catalog"


type CatalogFilterProps = {
    selectedFilters: SelectedFiltersTypes | null
    filters: FiltersAndSorting | null
    onSelectFilter: (filters: [string, string], type: FilterType) => void
}

type MenuItem = Required<MenuProps>['items'][number];

export const CatalogFilter: React.FC<CatalogFilterProps> = ({ filters, onSelectFilter, selectedFilters }) => {


    const _buildCategories = (categories: FiltersAndSorting['categories']): MenuItem[] | undefined => {
        if (categories) return categories.map(category => ({
            label: category.name ?? 'Неизветсная категория',
            key: category.id ?? '',
            onClick: (info) => {
                if (info.key == selectedFilters?.categories) onSelectFilter(['category', category?.id ?? ''], 'delete');
                onSelectFilter(['category', category?.id ?? ''], 'set')
            },
            children: _buildCategories(category.subCategories)
        }));
        return undefined;
    }

    const menuItems = useMemo<MenuItem[]>(() => filters
        ? [
            {
                label: 'Категории',
                key: 'categories',
                children: _buildCategories(filters.categories)
            },
            {
                label: 'Размеры',
                key: 'sizes',
                onClick: (info: any) => {
                    if (selectedFilters?.sizes?.find(size => size == info.key)) onSelectFilter(['sizes', info.key], 'delete');
                    onSelectFilter(['sizes', info.key], 'add');
                },
                children: filters.sizes?.map(size => ({ label: size.name, key: size.id }))
            },
            {
                label: 'Цвета',
                key: 'colors',
                onClick: (info) => {
                    console.log();
                    
                    if (selectedFilters?.colors?.find(color => color == info.key)) {
                        console.log('DELETE');
                        
                        onSelectFilter(['colors', info.key], 'delete');
                    }
                    onSelectFilter(['colors', info.key], 'add');
                },
                children: filters.colors?.map(color => ({ label: color.name, key: color.id }))
            }
        ]
        : [],
        [filters]);


    return filters && <Menu
        selectedKeys={[
            ...selectedFilters?.colors ?? [],
            ...selectedFilters?.sizes ?? []
        ]}
        mode='horizontal'
        items={menuItems}
    />
}