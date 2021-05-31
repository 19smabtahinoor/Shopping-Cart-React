import React from 'react';


function ProductItem({title,image,description,color,category,price}) {
    return (
        <>
        
            <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-5 xl:grid-cols-5 place-items-center bg-gray-200 box-border p-5 rounded-lg shadow-lg">

                {/* product picture and title */}
                <div className="col-span-2 lg:col-span-1 overflow-hidden rounded-lg relative">
                    <img className="transform transition duration-700 w-60 h-40 rounded-lg object-cover shadow-2xl hover:scale-125" src={image} alt="productImage" />

                    <span className=" mt-3 bg-blue-500 text-white text-sm p-1 rounded-lg absolute -top-2 right-1">{category}</span>
                </div>

                {/* product title and description  */}
                <div className="col-span-2 border-box p-4">
                    <h2 className="text-center lg:text-left font-semibold text-2xl pb-2">{title}</h2>
                    <p className="text-justify lg:text-left text-gray-500 font-sm leading-2">{description}</p>
                    <h4 className="text-center lg:text-left font-bold py-3 ">{color}</h4>
                </div>

                {/* product quantity */}
                <div className="col-span-1">
                    <div className="flex flex-row items-center space-x-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="transition duration-400 ease-in-out h-8 w-8 hover:bg-blue-500 hover:text-white rounded-full p-1 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 12H6" />
                        </svg>

                        <input type="number" placeholder="1" className="w-24 text-center rounded-full py-3 outline-none" />

                        <svg xmlns="http://www.w3.org/2000/svg" className="transition duration-400 ease-in-out h-8 w-8 hover:bg-blue-500 hover:text-white rounded-full p-1 cursor-pointer " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                    </div>
                </div>

                {/* product price  */}
                <div className="col-span-1">
                    <div className="flex flex-row flex-grow items-center space-x-1">
                     
                        <span className="mr-12 font-bold text-lg">{price}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="transition duration-400 ease-in-out h-8 w-8 hover:bg-red-600 hover:text-white rounded-full p-1 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                    </div>

                </div>

            </div>
        </>
    );
}

export default ProductItem;