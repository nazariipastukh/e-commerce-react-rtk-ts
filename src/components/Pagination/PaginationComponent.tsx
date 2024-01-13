import {Pagination} from "antd";

export const PaginationComponent = () => {
    let onChange; //todo

    return (
        <Pagination current={1} onChange={onChange} total={50}/>
    );
};