export default function Dynamic() {
  return (
    <main className="max-w-3xl mx-auto p-6 space-y-8">
      <header className="text-center space-y-2">
        <h1 className="text-4xl font-bold text-pink-700">Dinámica de Grupo</h1>
        <h3 className="text-xl text-gray-600">La Isla Desierta</h3>
        <p className="text-gray-700 max-w-2xl mx-auto">
          Una actividad diseñada para poner a prueba la creatividad, el trabajo
          en equipo y la toma de decisiones bajo presión.
        </p>
        <div className="inline-block mt-4 bg-pink-100 text-pink-700 px-4 py-2 rounded-full font-medium shadow-sm">
          ¿Serías capaz de ponerte de acuerdo con tu equipo?
        </div>
      </header>

      <section className="bg-white shadow-md p-6 rounded-xl space-y-4">
        <h4 className="text-2xl font-semibold text-pink-500">Desarrollo</h4>

        <div>
          <h6 className="text-lg font-medium text-pink-500">
            Presentación del reto
          </h6>
          <p className="text-gray-700 leading-relaxed">
            Imagina que tu grupo acaba de naufragar y todos han llegado a una
            isla desierta. Solo tienen 10 objetos salvados del barco. Deben
            decidir 5 objetos que conservarán para sobrevivir y justificar el
            porqué.
          </p>
        </div>

        <div>
          <h6 className="text-lg font-medium text-pink-500">
            Lista de objetos
          </h6>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Encendedor sin gasolina</li>
            <li>Una manta grande</li>
            <li>Una caja de herramientas</li>
            <li>Una linterna</li>
            <li>Un espejo</li>
            <li>Un cuchillo</li>
            <li>Un litro de agua</li>
            <li>Una radio sin batería</li>
            <li>Una cuerda</li>
            <li>Un botiquín</li>
          </ul>
        </div>

        <div>
          <h6 className="text-lg font-medium text-pink-500">
            Trabajo en grupo (15 - 20 minutos)
          </h6>
          <p className="text-gray-700 leading-relaxed">
            Los participantes deben debatir y llegar a un consenso grupal (no
            votación).
          </p>
          <p className="text-gray-700">
            El facilitador observa sin intervenir, tomando notas de:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Quién asume el liderazgo</li>
            <li>Cómo gestionan los desacuerdos</li>
            <li>Quién escucha y quién impone</li>
            <li>Capacidad de síntesis y argumentación</li>
          </ul>
        </div>

        <div>
          <h6 className="text-lg font-medium text-pink-500">
            Presentación de resultados (5 - 10 minutos)
          </h6>
          <p className="text-gray-700 leading-relaxed">
            Cada grupo debe explicar los 5 objetos elegidos y su justificación.
          </p>
        </div>

        <div>
          <h6 className="text-lg font-medium text-pink-500">
            Reflexión y evaluación (5 - 10 minutos)
          </h6>
          <p className="text-gray-700">El facilitador hará unas preguntas:</p>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>¿Cómo llegaron al acuerdo?</li>
            <li>¿Qué fue lo más difícil?</li>
            <li>¿Qué aprendieron del trabajo en grupo?</li>
          </ul>
        </div>

        <div>
          <h6 className="text-lg font-medium text-pink-500">
            Ficha de evaluación individual
          </h6>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Liderazgo</li>
            <li>Comunicación efectiva</li>
            <li>Colaboración</li>
            <li>Toma de decisiones</li>
            <li>Adaptabilidad</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
