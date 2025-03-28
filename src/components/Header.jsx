import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../redux/userSlice';

function Header() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
  return (
    <div className='bg-white w-full shadow sticky top-0'>
        <div className='flex justify-between py-2 px-4 md:px-10'>
            <div>
                <h3 className='text-2xl font-bold'>LOGO</h3>
            </div>
            <div>
                <button
                          onClick={() => {
                            dispatch(logout());
                            navigate("/");
                          }}
                          className="bg-red-600 px-4 py-1 text-white rounded cursor-pointer"
                        >
                          Logout
                        </button>
            </div>
        </div>
    </div>
  )
}

export default Header