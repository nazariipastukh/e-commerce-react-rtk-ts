import {useState} from "react";
import {Select} from "antd";

interface ISort {
    desc: string
    asc: string
}

const sortOptions: ISort = {
    desc: 'Descending',
    asc: 'Ascending'
}

const itemsPerPage: number[] = [
    6, 12, 18
]

export const SelectComponent = () => {
    const [selectedSortOption, setSelectedSortOption] = useState('Ascending');
    const [perPage, setPerPage] = useState(6);

    const handleChangeSort = (value: string) => {
        setSelectedSortOption(value);
    };

    const handleChangePerPage = (value: number) => {
        setPerPage(value);
    };

    const {Option} = Select;

    return (
        <>
            <Select
                value={selectedSortOption}
                style={{width: 179}}
                onChange={handleChangeSort}
            >
                {Object.values(sortOptions).map((item: string) => (
                    <Option key={item} value={item} style={{color: "#6575A8", fontWeight: '500'}}>
                        {item}
                    </Option>
                ))}
            </Select>

            <Select
                value={perPage}
                style={{width: 179}}
                onChange={handleChangePerPage}
            >
                {itemsPerPage.map((item: number) => (
                    <Option key={item} value={item} style={{color: "#6575A8", fontWeight: '500'}}>
                        {item}
                    </Option>
                ))}
            </Select>
        </>
    );
};