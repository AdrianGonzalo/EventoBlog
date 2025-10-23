import Image from "next/image";
import { client, urlFor } from "../../../../sanityClient";

export const revalidate = 60;

export default async function Madrinas() {
  const query = `*[_type == "post" && category == "madrinas"]{
    _id,
    title,
    description,
    mainImage
  } | order(publishedAt desc)`;

  const posts = await client.fetch(query);

  return (
    <div className="font-sans min-h-screen p-8 sm:p-20 bg-pink-50 text-gray-900">
      <header className="flex flex-col items-center mb-12 text-center">
        <h1 className="text-4xl font-bold text-pink-700 mb-4">
          Peinados para Madrinas
        </h1>
        <p className="max-w-xl text-gray-700">
          Inspírate con los peinados más sofisticados para madrinas y eventos
          especiales.
        </p>
      </header>

      {posts.length === 0 ? (
        <p className="text-center text-gray-500">
          No hay posts de madrinas todavía.
        </p>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <li
              key={post._id}
              className="bg-white rounded-lg shadow p-4 flex flex-col"
            >
              {post.mainImage && (
                <Image
                  src={urlFor(post.mainImage).url()}
                  alt={post.title}
                  width={400}
                  height={250}
                  className="rounded mb-4 object-cover"
                />
              )}
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <p className="mt-2 text-gray-700">{post.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
