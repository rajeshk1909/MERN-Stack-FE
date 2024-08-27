import React, { createContext } from "react";
import all_product from '../Assets/all_product'

export const ShopContext = createContext(null)

const shopContextProvider = () => {
    const contextValue = { all_product }

    return (
        <ShopContext.Provider value={contextValue}>
            {props.childern}
        </ShopContext.Provider>
    )
}

export default shopContextProvider