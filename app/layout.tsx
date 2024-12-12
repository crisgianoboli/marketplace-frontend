'use client'

import { Provider } from 'react-redux';
import { store } from './store/store';
import './globals.css'
import Header from './components/header/Header';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <html lang="en">
        <body className="bg-light-blue text-gray-800 font-sans">
          <nav className="bg-gray-blue p-4 shadow-md">
            <Header />
          </nav>
          <main className="p-6">
            {children}
          </main>
        </body>
      </html>
    </Provider>
  );
}
