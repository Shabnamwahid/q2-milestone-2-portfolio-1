// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;
// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     images: {
//       domains: ['localhost'], // Allow images from local development
//       unoptimized: true, // Optional: skips Next.js's automatic image optimization for local images
//     },
//   };
  
//   export default nextConfig;
  /** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      unoptimized: true, // Disable optimization for local images
    },
  };
  
  export default nextConfig;
  