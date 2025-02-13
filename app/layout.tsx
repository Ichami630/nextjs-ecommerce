import Navbar from '../components/Navbar';
import { ReactNode } from 'react';
import "./globals.css";
import Footer from '../components/Footer';
import Newsletter from '../components/Newsletter';

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
          <Newsletter />
          <Footer />
        </footer>
      </body>
    </html>
  );
}
