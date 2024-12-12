/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';

export default function Dashboard() {
  const user = useSelector((state: any) => state.user);
  const router = useRouter();

  if (!user.loggedIn) {
    router.push('/');
    return null;
  }

  return (
    <div className="p-6">
      <h1>Welcome to your Dashboard, {user.name}</h1>
      <p>This is your personal dashboard.</p>
    </div>
  );
}
