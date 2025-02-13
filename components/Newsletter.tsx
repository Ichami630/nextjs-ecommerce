
const Newsletter = () => {
  return (
    <div className="bg-primary">
        <div className="flex justify-center items-center flex-col space-y-8 py-12 px-4">
            <div className="text-black text-3xl font-bold text-center">Join Our Newsletter</div>
            <p className="text-center">
            Subscribe to our latest newsletter to get news about special discounts and upcoming sales.
            </p>
            <form className="w-full max-w-lg">
                <div className="flex flex-col lg:flex-row justify-center items-center gap-4">
                    <input type="email" name="email" className="w-full max-w-md rounded-full outline-none px-4 py-2" placeholder="Email"/>
                    <button type="submit" className="w-full max-w-md lg:w-auto bg-black text-white px-6 py-2 rounded-full">SUBSCRIBE</button>
                </div>
            </form>
        </div>
    </div>

  )
}

export default Newsletter