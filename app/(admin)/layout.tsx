// (admin)/layout.tsx
'use client';
import { ReactNode, useState,useEffect } from 'react';
import { usePathname,useRouter } from 'next/navigation';
import Sidebar from '../../components/admin/Sidebar';
import Navbar from '../../components/admin/Navbar';
import Footer from '../../components/admin/Footer';
import '../globals.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  const route = useRouter()
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathName = usePathname();
  const loginPathName = pathName.startsWith("/admin/login");

  useEffect(()=>{
    const isAuthenticated = localStorage.getItem("isAuthenticated");

  if(pathName.startsWith("/admin") && !loginPathName && !isAuthenticated){
    route.push("/admin/login");
  }
  },[pathName,route,loginPathName])

  if (loginPathName) {
    return (
      <html lang='en'>
        <body>
          <div className="flex flex-col h-screen">
            {children}
          </div>
          <ToastContainer />
        </body>
      </html>
    );
  }

  // Toggle sidebar visibility
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <html lang='en'>
      <body className="font-body">
        <div className="flex min-h-screen lg:overflow-x-auto">
          {/* Sidebar Component */}
          <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

          {/* Main content area */}
          <div className="flex flex-col flex-grow ml-0 lg:ml-64">
            {/* Navbar Component */}
            <Navbar toggleSidebar={toggleSidebar} />

            {/* Main content */}
            <main className="flex-grow bg-gray-100 p-6 flex flex-col min-h-[calc(100vh-100px)]">
              {children}
            </main>

            {/* Footer Component */}
            <ToastContainer />
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
};

export default Layout;
