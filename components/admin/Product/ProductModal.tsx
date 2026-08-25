"use client";

import { X } from "lucide-react";
import { useEffect } from "react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import ImageUploader from "./ImageUploader";

import { Product } from "@/types/product";

import {
  ProductFormData,
  productSchema,
} from "@/schemas/product.schema";


/* ==========================================================
                         PROPS
========================================================== */

interface ProductModalProps {
  open: boolean;
  onClose: () => void;

  handleAddProduct: (
    product: Product,
    imageFiles: File[]
  ) => void;
}


/* ==========================================================
                      PRODUCT MODAL
========================================================== */

export default function ProductModal({
  open,
  onClose,
  handleAddProduct,
}: ProductModalProps) {


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
      stock:""
    },
  });


  /* ==========================================================
                    ESCAPE HANDLER
  ========================================================== */

  useEffect(() => {

    function handleEscape(e: KeyboardEvent) {

      if (e.key === "Escape") {
        onClose();
      }

    }

    if (open) {

      window.addEventListener(
        "keydown",
        handleEscape
      );

      document.body.style.overflow = "hidden";

    }

    return () => {

      window.removeEventListener(
        "keydown",
        handleEscape
      );

      document.body.style.overflow = "auto";

    };

  }, [open, onClose]);


  /* ==========================================================
                         SUBMIT
  ========================================================== */

  const onSubmit = (data: ProductFormData) => {


    /* ========================================================
                       PRODUCT OBJECT
    ======================================================== */

    const product: Product = {

      id: crypto.randomUUID(),

      title: data.title.trim(),

      description: data.description.trim(),

      category: data.category as Product["category"],

      price: Number(data.price),

      oldPrice: Number(data.oldPrice),

      stock: Number(data.stock),

      warranty: data.warranty?.trim() || "",

      isTrending: data.isTrending,

      // images,

    };


    /* ========================================================
                    PASS PRODUCT TO PARENT
    ======================================================== */

    console.log(
      "Before calling handle add products"
    );

    console.log(
      product,
      data.imageFiles
    );

    handleAddProduct(
      product,
      data.imageFiles
    );


    /* ========================================================
                       RESET FORM
    ======================================================== */

    reset();


    /* ========================================================
                         CLOSE MODAL
    ======================================================== */

    onClose();

  };


  /* ==========================================================
                      MODAL CLOSED
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
        backdrop-blur-sm

        p-3
        md:p-5
      "
    >

      <div
        onClick={(e) => e.stopPropagation()}

        className="
          flex
          w-full
          max-w-6xl
          max-h-[92vh]

          flex-col

          overflow-hidden

          rounded-3xl
          bg-white

          shadow-2xl
        "
      >


        {/* ==================================================
                              HEADER
        ================================================== */}

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

            <h2
              className="
                text-2xl
                font-bold

                sm:text-3xl
              "
            >
              Add Product
            </h2>

            <p
              className="
                mt-1
                text-sm
                text-gray-500

                sm:text-base
              "
            >
              Create a new product
            </p>

          </div>


          {/* Close Button */}

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


        {/* ==================================================
                              FORM
        ================================================== */}

        <form
          onSubmit={handleSubmit(onSubmit)}

          className="
            flex
            min-h-0
            flex-1
            flex-col
          "
        >


          {/* ==================================================
                              BODY
          ================================================== */}

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


                {/* =================================================
                              PRODUCT TITLE
                ================================================== */}

                <div>

                  <label
                    className="
                      mb-2
                      block
                      font-medium
                    "
                  >
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
                          ? "border-red-500 focus:border-red-500"
                          : "border-gray-300 focus:border-yellow-500"
                      }
                    `}
                  />

                  {errors.title && (

                    <p
                      className="
                        mt-1
                        text-sm
                        text-red-500
                      "
                    >
                      {errors.title.message}
                    </p>

                  )}

                </div>


                {/* =================================================
                                CATEGORY
                ================================================== */}

                <div>

                  <label
                    className="
                      mb-2
                      block
                      font-medium
                    "
                  >
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

                    <p
                      className="
                        mt-1
                        text-sm
                        text-red-500
                      "
                    >
                      {errors.category.message}
                    </p>

                  )}

                </div>


                {/* =================================================
                            PRICE + OLD PRICE
                ================================================== */}

                <div
                  className="
                    grid
                    grid-cols-1
                    gap-5

                    sm:grid-cols-2
                  "
                >

                  <div>

                    <label
                      className="
                        mb-2
                        block
                        font-medium
                      "
                    >
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

                      <p
                        className="
                          mt-1
                          text-sm
                          text-red-500
                        "
                      >
                        {errors.price.message}
                      </p>

                    )}

                  </div>


                  <div>

                    <label
                      className="
                        mb-2
                        block
                        font-medium
                      "
                    >
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

                      <p
                        className="
                          mt-1
                          text-sm
                          text-red-500
                        "
                      >
                        {errors.oldPrice.message}
                      </p>

                    )}

                  </div>

                </div>


                {/* =================================================
                              Discount
                ================================================== */}

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

                  {/* <div>

                    <label className="mb-2 block font-medium">
                      Discount %
                    </label>

                    <input
                      type="number"
                      placeholder="20.5"
                      className="w-full rounded-xl border px-4 py-3"
                    />

                  </div> */}

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

                      <p
                        className="
                          mt-1
                          text-sm
                          text-red-500
                        "
                      >
                        {errors.stock.message}
                      </p>

                    )}

                    {/* <input
                      type="number"
                      className="w-full rounded-xl border px-4 py-3"
                    /> */}

                  </div>

                </div>


                {/* =================================================
                              WARRANTY
                ================================================== */}

                <div>

                  <label
                    className="
                      mb-2
                      block
                      font-medium
                    "
                  >
                    Warranty

                    <span
                      className="
                        ml-2
                        text-sm
                        font-normal
                        text-gray-400
                      "
                    >
                      (Optional)
                    </span>

                  </label>

                  <input
                    {...register("warranty")}

                    placeholder="12 Months"

                    className={`
                      w-full
                      rounded-xl
                      border
                      px-4
                      py-3
                      outline-none

                      ${
                        errors.warranty
                          ? "border-red-500"
                          : "border-gray-300"
                      }
                    `}
                  />

                  {errors.warranty && (

                    <p
                      className="
                        mt-1
                        text-sm
                        text-red-500
                      "
                    >
                      {errors.warranty.message}
                    </p>

                  )}

                </div>

              </div>


              {/* =================================================
                                  RIGHT
              ================================================== */}

              <div className="space-y-6">


                {/* =================================================
                            PRODUCT IMAGES
                ================================================== */}

                <div>

                  <ImageUploader
                    onFilesChange={(files) => {

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

                    <p
                      className="
                        mt-1
                        text-sm
                        text-red-500
                      "
                    >
                      {errors.imageFiles.message}
                    </p>

                  )}

                </div>


                {/* =================================================
                              DESCRIPTION
                ================================================== */}

                <div>

                  <label
                    className="
                      mb-2
                      block
                      font-medium
                    "
                  >
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

                    <p
                      className="
                        mt-1
                        text-sm
                        text-red-500
                      "
                    >
                      {errors.description.message}
                    </p>

                  )}

                </div>


                {/* =================================================
                                BADGE
                ================================================== */}

                {/* <div>

                  <label className="mb-2 block font-medium">
                    Badge
                  </label>

                  <input
                    type="text"
                    placeholder="Best Seller"
                    className="w-full rounded-xl border px-4 py-3"
                  />

                </div> */}


                {/* =================================================
                              FEATURED
                ================================================== */}

                <div className="space-y-3">

                  {/* <label className="flex items-center gap-3">

                    <input
                      type="checkbox"
                    />

                    Featured Product

                  </label> */}


                  <label
                    className="
                      flex
                      items-center
                      gap-3
                    "
                  >

                    <input
                      {...register("isTrending")}

                      type="checkbox"

                      className="
                        h-4
                        w-4
                      "
                    />

                    Trending Product

                  </label>

                </div>

              </div>

            </div>

          </div>


          {/* ==================================================
                              FOOTER
          ================================================== */}

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


            {/* =================================================
                              CANCEL
            ================================================== */}

            <button
              type="button"

              onClick={onClose}

              className="
                cursor-pointer

                w-full

                rounded-xl
                border

                px-6
                py-3

                font-medium

                transition

                hover:bg-gray-50

                sm:w-auto
              "
            >
              Cancel
            </button>


            {/* =================================================
                            SAVE PRODUCT
            ================================================== */}

            <button
              type="submit"

              className="
                cursor-pointer

                w-full

                rounded-xl

                bg-yellow-500

                px-8
                py-3

                font-semibold
                text-white

                transition

                hover:bg-yellow-600

                sm:w-auto
              "
            >
              Save Product
            </button>

          </div>

        </form>

      </div>

    </div>

  );
}