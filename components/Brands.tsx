
import Image from 'next/image';

function Brands() {
    interface Brands {
        id: number;
        name: string
        image: string;
    }

    const brands: Brands[] = [
        {
            id: 1,
            name: 'toyota',
            image: '/brands/toyota.jpeg'
        },
        {
            id: 2,
            name: 'bmw',
            image: '/brands/bmw.jpeg'
        },
        {
            id: 3,
            name: 'ford',
            image: '/brands/ford.png'
        },
        {
            id: 4,
            name: 'hyundai',
            image: '/brands/hyndai.png'
        },
    ]
  return (
    <div className="mb-10 px-4">
        <h2 className="font-extrabold text-3xl text-center mb-10">Popular Brands</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4">
            {brands.map((brand) => (
                <div key={brand.id} className="border border-gray-300 p-4 flex justify-center items-center">
                    <div className="relative w-[150px] h-[100px]">
                        <Image
                        src={brand.image}
                        alt={brand.name}
                        layout="fill"
                        objectFit="contain" /* Ensures full image is visible */
                        className="transition-transform duration-300 ease-in-out hover:scale-95"
                        />
                    </div>
                </div>
            ))}
        </div>

    </div>
  )
}

export default Brands