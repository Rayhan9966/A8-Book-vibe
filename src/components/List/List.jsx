import React from 'react';

const List = ({list}) => {
    const {image}=list;
    return (
        <div>
        <img src={image} alt="" />
        </div>
    );
};

export default List;