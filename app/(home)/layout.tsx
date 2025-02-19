
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Newsletter from "../../components/Newsletter";
import { ReactNode } from "react";
import "../globals.css";

interface Props {
  children: ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body>
        <div className="">
        {/* Navbar */}
        <main className="flex flex-col min-h-screen">
        <header>
          <Navbar />
        </header>

        {/* Main Content */}
        {children}

        {/* Footer with Newsletter */}
        <footer>
          <Newsletter />
          <Footer />
        </footer>
        </main>
        </div>
      </body>
    </html>
  );
}
