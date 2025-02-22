"use client"
import Image from "next/image"
import { useRouter } from "next/navigation"
import {toast} from "react-toastify"
import {login} from "../../../../utils/authServer"

const Page = () => {
  const route = useRouter()
  //handling form submittion
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault() //prevents default form action (page refresh)
    const formData = new FormData(e.currentTarget); //get form input values
    const result = await login(formData); //calls server action

    if(result.success){
      localStorage.setItem("isAuthenticated","true");
      route.push("/admin") //redirect to admin page on successful login
    }else{
      toast.error(result.message); //displays error notification
    }
  }
    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
          <div className="shadow-md rounded-md p-8 bg-white mx-4">
            <form onSubmit={handleSubmit}>
              {/* Logo & Title */}
              <div className="flex space-x-3 items-center justify-center mb-4">
                <Image src="/logo.webp" alt="logo" width={75} height={75} />
                <div className="text-2xl font-bold">MG Smart Trading</div>
              </div>
      
              {/* Welcome Message */}
              <div className="text-2xl text-gray-600">Welcome to MG Smart Trading! 👋</div>
              <div className="text-sm text-gray-400 mt-2">
                Please sign in to your account and start the adventure
              </div>
      
              {/* Form Fields */}
              <div className="flex flex-col space-y-4 mt-6">
                <label htmlFor="username">
                  Username or Email <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  required
                  className="border p-2 rounded-md w-full"
                />
      
                <label htmlFor="password">
                  Password <span className="text-red-600">*</span>
                </label>
                <input
                  type="password"
                  id="password"
                  required
                  name="password"
                  className="border p-2 rounded-md w-full"
                />
      
                <div className="text-gray-400 hover:text-primary hover:underline cursor-pointer">
                  Forgot password?
                </div>
      
                {/* Login Button */}
                <button
                  type="submit"
                  className="p-2 text-black bg-primary hover:bg-black hover:text-white rounded-md"
                >
                  LOGIN
                </button>
              </div>
            </form>
          </div>
        </div>
      );
      
}

export default Page