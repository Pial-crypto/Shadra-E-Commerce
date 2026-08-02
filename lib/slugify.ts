// lib/slugify.ts

export const slugify = (text: string): string => {
  return text
    .toLowerCase()
    .trim()
    .replace(/,/g, "")        // Remove commas
    .replace(/'/g, "")        // Remove apostrophes
    .replace(/&/g, "and")     // Replace & with 'and'
    .replace(/\s+/g, "-")     // Spaces -> hyphens
    .replace(/-+/g, "-")      // Remove duplicate hyphens
    .replace(/[^a-z0-9-]/g, "") // Remove other special characters
    .replace(/^-|-$/g, "");   // Remove leading/trailing hyphens
};