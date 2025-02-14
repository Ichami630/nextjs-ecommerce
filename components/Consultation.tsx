import Link from "next/link"
function Consultation() {

  return (
    <div className="relative w-full h-full mb-10"
    style={{
        backgroundImage: "url(/banner3.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center"
    }}
    >
        <div className=" bg-black bg-opacity-85 flex flex-col text-white p-4 space-y-6 pl-8">
            <h1 className="text-3xl lg:text-4xl font-extrabold w-2/3 lg:w-1/3 flex flex-nowrap justify-center md:justify-start md:flex-wrap">Need Expert Auto Advice? we are Here to Help!</h1>
            <p className="text-gray-200 w-2/3 lg:w-1/3">Not sure which car to buy? Need help choosing the right auto accessories? Our team of experts is ready to guide you with professional advice tailored to your needs.</p>
            <Link href="/contact" className="bg-primary w-44 text-black rounded-full flex justify-center items-center p-4 hover:bg-black hover:text-white font-semibold transition duration-500 ease-in-out">Book Consultation</Link>
        </div>
    </div>
  )
}

export default Consultation