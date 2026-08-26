import { Product } from "@/types/product";

import { supabase } from "@/lib/supabase";
export async function createProduct(data: Product) {
const response = await fetch("/api/products", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(data),
});

const result = await response.json();

if (!response.ok) {
  console.log("look at the result",result)
  throw new Error(result.error || "Failed to create product");
}

return result;
}

export async function updateProduct(
  id: string,
  data: Product
) {
  const response = await fetch(`/api/products/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const result = await response.json();

  if (!response.ok) {
    console.log("look at the result", result);

    throw new Error(
      result.error || "Failed to update product"
    );
  }

  return result;
}

export async function getProducts() {
  const response = await fetch("/api/products");

  const result = await response.json();

  if (!response.ok) {
   // console.log("look at the result", result);

    throw new Error(
      result.error || "Failed to fetch products"
    );
  }

  return result;
}



export async function deleteProduct(id:string) {
 const response = await fetch(`/api/products/${id}`, { method: "DELETE", });

  const result = await response.json();

  if (!response.ok) {
   // console.log("look at the result", result);

    throw new Error(
      result.error || "Failed to delete product"
    );
  }

  return result;
}




export async function uploadProductImages(
  files: File[]
) {
  console.log("All the files inside upload service",files)

  const signResponse = await fetch("/api/uploads/sign", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      files: files.map((file) => ({
        name: file.name,
        type: file.type,
        size: file.size,
      })),
    }),
  });

  console.log("Sign response ready",signResponse)

  if (!signResponse.ok) {
    console.log(signResponse,"Jhamela r jhamela")
    throw new Error("Failed to prepare uploads");
  }

  const { uploads } = await signResponse.json();
console.log(uploads,"Ready to upload directly")
  // 2. Upload directly to Supabase
  const uploadedPaths = await Promise.all(
    files.map(async (file, index) => {
      const upload = uploads[index];

      const { error } = await supabase.storage
        .from("Products")
        .uploadToSignedUrl(
          upload.path,
          upload.token,
          file
        );

      if (error) {
        throw new Error(
          `Failed to upload ${file.name}: ${error.message}`
        );
      }

      return upload.path;
    })
  );

  return uploadedPaths;
}