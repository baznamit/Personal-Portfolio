/**
 * Get the correct asset path based on environment
 * In development: returns /Pics/imageName  
 * In production: returns /Personal-Portfolio/Pics/imageName
 */
export const getAssetPath = (path: string): string => {
  // In production, we need to use the base path
  const isProduction = process.env.NODE_ENV === 'production'
  const base = isProduction ? '/Personal-Portfolio/' : '/'
  
  // Remove leading slash from path if present to avoid double slashes
  const cleanPath = path.startsWith('/') ? path.slice(1) : path
  return `${base}${cleanPath}`
}