import Image from "next/image";
import { client, urlFor } from "../../sanityClient";
import Link from "next/link";

export const revalidate = 60;

export default async function Home() {
  const query = `*[_type == "post" && category == "principal"]{
    _id,
    title,
    description,
    mainImage
  }`;

  const posts = await client.fetch(query);

  return (
    <div className="font-sans min-h-screen p-8 sm:p-20 text-gray-800">
      {/* Header */}
      <header className="flex flex-col items-center mb-16 text-center">
        {/* Logo */}
        <Image
          src="/Logo Contorno.svg"
          alt="Logo"
          width={420}
          height={100}
          className="sm:w-[480px] w-[320px] -mt-22 sm:-mt-14"
        />

        {/* Frase corta inspiracional */}
        <h2 className="text-lg sm:text-xl font-medium text-pink-600 italic -mt-5">
          “Donde cada peinado cuenta una historia”
        </h2>

        {/* Texto descriptivo integrado */}
        <p className="mt-6 max-w-2xl text-sm sm:text-base text-gray-700 leading-relaxed bg-white/70 backdrop-blur-md p-6 shadow-sm border border-pink-100">
          Este es tu espacio de inspiración si estás a punto de dar el{" "}
          <em>“sí quiero”</em>. Encuentra las últimas tendencias, ideas y
          consejos de peluquería para novias, madrinas y mujeres que deseen
          brillar en ocasiones especiales. Tu peinado no es un detalle,{" "}
          <strong className="text-pink-500">es parte de tu historia</strong>.
        </p>
      </header>

      {/* Imagen principal */}
      {posts.length > 0 && (
        <div className="-mx-8 sm:-mx-20 w-screen mb-16">
          <Image
            src={urlFor(posts[0].mainImage).url()}
            alt={posts[0].title}
            width={1920}
            height={1080}
            className="w-full h-auto object-cover"
          />
        </div>
      )}

      {/* Dinamica en grupo */}
      <section className="max-w-4xl mx-auto my-24 bg-white/90 backdrop-blur-sm border border-pink-100  shadow-md p-10 text-center">
        <h2 className="text-3xl font-semibold text-pink-700 mb-4">
          Dinámica de grupo
        </h2>
        <p className="max-w-xl mx-auto text-gray-700 mb-8">
          En <strong>La Pelu de María</strong> valoramos el trabajo en equipo y
          las buenas conexiones. Por eso hemos preparado una dinámica especial
          donde el grupo debe colaborar, decidir y superar un reto juntos.
        </p>
        <div>
          <Link
            href="/dynamic"
            className="text-pink-500 hover:text-pink-600 font-medium"
          >
            Explorar la dinámica →
          </Link>
        </div>
      </section>

      {/* Ejemplos peinados */}
      <section className="max-w-4xl mx-auto my-24 bg-white/90 backdrop-blur-sm border border-pink-100  shadow-md p-10 text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold text-pink-700 mb-6">
          Inspírate con nuestros peinados
        </h2>
        <p className="text-gray-600 mb-8 max-w-xl mx-auto p-4">
          Descubre ideas y tendencias para que brilles en cada ocasión. Elige tu
          estilo ideal entre nuestras secciones destacadas:
        </p>

        <div className="flex justify-center gap-6 flex-wrap">
          <Link
            href="/peinados/novias"
            className="px-20 py-3 bg-pink-200 hover:bg-pink-300 text-gray-800 font-medium rounded-full transition-all shadow-sm whitespace-nowrap"
          >
            Peinados de Novia
          </Link>
          <Link
            href="/peinados/madrinas"
            className="px-18 py-3 bg-pink-200 hover:bg-pink-300 text-gray-800 font-medium rounded-full transition-all shadow-sm whitespace-nowrap"
          >
            Peinados de Madrina
          </Link>
        </div>
      </section>

      {/* Sobre nosotros */}
      <section className="max-w-4xl mx-auto my-24 bg-white/90 backdrop-blur-sm border border-pink-100  shadow-md p-10 text-center">
        <h2 className="text-3xl font-semibold text-pink-700 mb-4">Conócenos</h2>
        <p className="max-w-xl mx-auto text-gray-700 mb-8">
          En <strong>La Pelu de María</strong> creemos que cada persona tiene un
          estilo único. Llevamos años ayudando a nuestras clientas a brillar con
          looks personalizados, elegantes y llenos de personalidad.
        </p>
        <a
          href="/nosotros"
          className="text-pink-500 hover:text-pink-600 font-medium"
        >
          Ver más sobre el equipo →
        </a>
      </section>

      {/*Contacto y redes */}
      <section className="max-w-4xl mx-auto my-24 bg-white/85 backdrop-blur-md border border-pink-100  shadow-md p-10 text-center">
        <h2 className="text-3xl font-semibold text-pink-700 mb-6">Contacto</h2>
        <p className="text-gray-700 mb-4">
          💇‍♀️ <strong>La Pelu de María</strong>
          <br />
          C. Ejemplo 123, 37700 Béjar
        </p>
        <p className="text-gray-700 mb-6">
          📞{" "}
          <a href="tel:+34123456789" className="hover:text-pink-500 transition">
            +34 123 456 789
          </a>
          <br />
          ✉️{" "}
          <a
            href="mailto:info@lapeludemaria.com"
            className="hover:text-pink-500 transition"
          >
            info@lapeludemaria.com
          </a>
        </p>

        <p className="text-gray-600 mb-8">
          Estamos disponibles para asesorarte sobre peinados, color y estilos
          para ocasiones especiales. ¡Pide tu cita por teléfono o escríbenos en
          redes!
        </p>

        {/* Redes */}
        <div className="flex justify-center gap-8 text-lg">
          <a href="#" className="text-gray-600 hover:text-pink-500 transition">
            Instagram
          </a>
          <a href="#" className="text-gray-600 hover:text-pink-500 transition">
            Facebook
          </a>
          <a href="#" className="text-gray-600 hover:text-pink-500 transition">
            TikTok
          </a>
        </div>
      </section>

      {/* 📜 Footer */}
      <footer className="mt-24 text-center text-sm text-gray-600">
        © 2025 Eventos by La Pelu de María. Todos los derechos reservados.
      </footer>
    </div>
  );
}

//Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
