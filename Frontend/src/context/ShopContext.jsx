import React from 'react'
import { createContext } from 'react'
import { products } from '../assets/assets';

export const GlobalContext = createContext();


const ShopContext = (props) => {
       const currency = "$";
    const deliveryCost = 20;
    const GlobalData = {
        products, deliveryCost, currency
    }
  return (
    <GlobalContext.Provider value={GlobalData}>{props.children}</GlobalContext.Provider>
  )
}

export default ShopContext