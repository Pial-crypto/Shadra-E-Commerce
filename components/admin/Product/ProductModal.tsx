"use client";

import { X } from "lucide-react";
import { useEffect, useState } from "react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import ImageUploader from "./ImageUploader";

import { Product } from "@/types/product";

import {
  ProductFormData,
  productSchema,
} from "@/schemas/product.schema";

import { supabase } from "@/lib/supabase";


interface ProductModalProps {
  open: boolean;
  onClose: () => void;

  editingProduct?: Product | null;

  handleAddProduct: (
    product: Product,
    imageFiles: File[]
  ) => void;
}


export default function ProductModal({
  open,
  onClose,
  handleAddProduct,
  editingProduct,
}: ProductModalProps) {

  /* ==========================================================
                            STATES
  ========================================================== */

  const [existingFiles, setExistingFiles] =
    useState<File[]>([]);


  /* ==========================================================
                              FORM
  ========================================================== */

  const {
    register,
    handleSubmit,
    setValue,
    reset,

    formState: {
      errors,
    },

  } = useForm<ProductFormData>({

    resolver: zodResolver(productSchema),

    defaultValues: {
      title: "",
      category: "Audio",
      price: "",
      oldPrice: "",
      warranty: "",
      description: "",
      imageFiles: [],
      isTrending: false,
      stock: "",
    },

  });


  /* ==========================================================
                       ADD / EDIT DATA
  ========================================================== */

  useEffect(() => {

    if (!editingProduct) {

      setExistingFiles([]);

      reset({
        title: "",
        category: "Audio",
        price: "",
        oldPrice: "",
        warranty: "",
        description: "",
        imageFiles: [],
        isTrending: false,
        stock: "",
      });

      return;
    }


    reset({
      title: editingProduct.title,

  category: editingProduct.category
  .toString()
  .split("")
  .map((char, index, arr) => {
    if (index === 0) {
      return char.toUpperCase();
    }

    if (arr[index - 1] === "_") {
      return char.toUpperCase();
    }

    if (char === "_") {
      return " ";
    }

    return char.toLowerCase();
  })
  .join(""),



      price:
        editingProduct.price.toString(),

      oldPrice:
        editingProduct.oldPrice?.toString() || "",

      warranty:
        editingProduct.warranty ?? "",

      description:
        editingProduct.description,

      imageFiles: [],

      isTrending:
        editingProduct.isTrending,

      stock:
        editingProduct.stock.toString(),
    });

    console.log("This is the editing product",editingProduct)


    const loadImages = async () => {

      const files = await Promise.all(

        editingProduct.images!.map(
          async (imagePath) => {

            const imageUrl =
              supabase.storage
                .from("Products")
                .getPublicUrl(imagePath)
                .data.publicUrl;


            const response =
              await fetch(imageUrl);


            if (!response.ok) {
              throw new Error(
                "Failed to load product image"
              );
            }


            const blob =
              await response.blob();


            return new File(
              [blob],

              imagePath.split("/").pop() ||
                "product-image",

              {
                type:
                  blob.type ||
                  "image/png",
              }
            );

          }
        )

      );


      setExistingFiles(files);

      setValue(
        "imageFiles",
        files,
        {
          shouldValidate: true,
        }
      );

    };


    loadImages().catch((error) => {

      console.error(
        "Failed to load existing images:",
        error
      );

    });

  }, [
    editingProduct,
    reset,
    setValue,
  ]);


  /* ==========================================================
                         ESCAPE KEY
  ========================================================== */

  useEffect(() => {

    function handleEscape(
      e: KeyboardEvent
    ) {

      if (e.key === "Escape") {
        onClose();
      }

    }


    if (open) {

      window.addEventListener(
        "keydown",
        handleEscape
      );

      document.body.style.overflow =
        "hidden";

    }


    return () => {

      window.removeEventListener(
        "keydown",
        handleEscape
      );

      document.body.style.overflow =
        "auto";

    };

  }, [open, onClose]);


  /* ==========================================================
                           SUBMIT
  ========================================================== */

  const onSubmit = (
    data: ProductFormData
  ) => {

    const product: Product = {

      // id: editingProduct
      //   ? editingProduct.id
      //   : crypto.randomUUID(),

      title:
        data.title.trim(),

      description:
        data.description.trim(),

      category:
        data.category as Product["category"],

      price:
        Number(data.price),

      oldPrice:
        Number(data.oldPrice),

      stock:
        Number(data.stock),

      warranty:
        data.warranty?.trim() || "",

      isTrending:
        data.isTrending,

      images:
        editingProduct?.images ?? [],

    };


    handleAddProduct(
      product,
      data.imageFiles
    );

  };


  /* ==========================================================
                         CLOSED
  ========================================================== */

  if (!open) {
    return null;
  }


  /* ==========================================================
                              UI
  ========================================================== */

  return (

    <div
      onClick={onClose}
      className="
        fixed
        inset-0
        z-[999]
        flex
        items-center
        justify-center
        bg-black/60
        p-3
        backdrop-blur-sm
        md:p-5
      "
    >

      <div
        onClick={(e) =>
          e.stopPropagation()
        }
        className="
          flex
          max-h-[92vh]
          w-full
          max-w-6xl
          flex-col
          overflow-hidden
          rounded-3xl
          bg-white
          shadow-2xl
        "
      >

        {/* Header */}

        <div
          className="
            flex
            items-center
            justify-between
            border-b
            px-5
            py-5
            sm:px-8
          "
        >

          <div>

            <h2 className="text-2xl font-bold sm:text-3xl">

              {editingProduct
                ? "Edit Product"
                : "Add Product"}

            </h2>

            <p className="mt-1 text-sm text-gray-500 sm:text-base">

              {editingProduct
                ? "Update product information"
                : "Create a new product"}

            </p>

          </div>


          <button
            type="button"
            onClick={onClose}
            className="
              rounded-xl
              p-3
              transition
              hover:bg-gray-100
            "
          >
            <X />
          </button>

        </div>


        {/* Form */}

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="
            flex
            min-h-0
            flex-1
            flex-col
          "
        >

          <div className="flex-1 overflow-y-auto">

            <div
              className="
                grid
                grid-cols-1
                gap-6
                p-5
                lg:grid-cols-2
                lg:gap-8
                lg:p-8
              "
            >

              {/* =================================================
                                  LEFT
              ================================================== */}

              <div className="space-y-6">

                {/* TITLE */}

                <div>

                  <label className="mb-2 block font-medium">
                    Product Title
                  </label>

                  <input
                    {...register("title")}
                    placeholder="Sony Headphone"
                    className={`
                      w-full
                      rounded-xl
                      border
                      px-4
                      py-3
                      outline-none

                      ${
                        errors.title
                          ? "border-red-500"
                          : "border-gray-300 focus:border-yellow-500"
                      }
                    `}
                  />

                  {errors.title && (

                    <p className="mt-1 text-sm text-red-500">
                      {errors.title.message}
                    </p>

                  )}

                </div>


                {/* CATEGORY */}

                <div>

                  <label className="mb-2 block font-medium">
                    Category
                  </label>

                  <select
                    {...register("category")}
                    className={`
                      w-full
                      rounded-xl
                      border
                      px-4
                      py-3
                      outline-none

                      ${
                        errors.category
                          ? "border-red-500"
                          : "border-gray-300"
                      }
                    `}
                  >

                    <option value="Audio">
                      Audio
                    </option>

                    <option value="Power Bank">
                      Power Bank
                    </option>

                    <option value="Accessories">
                      Accessories
                    </option>

                    <option value="Gaming">
                      Gaming
                    </option>

                    <option value="Charging">
                      Charging
                    </option>

                  </select>

                  {errors.category && (

                    <p className="mt-1 text-sm text-red-500">
                      {errors.category.message}
                    </p>

                  )}

                </div>


                {/* PRICE */}

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

                  <div>

                    <label className="mb-2 block font-medium">
                      Price
                    </label>

                    <input
                      {...register("price")}
                      type="number"
                      placeholder="5990"
                      className={`
                        w-full
                        rounded-xl
                        border
                        px-4
                        py-3
                        outline-none

                        ${
                          errors.price
                            ? "border-red-500"
                            : "border-gray-300"
                        }
                      `}
                    />

                    {errors.price && (

                      <p className="mt-1 text-sm text-red-500">
                        {errors.price.message}
                      </p>

                    )}

                  </div>


                  <div>

                    <label className="mb-2 block font-medium">
                      Old Price
                    </label>

                    <input
                      {...register("oldPrice")}
                      type="number"
                      placeholder="6990"
                      className={`
                        w-full
                        rounded-xl
                        border
                        px-4
                        py-3
                        outline-none

                        ${
                          errors.oldPrice
                            ? "border-red-500"
                            : "border-gray-300"
                        }
                      `}
                    />

                    {errors.oldPrice && (

                      <p className="mt-1 text-sm text-red-500">
                        {errors.oldPrice.message}
                      </p>

                    )}

                  </div>

                </div>


                {/* STOCK */}

                <div>

                  <label className="mb-2 block font-medium">
                    Stock
                  </label>

                  <input
                    {...register("stock")}
                    type="number"
                    placeholder="0"
                    className={`
                      w-full
                      rounded-xl
                      border
                      px-4
                      py-3
                      outline-none

                      ${
                        errors.stock
                          ? "border-red-500"
                          : "border-gray-300"
                      }
                    `}
                  />

                  {errors.stock && (

                    <p className="mt-1 text-sm text-red-500">
                      {errors.stock.message}
                    </p>

                  )}

                </div>


                {/* WARRANTY */}

                <div>

                  <label className="mb-2 block font-medium">

                    Warranty

                    <span className="ml-2 text-sm font-normal text-gray-400">
                      (Optional)
                    </span>

                  </label>

                  <input
                    {...register("warranty")}
                    placeholder="12 Months"
                    className="
                      w-full
                      rounded-xl
                      border
                      border-gray-300
                      px-4
                      py-3
                      outline-none
                      focus:border-yellow-500
                    "
                  />

                </div>

              </div>


              {/* =================================================
                                  RIGHT
              ================================================== */}

              <div className="space-y-6">

                {/* IMAGES */}

                <div>

                  <ImageUploader
                    initialFiles={
                      existingFiles
                    }
                    onFilesChange={(
                      files
                    ) => {

                      setValue(
                        "imageFiles",
                        files,
                        {
                          shouldValidate: true,
                        }
                      );

                    }}
                  />

                  {errors.imageFiles && (

                    <p className="mt-1 text-sm text-red-500">
                      {errors.imageFiles.message}
                    </p>

                  )}

                </div>


                {/* DESCRIPTION */}

                <div>

                  <label className="mb-2 block font-medium">
                    Description
                  </label>

                  <textarea
                    {...register("description")}
                    rows={7}
                    className={`
                      w-full
                      rounded-xl
                      border
                      px-4
                      py-3
                      outline-none

                      ${
                        errors.description
                          ? "border-red-500"
                          : "border-gray-300"
                      }
                    `}
                  />

                  {errors.description && (

                    <p className="mt-1 text-sm text-red-500">
                      {errors.description.message}
                    </p>

                  )}

                </div>


                {/* TRENDING */}

                <label className="flex items-center gap-3">

                  <input
                    {...register(
                      "isTrending"
                    )}
                    type="checkbox"
                    className="h-4 w-4"
                  />

                  Trending Product

                </label>

              </div>

            </div>

          </div>


          {/* Footer */}

          <div
            className="
              flex
              flex-col-reverse
              gap-3
              border-t
              px-5
              py-5
              sm:flex-row
              sm:justify-end
              sm:px-8
            "
          >

            <button
              type="button"
              onClick={onClose}
              className="
                w-full
                cursor-pointer
                rounded-xl
                border
                px-6
                py-3
                font-medium
                hover:bg-gray-50
                sm:w-auto
              "
            >
              Cancel
            </button>


            <button
              type="submit"
              className="
                w-full
                cursor-pointer
                rounded-xl
                bg-yellow-500
                px-8
                py-3
                font-semibold
                text-white
                hover:bg-yellow-600
                sm:w-auto
              "
            >

              {editingProduct
                ? "Update Product"
                : "Save Product"}

            </button>

          </div>

        </form>

      </div>

    </div>

  );
}