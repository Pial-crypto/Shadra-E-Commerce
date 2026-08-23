"use client";

import { Upload, Trash2 } from "lucide-react";
import { useRef, useState } from "react";

export default function ImageUploader() {
  const inputRef = useRef<HTMLInputElement>(null);

  const [images, setImages] = useState<string[]>([
    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=700",
    "https://images.unsplash.com/photo-1518444065439-e933c06ce9cd?w=700",
  ]);

  function handleImageChange(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    const files = e.target.files;

    if (!files || files.length === 0) return;

    const newImages = Array.from(files).map((file) =>
      URL.createObjectURL(file)
    );

    setImages((prev) => [...prev, ...newImages]);

    // Same file আবার select করতে পারার জন্য
    e.target.value = "";
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
            inputRef.current?.click();
          }}
          className="
            mt-6
            cursor-pointer
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
          accept="image/*"
          multiple
          onChange={handleImageChange}
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
              key={image + index}
              className="group relative overflow-hidden rounded-xl border"
            >
              <img
                src={image}
                alt={`Product image ${index + 1}`}
                className="aspect-square w-full object-cover"
              />

              <button
                type="button"
                onClick={() => removeImage(index)}
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