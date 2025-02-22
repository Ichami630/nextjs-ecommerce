import Link from "next/link";
const Footer = () => {
    return (
      <footer className="bg-white shadow-md  p-4 bottom-0">
        <div className="text-center">copyright - {new Date().getFullYear()} <Link href="/" className="font-bold hover:underline">MG Smart Trading</Link></div>
      </footer>
    );
  };
  
  export default Footer;
  