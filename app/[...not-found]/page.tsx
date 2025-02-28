import Link from "next/link"
import { TriangleAlert } from "lucide-react"

const page = () => {
  return (
    
        <div className="my-0 mx-auto">
            <div className="my-10">
                <div className="flex flex-col items-center">
                    <TriangleAlert size={100} className="text-primary"/>
                    <h1>Opps...</h1>
                    <h2>This page could not be found</h2>
                    <p>Go Back <Link className="text-secondary hover:underline" href="/">home</Link> </p>
                </div>
            </div>
        </div>
    
  )
}

export default page