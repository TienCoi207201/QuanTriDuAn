import React from 'react';
import {
  FaSearch,
  FaUser,
  FaHeart,
  FaShoppingCart,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FiLogOut } from "react-icons/fi";

export default function Header() {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const userInfo = useSelector(store => store.authSlice.user);

  const onHandleAuth = () => {
    if (userInfo) {
      // xoa user
    } else {
      navigate("/login");
    }
  };
  const cartData = useSelector(store => store.productSlice.cart);
  return (
    <div className='flex flex-row h-14 items-center fixed w-full top-0 z-50'>
      <div className='flex flex-1 flex-row bg-white px-20 items-center h-full'>
        <div className='text-gray-300 text-4xl mr-auto cursor-pointer font-bold'>Cee</div>
        <div className='flex flex-row'>
          <Link to={'/'} className='page-link mr-10 cursor-pointer w-16'>Home</Link>
          <Link to={'/products'} className='page-link cursor-pointer w-20'>Product</Link>
        </div>
      </div>
      <div className='flex w-1/2 h-full flex-row items-center justify-between'>
        <div className='ml-4 relative w-64'>
          <input
            className='border rounded-full pl-2 w-full h-7'
            placeholder='Search here'
          />
          <FaSearch className='absolute top-1.5 right-2.5' />
        </div>
        <div className='flex flex-row'>
          <FaUser className='text-2xl mr-10 text-gray-300' />
          <Link to={'/wishlish'}><FaHeart className='text-2xl mr-10 text-gray-300' /></Link>
          <Link to={'/cart'} className='page-link cursor-pointer w-20 relative'>
            <FaShoppingCart className='text-2xl mr-10 text-gray-300' />
            <div className='item-number'>{cartData?.length}</div>
          </Link>
          <div onClick={onHandleAuth} className='page-link cursor-pointer w-20 relative'>
            <FiLogOut className='text-2xl mr-10 text-gray-300' />
          </div>
        </div>
      </div>
    </div>
  );
}