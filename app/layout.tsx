import Navbar from '../components/Navbar';
import { ReactNode } from 'react';
import "./globals.css";
import Footer from '../components/Footer';

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
        <div className="flex flex-col min-h-screen">
          <main className="flex-grow">{children}</main>
        </div>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
