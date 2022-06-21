import { createSlice } from '@reduxjs/toolkit';

const initState = {
  // ke hang
  shoes: [],
  electrics: [],
  cart: [],
  wishlist: [],
};

const productSlice = createSlice({
  name: 'productSlice',
  initialState: initState,
  reducers: {
    addProduct: (state, action) => {
      // state.cart.push(action.payload);
      const isExist = state.cart.find(item => item._id === action.payload._id);
      if (isExist) { // nếu sp đó đã nằm trong giỏ hàng
        state.cart = state.cart.map(item => { // loop qua các sp trong giỏ hàng
          if (item._id === action.payload._id) { // kiểm tra sản phẩm đó có _id giống action.payload._id không
            item.quantity += 1; // giống thì tăng lên 1
          }
          return item;
        });
      } else { // nếu chưa có thì đẩy sp đó vào giỏ hàng và gán số lượng quantity = 1
        // console.log('action.payload', action.payload);
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    addWishlist: (state, action) => {
      state.wishlist.push(action.payload);
    },
    changeQuantity: (state, action) => {
      state.cart = state.cart.map(item => { // lặp qua các item trong list cart
        if (item._id === action.payload._id) { // nếu item mà nó lặp qua = với item mà mình gửi vào
          item.quantity = action.payload.quantity; // thì update quantity
        }
        return item;
      });
    },
    removeItem: (state, action) => {                             
        state.cart = state.cart.filter(item=>item._id !== action.payload);      
  },
  }
});

export const { addProduct, addWishlist, increment, decrement, changeQuantity, removeItem } = productSlice.actions;

export default productSlice.reducer;