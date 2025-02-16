import Link from "next/link"
function Consultation() {

  return (
    <div className="relative w-full mb-10"
    style={{
        backgroundImage: "url(/banner3.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center"
    }}
    >
        <div className="bg-black bg-opacity-85 flex flex-col justify-center md:justify-start text-white p-4 gap-6 px-6">
            <h1 className="text-3xl lg:text-4xl font-extrabold w-full lg:w-1/3 flex flex-nowrap justify-center md:justify-start md:flex-wrap">Need Expert Advice? we are Here to Help!</h1>
            <p className="text-gray-200 w-full lg:w-1/3">Not sure which car to buy? Need help choosing the right auto accessories? Our team of experts is ready to guide you with professional advice tailored to your needs.</p>
            <Link href="/contact" className="bg-primary w-44 text-black rounded-full flex justify-center items-center p-4 hover:bg-black hover:text-white font-semibold transition duration-500 ease-in-out">Book Consultation</Link>
        </div>
    </div>
  )
}

export default Consultation