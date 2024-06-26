/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from "@reduxjs/toolkit";
import { toast } from "sonner";

const initialState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems") as string)
    : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {

  
      const existingIndex = state.cartItems.findIndex(
        (item: any) => item._id === action.payload._id
      );

      if (existingIndex >= 0) {
        state.cartItems[existingIndex] = {
          ...state.cartItems[existingIndex],
          cartQuantity: state.cartItems[existingIndex].cartQuantity + 1,
        };
        toast.info("Increased product quantity", {
          position: "bottom-left",
        });
      } else {
        const tempProductItem = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(tempProductItem);
        toast.success("Product added to cart", {
          position: "bottom-left",
        });
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
  
   
    

    decreaseCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item: any) => item._id === action.payload._id
      );

      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;

        toast.info("Decreased product quantity", {
          position: "bottom-left",
        });
      } else if (state.cartItems[itemIndex].cartQuantity === 1) {
        const nextCartItems = state.cartItems.filter(
          (item: any) => item._id !== action.payload._id
        );

        state.cartItems = nextCartItems;

        toast.error("Product removed from cart", {
          position: "bottom-left",
        });
      }

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    decreaseCartBYshop(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item: any) => item._id === action.payload._id
      );

      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;

        toast.info("Decreased product quantity", {
          position: "bottom-left",
        });
      } else if (state.cartItems[itemIndex].cartQuantity === 1) {
        const nextCartItems = state.cartItems.filter(
          (item: any) => item._id !== action.payload._id
        );

        state.cartItems = nextCartItems;

        toast.error("Product removed from cart", {
          position: "bottom-left",
        });
      }

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    removeFromCart: (state, action) => {
      state.cartItems.map((cartItem: any) => {
        if (cartItem._id === action.payload._id) {
          const nextCartItems = state.cartItems.filter(
            (item: any) => item._id !== cartItem._id
          );

          state.cartItems = nextCartItems;

          toast.error("Product removed from cart", {
            position: "bottom-left",
          });
        }
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        return state;
      });
    },

    // getTotals: (state) => {
    //   const { total, quantity } = state.cartItems.reduce(
    //     (cartTotal: any, cartItem: any) => {


    //       {Math.round(
    //         cartItem?.price -
    //           (cartItem?.price * cartItem?.discount) / 100
    //       )  * cartItem.cartQuantity}


    //       const { price, cartQuantity,discount } = cartItem;

          

    //       const itemTotal =( price- (price.discount/100) )* cartQuantity;
    //       // const itemTotal = price * cartQuantity;

    //       cartTotal.total += itemTotal;
    //       cartTotal.quantity += cartQuantity;

    //       return cartTotal;
    //     },
    //     {
    //       total: 0,
    //       quantity: 0,
    //     }
    //   );

    //   state.cartTotalQuantity = quantity;
    //   state.cartTotalAmount = total;
    // },


    getTotals: (state) => {
      const { total, quantity } = state.cartItems.reduce(
      
        (cartTotal: any, cartItem: any) => {
          const { price, cartQuantity, discount } = cartItem;
    
          // Calculate the item total
          const discountedPrice = Math.round(price - (price * discount) / 100);
          const itemTotal = discountedPrice * cartQuantity;
    
          // Update the total and quantity
          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;
    
          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );
    
      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = total;
    },
    
    clearCart: (state) => {
      state.cartItems = [];
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      toast.error("Cart cleared", { position: "bottom-left" });
    },
  },
});

export const {
  addToCart,
  decreaseCart,
  removeFromCart,
  getTotals,
  clearCart,

  decreaseCartBYshop,
} = cartSlice.actions;

export default cartSlice.reducer;
