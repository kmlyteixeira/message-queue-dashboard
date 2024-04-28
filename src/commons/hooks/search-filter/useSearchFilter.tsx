import { SearchOutlined } from "@ant-design/icons";
import { Button, Input, InputRef, Space, TableColumnType } from "antd";
import { FilterDropdownProps } from "antd/es/table/interface";
import React from "react";

interface DataType {
    [key: string]: any;
}

type DataIndexType = string;

export const useSearchFilter = <T extends DataType>(
    dataIndex: DataIndexType | DataIndexType[],
    attributeDescriptions: Record<DataIndexType, string>,
    filterKey?: string
) => {
    const [searchText, setSearchText] = React.useState('');
    const [searchedColumn, setSearchedColumn] = React.useState('');
    const searchInput = React.useRef<InputRef>(null);

    const handleSearch = (
        selectedKeys: string[],
        confirm: FilterDropdownProps['confirm'],
        dataIndex: DataIndexType | DataIndexType[],
    ) => {
        confirm();
        setSearchText(selectedKeys[0]);
        setSearchedColumn(Array.isArray(dataIndex) ? dataIndex.join(', ') : dataIndex);
    };

    const handleReset = (
        clearFilters: () => void,
        confirm: FilterDropdownProps['confirm']
    ) => {
        clearFilters();
        setSearchText('');
        confirm();
    };

    const searchFilter = (): TableColumnType<T> => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
            <div style={{ padding: 8 }} onKeyDown={(e) => e.stopPropagation()}>
                <Input
                    ref={searchInput}
                    placeholder={`Search ${Array.isArray(dataIndex) ? dataIndex.map(index => attributeDescriptions[index]).join(', ') : attributeDescriptions[dataIndex]}`}
                    value={selectedKeys[0]}
                    onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
                    style={{ marginBottom: 8, display: 'block' }}
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
                        icon={<SearchOutlined />}
                        size="small"
                        style={{ width: 90 }}
                    >
                        Filtrar
                    </Button>
                    <Button
                        onClick={() => clearFilters && handleReset(clearFilters, confirm)}
                        size="small"
                        style={{ width: 90 }}
                    >
                        Limpar
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: (filtered: boolean) => (
            <SearchOutlined style={{ color: filtered ? '#1677ff' : undefined }} />
        ),
        onFilter: (value, record) =>{
            if (Array.isArray(dataIndex)) {
                return dataIndex.some(index =>
                    record[index] !== undefined &&
                    record[index]?.[filterKey || '']
                        .toString()
                        .toLowerCase()
                        .includes((value as string).toLowerCase())
                );
            } else {
                return record[dataIndex] !== undefined &&
                    record[dataIndex] 
                    .toString()
                    .toLowerCase()
                    .includes((value as string).toLowerCase());
            }
        },
        onFilterDropdownOpenChange: (visible) => {
            if (visible) {
                setTimeout(() => searchInput.current?.select(), 100);
            }
        },
        render: (text) => text
    });

    return {
        searchFilter
    };
}