import Image from "next/image";
import {
  Pencil,
  Trash2,
  Plus,
  Search,
} from "lucide-react";

import { useState } from "react";
import ProductModal from "./ProductModal";
import { Product } from "@/types/product";
import { createProduct, uploadProductImages } from "@/lib/api/products";
import Toast from "@/components/ui/Toast";


// export const mockproducts: Product[] = [
//   {
//     id: "1",
//     images: [
//       "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
//     ],
//     title: "Sony Wireless Headphone",
//     description: "Premium wireless headphones with high-quality sound.",
//     category: "Audio",
//     price: 5990,
//     oldPrice: 6990,
//     stock: 12,
//     // status: "In Stock",
//     warranty: "1 Year",
//     isTrending: true,
//   },
//   {
//     id: "2",
//     images: [
//       "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=500",
//     ],
//     title: "Anker Power Bank",
//     description: "High-capacity portable power bank for everyday use.",
//     category: "Accessories",
//     price: 2490,
//     oldPrice: 2990,
//     stock: 8,
//     // status: "In Stock",
//     warranty: "1 Year",
//     isTrending: false,
//   },
//   {
//     id: "3",
//     images: [
//       "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=500",
//     ],
//     title: "Gaming Earbuds",
//     description: "Low-latency gaming earbuds with immersive sound.",
//     category: "Gaming",
//     price: 1490,
//     oldPrice: 1990,
//     stock: 0,
//     // status: "Out of Stock",
//     warranty: "6 Months",
//     isTrending: true,
//   },
// ];


 const    Products=()=>{
    const [open, setOpen] = useState(false);
   const [products, setProducts] = useState<Product[]>([]);
  // const [productImageFiles,setProductImageFiles]=useState<File[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [succuess,setSuccess]=useState<boolean>(false)
const handleAddProduct = (product: Product,imageFiles:File[]) => {
  console.log("Inside products", imageFiles)
  console.log("inside products",product)

  uploadProductImages(imageFiles).then((uploadedPaths)=>{
    console.log(uploadedPaths,"They all are the uploaded paths")
      createProduct({...product,images:uploadedPaths})
    .then((createdProduct) => {
      console.log(createProduct,"This is the creted new product")
      setProducts((prev) => [{...createdProduct,images:uploadedPaths}, ...prev]);
      setSuccess(true)

    })
    .catch((error) => {
      setError(error.message)
     console.error("Failed to create product:", error);
    });

  }).catch((error)=>{
    setError("Failed to upload image")
   // console.log("Some error",error)
  })

};
    return(
        <>
        <section>
        
              {/* Header */}
        
              <div className="mb-8 flex items-center justify-between">
        
        
               <button
  onClick={() => setOpen(true)}
  className="flex items-center gap-2 rounded-xl bg-yellow-500 px-5 py-3 font-semibold hover:bg-yellow-600 cursor-pointer transition" 
>
  <Plus size={20} />
  Add Product
</button>
        
              </div>
        
              {/* Search */}
        
              <div className="mb-8">
        
                <div className="relative max-w-md">
        
                  <Search
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  />
        
                  <input
                    placeholder="Search product..."
                    className="
                      w-full
        
                      rounded-xl
        
                      border
        
                      py-3
        
                      pl-11
        
                      pr-4
        
                      outline-none
        
                      focus:border-yellow-500
                    "
                  />
        
                </div>
        
              </div>

              {/* ================= MOBILE CARD ================= */}

<div className="space-y-4 lg:hidden">
  {products.map((product) => (
    <div
      key={product.id}
      className="rounded-2xl border bg-white p-4 shadow-sm"
    >
      <div className="flex gap-4">
        {/* <Image
          src={product.image[0]}
          alt={product.title}
          width={70}
          height={70}
          className="rounded-xl object-cover"
        /> */}

        <div className="min-w-0 flex-1">
          <h3 className="truncate font-semibold">
            {product.title}
          </h3>

          <p className="mt-1 text-sm text-gray-500">
            {product.category}
          </p>

          <div className="mt-3 flex items-center justify-between">
            <span className="font-bold">
              ৳{product.price}
            </span>

            <span
              className={`rounded-full px-3 py-1 text-xs font-semibold ${
                product.stock > 0
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {/* {product.status} */}
            </span>
          </div>

          <div className="mt-3 flex items-center justify-between">
            <span className="text-sm text-gray-500">
              Stock: {product.stock}
            </span>

            <div className="flex gap-2">
              <button
                onClick={() => setOpen(true)}
                className="rounded-lg bg-blue-100 p-2 text-blue-700 hover:bg-blue-200"
              >
                <Pencil size={18} />
              </button>

              <button className="rounded-lg bg-red-100 p-2 text-red-700 hover:bg-red-200">
                <Trash2 size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  ))}
</div>
        
              {/* Table */}
        
             <div className="hidden lg:block overflow-hidden rounded-2xl border bg-white shadow-sm">
        
                <div className="overflow-x-auto">
        
                  <table className="w-full">
        
                    <thead>
        
                      <tr className="border-b bg-gray-50">
        
                        <th className="px-6 py-4 text-left">
        
                          Product
        
                        </th>
        
                        <th className="px-6 py-4 text-left">
        
                          Category
        
                        </th>
        
                        <th className="px-6 py-4 text-left">
        
                          Price
        
                        </th>
        
                        <th className="px-6 py-4 text-left">
        
                          Stock
        
                        </th>
        
                        <th className="px-6 py-4 text-left">
        
                          Status
        
                        </th>
        
                        <th className="px-6 py-4 text-center">
        
                          Action
        
                        </th>
        
                      </tr>
        
                    </thead>
        
                    <tbody>
        
                      {products.map((product) => (
        
                        <tr
                          key={product.id}
                          className="border-b hover:bg-gray-50"
                        >
        
                          <td className="px-6 py-5">
        
                            <div className="flex items-center gap-4">
        
                              {/* <Image
                                src={product.image}
                                alt={product.title}
                                width={70}
                                height={70}
                                className="rounded-xl object-cover"
                              /> */}
        
                              <p className="font-semibold">
        
                                {product.title}
        
                              </p>
        
                            </div>
        
                          </td>
        
                          <td className="px-6">
        
                            {product.category}
        
                          </td>
        
                          <td className="px-6 font-semibold">
        
                            ৳{product.price}
        
                          </td>
        
                          <td className="px-6">
        
                            {product.stock}
        
                          </td>
        
                          <td className="px-6">
        
                            <span
                              className={`rounded-full px-3 py-1 text-sm font-semibold
        
                              ${
                                product.stock > 0
                                  ? "bg-green-100 text-green-700"
                                  : "bg-red-100 text-red-700"
                              }`}
                            >
        
                              {/* {product.status} */}
        
                            </span>
        
                          </td>
        
                          <td>
        
                            <div className="flex justify-center gap-3">
        
                              <button className="rounded-lg bg-blue-100 p-2 text-blue-700 hover:bg-blue-200" onClick={() => setOpen(true)}>
        
                                <Pencil size={18} />
        
                              </button>
        
                              <button className="rounded-lg bg-red-100 p-2 text-red-700 hover:bg-red-200">
        
                                <Trash2 size={18} />
        
                              </button>
        
                            </div>
        
                          </td>
        
                        </tr>
        
                      ))}
        
                    </tbody>
        
                  </table>
        
                </div>

              </div>
        
            </section>
        <ProductModal
      handleAddProduct={handleAddProduct}
  open={open}
  onClose={() => setOpen(false)}
/>

{error && (
  <Toast
    type="error"
    message={error}
    onClose={() => setError(null)}
  />
)}

{succuess && (
  <Toast
    type="success"
    message="Product creation successfull"
    onClose={() => setSuccess(false)}
  />
)}
            </>
    )
}
export default Products;