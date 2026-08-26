"use client";

import { AlertTriangle, X } from "lucide-react";

interface DeleteWarningProps {
  open: boolean;
  title?: string;
  message?: string;
  onCancel: () => void;
  onConfirm: () => void;
}

export default function DeleteWarning({
  open,
  title = "Delete Product?",
  message = "Are you sure you want to delete this product? This action cannot be undone.",
  onCancel,
  onConfirm,
}: DeleteWarningProps) {
  if (!open) {
    return null;
  }

  return (
    <div
      onClick={onCancel}
      className="
        fixed
        inset-0
        z-[1000]
        flex
        items-center
        justify-center
        bg-black/50
        p-4
        backdrop-blur-sm
      "
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="
          w-full
          max-w-md
          rounded-2xl
          bg-white
          p-6
          shadow-2xl
        "
      >
        {/* Header */}

        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div
              className="
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                bg-red-100
                text-red-600
              "
            >
              <AlertTriangle size={22} />
            </div>

            <h2 className="text-xl font-bold">
              {title}
            </h2>
          </div>

          <button
            type="button"
            onClick={onCancel}
            className="
              rounded-lg
              p-2
              text-gray-400
              transition
              hover:bg-gray-100
              hover:text-gray-600
            "
          >
            <X size={20} />
          </button>
        </div>

        {/* Message */}

        <p className="mt-5 text-sm leading-6 text-gray-600">
          {message}
        </p>

        {/* Actions */}

        <div
          className="
            mt-7
            flex
            flex-col-reverse
            gap-3
            sm:flex-row
            sm:justify-end
          "
        >
          <button
            type="button"
            onClick={onCancel}
            className="
              w-full
              rounded-xl
              border
              border-gray-300
              px-5
              py-3
              font-medium
              transition
              hover:bg-gray-50
              sm:w-auto
              cursor-pointer
            "
          >
            Cancel
          </button>

          <button
            type="button"
            onClick={onConfirm}
            className="
              w-full
              rounded-xl
              bg-red-500
              px-5
              py-3
              font-semibold
              text-white
              transition
              hover:bg-red-600
              sm:w-auto
               cursor-pointer
            "
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}