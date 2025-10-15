import Image from "next/image";
import { client, urlFor } from "../../sanityClient";


export default async function Home() {
  // Traemos los posts desde Sanity
  const query = `*[_type == "post"]{_id, title, description, mainImage}`;
  const posts = await client.fetch(query);

  return (
    <div className="font-sans min-h-screen p-8 sm:p-20 bg-pink-50 text-gray-900">
      {/* Header: Logo + Nombre + Subtítulo */}
      <header className="flex flex-col items-center mb-12 text-center">
  <Image
    src="/Logo Contorno.svg"
    alt="Logo"
    width={320}   // más grande
    height={120}
    className="mb-4"
  />
  <h1 className="text-4xl font-bold">Eventos by La Pelu de María</h1>
  <p className="mt-2 max-w-xl text-sm sm:text-base">
    Este es tu espacio de inspiración si estás a punto de dar el “sí quiero”.
    Encuentra las últimas tendencias, ideas y consejos de peluquería para novias,
    madrinas y mujeres que deseen brillar en ocasiones especiales. Tu peinado no
    es un detalle, es parte de tu historia.
  </p>
</header>


      {/* Lista de posts */}
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <li
            key={post._id}
            className="bg-white rounded-lg shadow p-4 flex flex-col"
          >
            {post.mainImage && (
  <Image
    src={urlFor(post.mainImage).url()} // ✅ genera la URL correcta
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

      {/* Footer simple */}
      <footer className="mt-12 text-center text-sm text-gray-600">
        © 2025 Eventos by La Pelu de María. Todos los derechos reservados.
      </footer>
    </div>
  );
}

//Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
