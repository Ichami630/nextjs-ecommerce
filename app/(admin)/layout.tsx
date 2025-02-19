'use client';
import {ReactNode} from 'react';
import '../globals.css';
import { usePathname } from 'next/navigation';

interface props {
    children: ReactNode;
}

const Layout = ({children}:props) => {
  const pathName = usePathname();
  const loginPathName = pathName.startsWith("/admin/login");

  if(loginPathName){
    return (
      <html lang='en'>
      <body>
      <div className="flex flex-col h-screen">
        {children}
      </div>
      </body>
      </html>
    )
  }
  return (
    <html lang='en'>
    <body>
    <div className="flex flex-col h-screen">
      <header>
        <p>this is the header</p>
      </header>
      {children}
      <footer>
        <p>this is the footer</p>
      </footer>
    </div>
    </body>
    </html>
  )
}

export default Layout