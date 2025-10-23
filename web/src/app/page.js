import Image from "next/image";
import { client, urlFor } from "../../sanityClient";

export const revalidate = 60;

export default async function Home() {
  // 🔍 Solo traer posts con category == "principal"
  const query = `*[_type == "post" && category == "principal"]{
    _id,
    title,
    description,
    mainImage
  }`;

  const posts = await client.fetch(query);

  return (
    <div className="font-sans min-h-screen p-8 sm:p-20 bg-pink-50 text-gray-900">
      <header className="flex flex-col items-center mb-12 text-center">
        <Image
          src="/Logo Contorno.svg"
          alt="Logo"
          width={520}
          height={120}
          className="-mt-20 sm:-mt-40"
        />

        <p className="-mt-20 max-w-xl text-sm sm:text-base">
          Este es tu espacio de inspiración si estás a punto de dar el “sí
          quiero”. Encuentra las últimas tendencias, ideas y consejos de
          peluquería para novias, madrinas y mujeres que deseen brillar en
          ocasiones especiales. Tu peinado no es un detalle, es parte de tu
          historia.
        </p>
      </header>

      {posts.length === 0 ? (
        <p className="text-center text-gray-500">
          No hay publicaciones principales todavía.
        </p>
      ) : (
        <div className="-mx-8 sm:-mx-20 w-screen">
          <Image
            src={urlFor(posts[0].mainImage).url()}
            alt={posts[0].title}
            width={1920}
            height={1080}
            className="w-full h-auto object-cover"
          />
        </div>
      )}

      <footer className="mt-12 text-center text-sm text-gray-600">
        © 2025 Eventos by La Pelu de María. Todos los derechos reservados.
      </footer>
    </div>
  );
}

//Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
