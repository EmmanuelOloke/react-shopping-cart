import React from 'react'

function Product(props) {
    const { product } = props;
    return (
        <div>
            <img className="small" src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <h3>${product.price}</h3>
            <div>
                <button>Add to Cart</button>
            </div>
        </div>
    )
}

export default Product;