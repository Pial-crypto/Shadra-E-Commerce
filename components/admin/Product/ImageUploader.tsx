"use client";

import Image from "next/image";
import { Upload, Trash2 } from "lucide-react";
import { useRef, useState } from "react";

export default function ImageUploader() {

  const inputRef = useRef<HTMLInputElement>(null);

  const [images, setImages] = useState<string[]>([
    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=700",
    "https://images.unsplash.com/photo-1518444065439-e933c06ce9cd?w=700",
  ]);

  function addDummyImage() {

    setImages((prev) => [

      ...prev,

      "https://images.unsplash.com/photo-1545127398-14699f92334b?w=700",

    ]);

  }

  function removeImage(index: number) {

    setImages((prev) =>
      prev.filter((_, i) => i !== index)
    );

  }

  return (

    <div className="space-y-6">

      {/* Upload Box */}

      <div

        onClick={() => inputRef.current?.click()}

        className="
          cursor-pointer

          rounded-2xl

          border-2

          border-dashed

          border-zinc-300

          p-10

          text-center

          transition

          hover:border-yellow-500
        "

      >

        <Upload
          size={40}
          className="mx-auto text-yellow-500"
        />

        <h3 className="mt-4 text-lg font-semibold">

          Upload Product Images

        </h3>

        <p className="mt-2 text-sm text-gray-500">

          Click to upload or drag & drop

        </p>

        <button

          type="button"

          onClick={(e) => {

            e.stopPropagation();

            addDummyImage();

          }}

          className="
            mt-6

            rounded-xl

            bg-yellow-500

            px-6

            py-3

            font-semibold

            hover:bg-yellow-600
          "

        >

          Browse Files

        </button>

        <input

          ref={inputRef}

          hidden

          type="file"

          multiple

        />

      </div>

      {/* Preview */}

      <div>

        <h3 className="mb-4 font-semibold">

          Image Preview

        </h3>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">

          {images.map((image, index) => (

            <div
              key={index}
              className="group relative overflow-hidden rounded-xl border"
            >

              <Image
                src={image}
                alt=""
                width={300}
                height={300}
                className="aspect-square object-cover"
              />

              <button

                type="button"

                onClick={() =>
                  removeImage(index)
                }

                className="
                  absolute

                  right-2

                  top-2

                  rounded-lg

                  bg-red-500

                  p-2

                  text-white

                  opacity-0

                  transition

                  group-hover:opacity-100
                "

              >

                <Trash2 size={18} />

              </button>

            </div>

          ))}

        </div>

      </div>

    </div>

  );

}