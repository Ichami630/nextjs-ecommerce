import { Suspense } from "react"; // Ensure Suspense is imported
import { useSearchParams } from "next/navigation"; // Make sure useSearchParams is from next/navigation
import Link from "next/link";
import { AlignJustify, Plus } from "lucide-react"
import FormCard from "./FormCard";
import ProductDataTable from "./ProductDataTable";

//page title and form fiels
const fields = [
    {type: "text", label: "Product Name", name: "product-name", required: true},
    {type: "text", label: "Product Slug", name: "product-slug", placeholder: "e.g: nissan-caravan", required: true},
    {type: "select", label: "Category", name: "category", options: [{value: 0, name: "-- select a category --"},{value: 1, name: "Used Cars"},{value: 2, name: "Household Equipements"},{value: 3, name: "Electronics"},{value: 4, name: "Car Parts"}], required: true},
    {type: "text", label: "Stock Quantity", name: "stock", placeholder: "default 1", required: false},
    {type: "text", label: "Mnm Order Quantity", name: "mnmOrder",placeholder: "default 1", required: false},
    {type: "text", label: "Estimated Delivery", name: "delivery",placeholder: "e.g 4 working days", required: false},
    {type: "textarea", label: "SEO Keywords", name: "seo-keywords", required: false},
    {type: "textarea", label: "About Product", name: "description", required: true}
  ]

const Page = () => {
  return (
    <Suspense fallback={<div>Loading product details...</div>}>
      <ProductPage />
    </Suspense>
  );
}

const ProductPage = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id"); // Get id from the URL parameter

  return (
    <>
      <div className="absolute bottom-20 lg:bottom-40 z-50 right-5 hidden lg:block">
        <div className="flex flex-col space-y-2">
          <Link href="/" className="flex flex-row items-center space-x-1 p-2 text-sm border-r-0 bg-primary">
            <AlignJustify size={20} />
            <div className="font-bold">All Products</div>
          </Link>
          <Link href="/" className="flex flex-row items-center space-x-1 p-2 rounded-md text-sm border-r-0 bg-gray-400 text-white">
            <Plus size={20} />
            <div className="font-bold">Add Product</div>
          </Link>
        </div>
      </div>

      {/* Suspense boundary is now wrapped around this section */}
      <Suspense fallback={<div>Loading product details...</div>}>
        <FormCard fields={fields} title="Product" pageRoute="/admin/products/add" />
      </Suspense>

      {/* Render ProductDataTable only when id is present */}
      {id && (
        <Suspense fallback={<div>Loading existing product variations...</div>}>
          <ProductDataTable id={id} />
        </Suspense>
      )}
    </>
  );
}

export default Page;
