'use client';

import { Provider } from 'react-redux';
import Link from 'next/link';
import { store } from './store/store';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <html lang="en">
        <body>
          <nav>
            <Link href="/login">Login</Link> | <Link href="/dashboard">Dashboard</Link>
          </nav>
          {children}
        </body>
      </html>
    </Provider>
  );
}
