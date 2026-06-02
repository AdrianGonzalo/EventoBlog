import Link from "next/link";

export default function PublicoMasculinoPage() {
    return (
        <main className="max-w-5xl mx-auto px-6 py-16">

            {/* HERO */}
            <section className="text-center mb-16">
                <h1 className="text-4xl font-bold text-pink-700 mb-4">
                    Estrategia para aumentar el público masculino
                </h1>
                <p className="text-gray-700 max-w-2xl mx-auto">
                    Análisis y propuesta de acciones para atraer, fidelizar y mejorar la experiencia
                    del cliente masculino en nuestro centro profesional.
                </p>
            </section>

            {/* BLOQUE DAFO + CAME */}
            <section className="space-y-12">

                {/* DAFO */}
                <div className="border rounded-xl p-6 shadow-sm bg-white">
                    <h2 className="text-2xl font-semibold mb-6 text-pink-700">
                        Análisis DAFO
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8">

                        <div>
                            <h3 className="text-xl font-semibold mb-3 text-black">Fortalezas</h3>
                            <ul className="list-disc pl-6 text-gray-700 space-y-2">
                                <li>Especialización en peinados y maquillaje para eventos (bodas, comuniones, graduaciones, fiestas, sesiones fotográficas, etc.).</li>
                                <li>Servicio personalizado y adaptado a cada cliente.</li>
                                <li>Posibilidad de desplazamiento a domicilio o al lugar del evento.</li>
                                <li>Uso de productos profesionales y tendencias actuales.</li>
                                <li>Atención cercana y creación de una buena experiencia para el cliente.</li>
                                <li>Capacidad de generar recomendaciones {"\"boca a boca\""} y presencia en redes sociales.</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold mb-3 text-black">Debilidades</h3>
                            <ul className="list-disc pl-6 text-gray-700 space-y-2">
                                <li>Dependencia de temporadas altas (bodas y celebraciones).</li>
                                <li>Alta competencia en el sector de peluquería y estética.</li>
                                <li>Necesidad constante de actualización en tendencias y formación.</li>
                                <li>Inversión elevada en productos, herramientas y publicidad.</li>
                                <li>Dificultad para conseguir clientes al inicio del negocio.</li>
                                <li>Horarios exigentes, especialmente fines de semana y festivos.</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold mb-3 text-black">Oportunidades</h3>
                            <ul className="list-disc pl-6 text-gray-700 space-y-2">
                                <li>Crecimiento del uso de redes sociales para promocionar servicios.</li>
                                <li>Aumento de eventos sociales y celebraciones.</li>
                                <li>Colaboraciones con organizadores de eventos, fotógrafos y salones de bodas.</li>
                                <li>Posibilidad de ofrecer paquetes completos (peluquería + maquillaje).</li>
                                <li>Tendencia creciente de servicios de belleza a domicilio.</li>
                                <li>Expansión mediante cursos, tutoriales o contenido online.</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold mb-3 text-black">Amenazas</h3>
                            <ul className="list-disc pl-6 text-gray-700 space-y-2">
                                <li>Competencia de peluquerías low cost y profesionales freelance.</li>
                                <li>Cambios en la economía que reducen el gasto en servicios de estética.</li>
                                <li>Aparición constante de nuevas tendencias y exigencias del mercado.</li>
                                <li>Clientes que cancelan citas de última hora.</li>
                                <li>Incremento del precio de productos profesionales.</li>
                            </ul>
                        </div>

                    </div>
                </div>

                {/* CAME */}
                <div className="border rounded-xl p-6 shadow-sm bg-pink-50">
                    <h2 className="text-2xl font-semibold mb-6 text-pink-700">
                        Análisis CAME - Peluquería para eventos
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8 text-gray-700">

                        <div>
                            <h3 className="text-xl font-semibold mb-2">Corregir (Debilidades)</h3>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Mejorar la captación de clientes mediante publicidad en redes sociales.</li>
                                <li>Organizar mejor las citas y horarios para evitar saturación.</li>
                                <li>Realizar formación continua en nuevas técnicas y tendencias.</li>
                                <li>Crear promociones para temporadas bajas.</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold mb-2">Afrontar (Amenazas)</h3>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Diferenciarse ofreciendo un servicio exclusivo y personalizado.</li>
                                <li>Mantener una excelente atención al cliente para fidelizar.</li>
                                <li>Tener políticas claras de reservas y cancelaciones.</li>
                                <li>Controlar gastos y buscar proveedores de calidad a buen precio.</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold mb-2">Mantener (Fortalezas)</h3>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Continuar ofreciendo un trato cercano y profesional.</li>
                                <li>Mantener la calidad de los productos y servicios.</li>
                                <li>Seguir potenciando la especialización en eventos.</li>
                                <li>Cuidar la imagen de marca y la presencia en redes sociales.</li>
                                <li>Gestionar adecuadamente los comentarios negativos en redes sociales.</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold mb-2">Explorar (Oportunidades)</h3>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Aprovechar Instagram, TikTok y Facebook para mostrar trabajos.</li>
                                <li>Crear colaboraciones con empresas de eventos y fotografía.</li>
                                <li>Ofrecer servicios a domicilio para diferenciarse.</li>
                                <li>Diseñar paquetes especiales para bodas y celebraciones.</li>
                            </ul>
                        </div>

                    </div>
                </div>

            </section>
        </main>
    );
}