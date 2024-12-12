/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { logOut } from '@/app/store/slices/userSlice';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';

const Header = () => {
  const user = useSelector((state: any) => state.user);
  const dispatch = useDispatch();

  return (
    <header className="p-4 bg-blue-500 text-white flex justify-between">
      <h1>Marketplace</h1>
      {user.loggedIn ? (
        <div className='w-full flex justify-end '>
          <p className='mr-6'>Welcome, <span className='text-slate-900'> {user.name}</span></p>
          <button onClick={() => dispatch(logOut())}>Logout</button>
        </div>
        
      ) : (
        <div className="container mx-auto flex justify-end">
              <Link href="/login" className="text-white">Login</Link>
            </div>
      )}
    </header>
  );
}
 
export default Header;