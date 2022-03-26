import React from 'react';

const ProductItem = (props : any) => {
    // console.log(props);
    
    return (
        <div>
            {props.item.name}
            <button onClick={() => props.delete(props.item.id)}>Xóa</button>
        </div>
    );
};

export default ProductItem;