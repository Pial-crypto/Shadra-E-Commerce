"use client";

import { useEffect } from "react";
import {
  AlertCircle,
  CheckCircle,
  AlertTriangle,
  Info,
  X,
} from "lucide-react";

interface ToastProps {
  type?: "error" | "success" | "warning" | "info";
  message: string;
  onClose: () => void;
  duration?: number;
}

export default function Toast({
  type = "error",
  message,
  onClose,
  duration = 3000,
}: ToastProps) {

  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => {
      clearTimeout(timer);
    };
  }, [duration, onClose]);



  /* ========================================================
                           CONFIG
  ======================================================== */

  const config = {
    error: {
      icon: AlertCircle,

      className:
        "border-red-200 bg-red-50 text-red-700",
    },

    success: {
      icon: CheckCircle,

      className:
        "border-green-200 bg-green-50 text-green-700",
    },

    warning: {
      icon: AlertTriangle,

      className:
        "border-yellow-200 bg-yellow-50 text-yellow-700",
    },

    info: {
      icon: Info,

      className:
        "border-blue-200 bg-blue-50 text-blue-700",
    },
  };


  const {
    icon: Icon,
    className,
  } = config[type];


  /* ========================================================
                            UI
  ======================================================== */

  return (

    <div
      role="alert"

      className={`
        fixed

        right-4
        top-4

        z-[9999]

        flex
        w-[calc(100%-2rem)]
        max-w-md

        items-start
        gap-3

        rounded-xl
        border

        px-4
        py-3

        shadow-lg

        ${className}
      `}
    >

      {/* ====================================================
                              ICON
      ==================================================== */}

      <Icon
        size={21}
        className="
          mt-0.5
          shrink-0
        "
      />


      {/* ====================================================
                             MESSAGE
      ==================================================== */}

      <p
        className="
          flex-1
          text-sm
          font-medium
          leading-5
        "
      >
        {message}
      </p>


      {/* ====================================================
                            CLOSE
      ==================================================== */}

      <button
        type="button"
        onClick={onClose}

        aria-label="Close notification"

        className="
          shrink-0

          rounded-md
          p-1

          transition

          hover:bg-black/5
        "
      >
        <X size={18} />
      </button>

    </div>

  );
}