import Navbar from '../components/Navbar';
import { ReactNode } from 'react';
import "./globals.css";

interface props {
  children: ReactNode;
}

export default function Layout({ children }:props) {
  return (
    <html lang='en'>
      <body className=''>
        <header>
        <Navbar />
        </header>
        <main>{children}</main>
        <footer>
          <p className=''>© 2024 My Ecommerce App</p>
        </footer>
      </body>
    </html>
  );
}
