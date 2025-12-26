/**
 * Helper function to get the correct asset path for both local and GitHub Pages
 * @param path - The path relative to the public folder (e.g., "/image.jpg" or "reports/file.pdf")
 * @returns The full path including the base URL
 */
export const getAssetPath = (path: string): string => {
  const baseUrl = import.meta.env.BASE_URL;
  // Remove leading slash from path if present to avoid double slashes
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${baseUrl}${cleanPath}`;
};

