"use client";

import Image from "next/image";

import {
  Pencil,
  Trash2,
  Plus,
  Search,
} from "lucide-react";

import {
  useEffect,
  useMemo,
  useState,
} from "react";

import ProductModal from "./ProductModal";

import { Product } from "@/types/product";

import {
  createProduct,
  getProducts,
  uploadProductImages,
  updateProduct,
  deleteProduct
} from "@/lib/api/products";

import Toast from "@/components/ui/Toast";

import { supabase } from "@/lib/supabase";

import { set, success } from "zod";
import DeleteWarning from "@/components/ui/DeleteWarning";



const Products = () => {

  /* ==========================================================
                            STATES
  ========================================================== */

  const [open, setOpen] =
    useState<boolean>(false)

  const [products, setProducts] =
    useState<Product[]>([]);

  const [error, setError] =
    useState<string | null>(null);

  const [success, setSuccess] =
  useState<string | null>(null);

  const [searchQuery, setSearchQuery] =
    useState("");

  const [editingProduct, setEditingProduct] =
    useState<Product | null>(null);

    const [deleteModalOpen,setDeleteModalOpen]=useState<boolean>(false)
const [productToDelete,setProductToDelete]=useState<Product|null>(null)

    const handleDelete=()=>{
deleteProduct(productToDelete!?.id!).then((res)=>{
  //console.log(res)
  setSuccess(res.message)
  setProducts((prev) =>
  prev.filter((product) => product.id !== productToDelete!.id!)
);
  setDeleteModalOpen(false)
}).catch((error)=>{
     setError(
          error instanceof Error
            ? error.message
            : "Failed to delete product"
        );
})

      setDeleteModalOpen(false)
    }

  /* ==========================================================
                         GET PRODUCTS
  ========================================================== */

  useEffect(() => {

    getProducts()

      .then((products) => {

        setProducts(products);

      })

      .catch((error) => {

        setError(
          error instanceof Error
            ? error.message
            : "Failed to fetch products"
        );

      });

  }, []);


  /* ==========================================================
                           SEARCH
  ========================================================== */

  const filteredProducts =
    useMemo(() => {

      const query =
        searchQuery
          .trim()
          .toLowerCase();

      if (!query) {
        return products;
      }

      return products.filter(
        (product) =>
          product.title
            .toLowerCase()
            .includes(query) ||

          product.category
            .toLowerCase()
            .includes(query)
      );

    }, [
      products,
      searchQuery,
    ]);


  /* ==========================================================
                         ADD PRODUCT
  ========================================================== */

  const handleAddProduct = () => {

    setEditingProduct(null);

    setOpen(true);

  };


  /* ==========================================================
                         EDIT PRODUCT
  ========================================================== */

  const handleEditProduct = (
    product: Product
  ) => {

    setEditingProduct(product);

    setOpen(true);

  };


  /* ==========================================================
                       SAVE PRODUCT
  ========================================================== */

  const handleSaveProduct = (
    product: Product,
    imageFiles: File[]
  ) => {

    /* ========================================================
                           ADD
    ======================================================== */

    if (!editingProduct) {

      uploadProductImages(imageFiles)

        .then((uploadedPaths) => {

          return createProduct({

            ...product,

            images:
              uploadedPaths,

          });

        })

        .then((createdProduct) => {

          setProducts((prev) => [

            {
              ...createdProduct,
            },

            ...prev,

          ]);

          setSuccess("Product creation successfull");

          setOpen(false);

        })

        .catch((error) => {

          setError(
            error instanceof Error
              ? error.message
              : "Failed to create product"
          );

          console.error(
            "Failed to create product:",
            error
          );
          

        });

      return;
    }


    /* ========================================================
                           EDIT
    ======================================================== */

    console.log(
      "Editing product:",
      editingProduct
    );

    console.log("Image files for updation",imageFiles)

       uploadProductImages(imageFiles)

        .then((uploadedPaths) => {
          updateProduct(editingProduct!.id!,{...product,images:uploadedPaths})
          .then((updatedProduct)=>{
  console.log(
      "Edited product:",
      updatedProduct
    );
setProducts((prev)=>
  prev.map((product)=>{
    if(product.id==editingProduct.id)return updatedProduct
    return product
  })
//  return prev
)   
  setSuccess("Product updated successfully")
  setOpen(false)
  

          }).catch((error)=>{
              setError(
            error instanceof Error
              ? error.message
              : "Failed to update products"
          );

          console.error(
            "Failed to update products:",
            error
          );
          })

        

        })
          .catch((error)=>{
     setError(
            error instanceof Error
              ? error.message
              : "Failed to upload images"
          );

          console.error(
            "Failed to upload images:",
            error
          );

        });
          
 

  };


  /* ==========================================================
                              UI
  ========================================================== */

  return (

    <>

      <section>

        {/* ======================================================
                              HEADER
        ====================================================== */}

        <div
          className="
            mb-8
            flex
            items-center
            justify-between
          "
        >

          <button
            onClick={
              handleAddProduct
            }
            className="
              flex
              cursor-pointer
              items-center
              gap-2
              rounded-xl
              bg-yellow-500
              px-5
              py-3
              font-semibold
              transition
              hover:bg-yellow-600
            "
          >

            <Plus size={20} />

            Add Product

          </button>

        </div>


        {/* ======================================================
                              SEARCH
        ====================================================== */}

        <div className="mb-8">

          <div className="relative max-w-md">

            <Search
              size={18}
              className="
                absolute
                left-4
                top-1/2
                -translate-y-1/2
                text-gray-400
              "
            />

            <input
              type="text"
              value={searchQuery}
              onChange={(e) =>
                setSearchQuery(
                  e.target.value
                )
              }
              placeholder="Search product..."
              className="
                w-full
                rounded-xl
                border
                py-3
                pl-11
                pr-4
                outline-none
                transition
                focus:border-yellow-500
              "
            />

          </div>

        </div>


        {/* ======================================================
                         RESULT COUNT
        ====================================================== */}

        {searchQuery.trim() && (

          <p className="mb-4 text-sm text-gray-500">

            {filteredProducts.length}{" "}

            {filteredProducts.length === 1
              ? "product"
              : "products"}{" "}

            found

          </p>

        )}


        {/* ======================================================
                         MOBILE PRODUCTS
        ====================================================== */}

        <div className="space-y-4 lg:hidden">

          {filteredProducts.map(
            (product) => (

              <div
                key={product.id}
                className="
                  rounded-2xl
                  border
                  bg-white
                  p-4
                  shadow-sm
                "
              >

                <div className="flex gap-4">

                  {/* IMAGE */}

                  {product.images!?.length > 0 && (

                    <Image
                      src={
                        supabase.storage
                          .from("Products")
                          .getPublicUrl(
                            product.images![0]
                          )
                          .data.publicUrl
                      }
                      alt={product.title}
                      width={70}
                      height={70}
                      className="
                        rounded-xl
                        object-cover
                      "
                    />

                  )}


                  {/* INFO */}

                  <div className="min-w-0 flex-1">

                    <h3 className="truncate font-semibold">
                      {product.title}
                    </h3>

                    <p className="mt-1 text-sm text-gray-500">
                      {product.category}
                    </p>

                    <div
                      className="
                        mt-3
                        flex
                        items-center
                        justify-between
                      "
                    >

                      <span className="font-bold">
                        ৳{product.price}
                      </span>

                      <span
                        className={`
                          rounded-full
                          px-3
                          py-1
                          text-xs
                          font-semibold

                          ${
                            product.isTrending
                              ? "bg-green-100 text-green-700"
                              : "bg-gray-100 text-gray-600"
                          }
                        `}
                      >

                        {product.isTrending
                          ? "🔥 Trending"
                          : "Normal"}

                      </span>

                    </div>

                    <div
                      className="
                        mt-3
                        flex
                        items-center
                        justify-between
                      "
                    >

                      <span className="text-sm text-gray-500">
                        Stock: {product.stock}
                      </span>

                      <div className="flex gap-2">

                        <button
                          onClick={() =>
                            handleEditProduct(
                              product
                            )
                          }
                          className="
                            rounded-lg
                            bg-blue-100
                            cursor-pointer
                            p-2
                            text-blue-700
                            hover:bg-blue-200
                          "
                        >
                          <Pencil size={18} />
                        </button>

                        <button
                        onClick={()=>{
                          setDeleteModalOpen(true)
                          setProductToDelete(product)
                        }}
                          className="
                            rounded-lg
                            cursor-pointer
                            bg-red-100
                            p-2
                            text-red-700
                            hover:bg-red-200
                          "
                        >
                          <Trash2 size={18} />
                        </button>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

            )
          )}

        </div>


        {/* ======================================================
                         NO MOBILE RESULTS
        ====================================================== */}

        {filteredProducts.length === 0 && (

          <div
            className="
              rounded-2xl
              border
              bg-white
              p-10
              text-center
              text-gray-500
              lg:hidden
            "
          >
            No products found.
          </div>

        )}


        {/* ======================================================
                         DESKTOP TABLE
        ====================================================== */}

        <div
          className="
            hidden
            overflow-hidden
            rounded-2xl
            border
            bg-white
            shadow-sm
            lg:block
          "
        >

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

                {filteredProducts.map(
                  (product) => (

                    <tr
                      key={product.id}
                      className="
                        border-b
                        hover:bg-gray-50
                      "
                    >

                      {/* PRODUCT */}

                      <td className="px-6 py-5">

                        <div className="flex items-center gap-4">

                          {product.images!?.length > 0 && (

                            <div
                              className="
                                relative
                                h-14
                                w-14
                                shrink-0
                                overflow-hidden
                                rounded-xl
                              "
                            >

                              <Image
                                src={
                                  supabase.storage
                                    .from("Products")
                                    .getPublicUrl(
                                      product.images![0]
                                    )
                                    .data.publicUrl
                                }
                                alt={product.title}
                                fill
                                className="object-cover"
                              />

                            </div>

                          )}

                          <p className="font-semibold">
                            {product.title}
                          </p>

                        </div>

                      </td>


                      {/* CATEGORY */}

                      <td className="px-6">
                        {product.category}
                      </td>


                      {/* PRICE */}

                      <td className="px-6 font-semibold">
                        ৳{product.price}
                      </td>


                      {/* STOCK */}

                      <td
                        className={`
                          px-6

                          ${
                            product.stock === 0
                              ? "font-semibold text-red-500"
                              : ""
                          }
                        `}
                      >
                        {product.stock}
                      </td>


                      {/* STATUS */}

                      <td className="px-6">

                        <span
                          className={`
                            rounded-full
                            px-3
                            py-1
                            text-sm
                            font-semibold

                            ${
                              product.isTrending
                                ? "bg-green-100 text-green-700"
                                : "bg-gray-100 text-gray-600"
                            }
                          `}
                        >

                          {product.isTrending
                            ? "🔥 Trending"
                            : "Normal"}

                        </span>

                      </td>


                      {/* ACTION */}

                      <td>

                        <div
                          className="
                            flex
                            justify-center
                            gap-3
                          "
                        >

                          <button
                            onClick={() =>
                              handleEditProduct(
                                product
                              )
                            }
                            className="
                            cursor-pointer
                              rounded-lg
                              bg-blue-100
                              p-2
                              text-blue-700
                                cursor-pointer
                              hover:bg-blue-200
                            "
                          >
                            <Pencil size={18} />
                          </button>


                          <button
                          onClick={()=>{
                            setDeleteModalOpen(true)
                            setProductToDelete(product)
                          }}
                            className="
                              rounded-lg
                              bg-red-100
                              p-2
                              text-red-700
                              hover:bg-red-200
                              cursor-pointer
                            "
                          >
                            <Trash2 size={18} />
                          </button>

                        </div>

                      </td>

                    </tr>

                  )
                )}

              </tbody>

            </table>

          </div>

        </div>


        {/* ======================================================
                         NO DESKTOP RESULTS
        ====================================================== */}

        {filteredProducts.length === 0 && (

          <div
            className="
              mt-4
              hidden
              rounded-2xl
              border
              bg-white
              p-10
              text-center
              text-gray-500
              lg:block
            "
          >
            No products found.
          </div>

        )}

      </section>


      {/* ========================================================
                           PRODUCT MODAL
      ======================================================== */}

      <ProductModal
        handleAddProduct={
          handleSaveProduct
        }

        open={open}

        onClose={() => {

          setOpen(false);

          setEditingProduct(null);

        }}

        editingProduct={
          editingProduct
        }
      />


      {/* ========================================================
                            ERROR TOAST
      ======================================================== */}

      {error && (

        <Toast
          type="error"
          message={error}
          onClose={() =>
            setError(null)
          }
        />

      )}


      {/* ========================================================
                          SUCCESS TOAST
      ======================================================== */}

      {success && (

        <Toast
          type="success"
          message={success!}
          onClose={() =>
            setSuccess(null)
          }
        />

      )}

      <DeleteWarning
  open={deleteModalOpen}
  title="Delete Product?"
  message={`Are you sure you want to delete "${productToDelete?.title}"? This action cannot be undone.`}
  onCancel={() => {
    setDeleteModalOpen(false);
    setProductToDelete(null);
  }}
  onConfirm={handleDelete}
/>

    </>

  );
};


export default Products;