import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Header from "../component/Header";
import Eye from '../assets/Eye';
import EyeClose from '../assets/EyeClose';

export default function Login() {
  const [isViewPass, setIsViewPass] = useState(false);

  const onChangeViewPass = () => setIsViewPass(!isViewPass);

  const onHandleLogin = () => {

  };

  return (
    <div className='mt-16 px-16 auth-screen'>
      <Header />
      <div className='wrap-content'>
        <div className='left'>

        </div>
        <div className='flex w-1/2 justify-center items-center right '>
          <div className='w-4/5 p-10 border'>
            <div className='text-center text-3xl font-bold'>Sign Up</div>
            <div className='flex flex-row justify-between'>
              <div>
                <div>First Name</div>
                <input placeholder='type here' className='border-black border rounded pl-2 w-full h-10' />
              </div>
              <div>
                <div>Last Name</div>
                <input placeholder='type here' className='border-black border rounded pl-2 w-full h-10' />
              </div>
            </div>
            <div className='mt-2'>Email</div>
            <input placeholder='type here' className='border-black border rounded pl-2 w-full h-10' />
            <div className='mt-2'>Password</div>
            <div className='relative'>
              <input
                placeholder='Must be at least 8 characters'
                className='border-black border rounded pl-2 w-full h-10'
                type={isViewPass ? 'text' : 'password'}
              />
              <div onClick={onChangeViewPass} className='eye-input'> {isViewPass ? <EyeClose /> : <Eye />}</div>
            </div>
            <div
              onClick={onHandleLogin}
              className='rounded w-full bg-gray-800 h-14 flex justify-center items-center uppercase font-medium text-white cursor-pointer mt-4'>
              Sign up
            </div>
            <div className='flex justify-center items-center mt-2 flex-col'>
            <div className='flex'>Already have an Account? <Link to={'/login'} className='ml-2 text-blue-700 cursor-pointer'>Login</Link></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}