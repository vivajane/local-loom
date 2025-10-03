"use client"
import { getAllProducts } from './api/products';
import React, { createContext, useEffect, useState } from 'react'


export const AppContext = createContext(null);


const Context = ({children}) => {
    const [products, setProducts] = useState([])

    const fetchProducts = async () => {
        try {
            const response = await getAllProducts();
            console.log("API Response:", response.data);
            setProducts(response.data.results);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    }


    const contextValue = {
        products,
        fetchProducts,
        setProducts


    }
return(
    <AppContext.Provider value={contextValue}>
        {children}
    </AppContext.Provider>
)


}
export default Context


