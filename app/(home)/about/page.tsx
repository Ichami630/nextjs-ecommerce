import Link from "next/link"
import Banner from "../../../components/Banner"
import Image from "next/image"

const page = () => {
  return (
    <>
        <Banner />
        <div className="mx-4 px-4 py-10">
            {/* Company Introduction */}
            <section className="mt-12">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    {/* Text Content */}
                    <div>
                    <h2 className="text-2xl font-semibold text-gray-800">Who We Are</h2>
                    <p className="mt-4 text-gray-600">
                        Based in the heart of <strong>Tokyo, Japan</strong>, we specialize in providing top-quality <strong>used cars, spare parts, household equipment, and electronics</strong>.
                        But we {`don't`} stop there. We also assist with <strong>transportation, relocation, and general moving of goods and services</strong>.
                    </p>
                    <p className="mt-4 text-gray-600">
                        Additionally, we offer <strong>business consultation, educational consultation, and related advisory services</strong> to help individuals and businesses succeed in Japan and beyond.
                    </p>
                    </div>
  
                    {/* Image */}
                    <div className="rounded-lg shadow-lg overflow-hidden">
                    <Image width={600} height={400} src="/banner3.webp" alt="Company Overview" className="w-full h-[300px] object-cover"/>
                    </div>
                </div>
            </section>
  
            {/* Services Section */}
            <section className="mt-16">
                <h2 className="text-center text-2xl font-bold text-gray-800">Our Services</h2>
                <p className="text-center text-gray-600 mt-2">
                    A one-stop solution for vehicles, electronics, moving, and business needs.
                </p>
  
                <div className="grid md:grid-cols-3 gap-8 mt-8">
                    {/* Service Cards */}
                    <div className="p-6 border rounded-lg shadow-sm text-center">
                    <span className="text-4xl">🚗</span>
                    <h3 className="font-semibold text-lg mt-3">Used Cars & Spare Parts</h3>
                    <p className="text-gray-600 mt-2">
                        High-quality pre-owned cars and authentic spare parts at competitive prices.
                    </p>
                    </div>
  
                    <div className="p-6 border rounded-lg shadow-sm text-center">
                    <span className="text-4xl">📦</span>
                    <h3 className="font-semibold text-lg mt-3">Relocation & Moving</h3>
                    <p className="text-gray-600 mt-2">
                        Hassle-free transportation solutions for your goods and services.
                    </p>
                    </div>
  
                    <div className="p-6 border rounded-lg shadow-sm text-center">
                    <span className="text-4xl">📊</span>
                    <h3 className="font-semibold text-lg mt-3">Business Consultation</h3>
                    <p className="text-gray-600 mt-2">
                        Expert business & educational advisory services to help you thrive.
                    </p>
                    </div>
                </div>
            </section>
  
            {/* Why Choose Us Section */}
            <section className="mt-16 bg-gray-100 p-8 rounded-lg">
                <h2 className="text-center text-2xl font-bold text-gray-800">Why Choose Us?</h2>
                <p className="text-center text-gray-600 mt-2">
                    Experience, quality, and reliability—your success is our mission.
                </p>
  
                <div className="grid md:grid-cols-2 gap-8 mt-8">
                    <div className="flex items-center space-x-4">
                    <span className="text-3xl">✅</span>
                    <p className="text-gray-700">Over a decade of experience in the automobile and logistics industry.</p>
                    </div>
  
                    <div className="flex items-center space-x-4">
                    <span className="text-3xl">🌍</span>
                    <p className="text-gray-700">International reach with strong connections across Japan and beyond.</p>
                    </div>
  
                    <div className="flex items-center space-x-4">
                    <span className="text-3xl">💼</span>
                    <p className="text-gray-700">Comprehensive business consultation services tailored to your needs.</p>
                    </div>
  
                    <div className="flex items-center space-x-4">
                    <span className="text-3xl">📦</span>
                    <p className="text-gray-700">Reliable transportation and relocation assistance for businesses and individuals.</p>
                    </div>
                </div>
            </section>
  
            {/* Call to Action */}
            <section className="mt-16 text-center">
                <h2 className="text-2xl font-bold text-gray-800">Let’s Work Together</h2>
                <p className="text-gray-600 mt-2">
                    Need a vehicle, assistance with moving, or expert consultation? We’re here to help.
                </p>
                <Link href="/contact" className="inline-block mt-4 bg-primary text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-black transition">Contact Us Today</Link>
            </section>
        </div>
    </>
  )
}

export default page