// (admin)/layout.tsx
'use client';
import { ReactNode, useState } from 'react';
import { usePathname } from 'next/navigation';
import Sidebar from '../../components/admin/Sidebar';
import Navbar from '../../components/admin/Navbar';
import Footer from '../../components/admin/Footer';
import '../globals.css';

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathName = usePathname();
  const loginPathName = pathName.startsWith("/admin/login");

  if (loginPathName) {
    return (
      <html lang='en'>
        <body>
          <div className="flex flex-col h-screen">
            {children}
          </div>
        </body>
      </html>
    );
  }

  // Toggle sidebar visibility
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <html lang='en'>
      <body className="font-body">
        <div className="flex h-screen">
          {/* Sidebar Component */}
          <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

          {/* Main content area */}
          <div className="flex flex-col flex-grow ml-0 lg:ml-64">
            {/* Navbar Component */}
            <Navbar toggleSidebar={toggleSidebar} />

            {/* Main content */}
            <main className="flex-grow bg-gray-100 p-6">
              {children}
            </main>

            {/* Footer Component */}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
};

export default Layout;
