export default function SobreMi() {
    return (
        <section className="text-black py-16 px-6 min-h-screen">
            <div className="bg-white rounded-2xl shadow-lg p-8 max-w-3xl mx-auto">

                <h2 className="text-2xl font-semibold text-pink-800 mb-10 text-center">
                    Sobre mí
                </h2>

                <div className="space-y-6 text-gray-600 leading-relaxed">

                    <p>
                        Soy María González Martín, estilista y directora de peluquería con más de 10 años de experiencia en el sector de la belleza y el cuidado capilar.
                    </p>

                    <p>
                        Me especializo en corte, color y tratamientos capilares, buscando siempre resultados naturales y adaptados a cada persona.
                    </p>

                    <p>
                        Desde 2017 trabajo en La Pelu de María, en Béjar, donde mi objetivo es ofrecer un servicio cercano y personalizado, cuidando cada detalle.
                    </p>

                    <p>
                        Me gusta seguir formándome continuamente para mantenerme al día en tendencias y técnicas de estilismo.
                    </p>

                </div>

                <div className="mt-12 text-center flex flex-col items-center gap-4">
                    <a
                        href="/cv-maria.jpeg"
                        download
                        className="px-6 py-3 bg-pink-200 hover:bg-pink-300 text-gray-800 font-medium rounded-full inline-block"
                    >
                        Descargar CV
                    </a>

                    <a
                        href="/carta presentacion maria.jpeg"
                        download
                        className="px-6 py-3 bg-pink-200 hover:bg-pink-300 text-gray-800 font-medium rounded-full inline-block"
                    >
                        Carta de presentación
                    </a>
                </div>

            </div>
        </section>
    );
}