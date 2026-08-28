/**
 * Get the correct asset path based on environment
 * Uses Vite's BASE_URL so paths work in both dev and production builds.
 */
export const getAssetPath = (path: string): string => {
  // Remove leading slash from path if present to avoid double slashes
  const cleanPath = path.startsWith('/') ? path.slice(1) : path
  const base = import.meta.env.BASE_URL || '/'

  return `${base}${cleanPath}`
}