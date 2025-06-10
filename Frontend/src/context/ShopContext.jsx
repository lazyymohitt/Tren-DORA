// import { createContext } from "react";
// import { products } from "../assets/assets";

// export  const ShopContext  = createContext();

// const ShopContextProvider = (props)=>{

//     const currency = '$';
//     const deliveryFee = 25
//      const value ={
//         products ,currency , deliveryFee
//      }

//      return(
//         <ShopContext.Provider>
//             {props.children}
//         </ShopContext.Provider>
//      )
// }
// export default ShopContextProvider



import { useContext, createContext } from "react";

export const  shopContext = createContext(
    const currency = '$'
        const deliveryFee = 25
         const value ={

    products ,currency , deliveryFee

    });

export  const ShopProvider =  shopContext.Provider

export default  function useShop(){
    return   useContext(shopContext)
}
