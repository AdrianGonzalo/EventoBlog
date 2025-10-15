import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

// Cliente de Sanity
export const client = sanityClient({
  projectId: '0uf8a3o6',  // tu Project ID
  dataset: 'production',
  useCdn: true,            // true para contenido rápido
  apiVersion: '2025-10-15'
});

// Builder para generar URLs de imágenes
const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
