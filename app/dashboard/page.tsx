/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const Dashboard = () => {
  const user = useSelector((state: any) => state.user);
  const router = useRouter();

  useEffect(() => {
    if (!user.loggedIn) {
      router.push('/login');
    }
  }, [user.loggedIn, router]);

  if (!user.loggedIn) {
    return null;
  }

  return (
     <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
     <h1 className="text-3xl font-bold text-gray-800 mb-6">Welcome to your Dashboard, {user.name}</h1>
     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
       <div className="bg-gray-100 p-4 rounded-md shadow-md">
         <h3 className="text-xl text-gray-800">Service 1</h3>
       </div>
       <div className="bg-gray-100 p-4 rounded-md shadow-md">
         <h3 className="text-xl text-gray-800">Service 2</h3>
       </div>
       <div className="bg-gray-100 p-4 rounded-md shadow-md">
         <h3 className="text-xl text-gray-800">Service 3</h3>
       </div>
     </div>
   </div>
  );
}

export default Dashboard;
