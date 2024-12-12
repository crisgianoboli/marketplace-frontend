/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { logOut } from '@/app/store/slices/userSlice';
import { useSelector, useDispatch } from 'react-redux';

export default function Header() {
  const user = useSelector((state: any) => state.user);
  const dispatch = useDispatch();

  return (
    <header className="p-4 bg-blue-500 text-white flex justify-between">
      <h1>Marketplace</h1>
      {user.loggedIn ? (
        <div>
          <span>Welcome, {user.name}</span>
          <button onClick={() => dispatch(logOut())}>Logout</button>
        </div>
      ) : (
        <button>Login</button>
      )}
    </header>
  );
}
