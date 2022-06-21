const initState = {
    // ke hang
    wishlist: [],
    cart: [],
    count: 0
  };
  const productReducer = (state = initState, action) => {
    console.log("action", action); // => {type: 'FROM_A', data: 'socola'}
    switch (action.type) {
      case "ADD_PRODUCT":
        return {
          ...state,
          cart: [...state.cart, action.data]
        };
      case "ADD_TO_WISHLIST":
        return {
          ...state,
          wishlist: [...state.wishlist, action.data]
        };
      case "INCREMENT":
        return{
          ...state,
          count: state.count + 1
        };
      case "DECREMENT":
        return{
          ...state,
          count: state.count - 1
        };
  
      default:
        return state;
    }
  };
  
  export default productReducer;
  