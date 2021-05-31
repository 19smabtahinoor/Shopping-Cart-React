import React, { useState } from 'react';
import ProductItem from './ProductItem'
import ProductData from '../API/product.json'


function Cart() {

    const [items,setItems] = useState(ProductData)

    const filteringProduct = (category) => {
        const productfilter = ProductData.filter( (eachItem) => {
            return(
                eachItem.category === category
            )
        })

        setItems(productfilter)
    }
    return (
        <>
            <div className="mt-9">
                <h2 className="text-2xl font-normal">Shopping Cart</h2>

                <div className="flex flex-row flex-wrap space-x-2 mt-4 menutab pb-4">
                <button onClick={ () => {setItems(ProductData)}}>All</button>
                <button onClick={ () => {filteringProduct('Headphone')}}>Headphone</button>
                <button onClick={ () => {filteringProduct('Airpods')}}>Airpods</button>
                <button onClick={ () => {filteringProduct('Laptop')}}>Laptop</button>
                <button onClick={ () => {filteringProduct('Mobile')}}>Mobile</button>
                <button onClick={ () => {filteringProduct('Camera')}}>Camera</button>
                <button onClick={ () => {filteringProduct('Microphone')}}>Microphone</button>
                <button onClick={ () => {filteringProduct('Monitor')}}>Monitor</button>
                <button onClick={ () => {filteringProduct('Mouse')}}>Mouse</button>
                <button onClick={ () => {filteringProduct('Keyboard')}}>Keyboard</button>
                </div>


                {/* Cart */}
                <div className="mt-1 overflow-y-scroll cartwrapper">
                {items.map( (eachItem,index) => {
                    return(
                        <ProductItem 
                        key={eachItem.id}
                        image={eachItem.image}
                        title={eachItem.title}    
                        description={eachItem.description}    
                        color={eachItem.color}    
                        category={eachItem.category}    
                        price={eachItem.price}    
                        />
                    )
                })}

                </div>
            </div>
        </>
    );
}

export default Cart;