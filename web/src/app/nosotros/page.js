export default function Nosotros() {
  const team = [
    {
      name: "María González",
      role: "Directora",
      areas: [
        {
          name: "Área Administrativa",
          color: "bg-yellow-50",
          positions: ["Recepción / Caja"],
        },
        {
          name: "Área Técnica",
          color: "bg-blue-50",
          positions: ["Jefe de Estilistas", "Estilistas", "Barberos", "Coloristas"],
        },
      ],
    },
    {
      name: "Nuria Terrones",
      role: "Asistente / Aprendiz",
      areas: [
        {
          name: "Estilistas",
          color: "bg-blue-50",
          positions: ["Aprendiz / Asistente"],
        },
      ],
    },
  ];

  return (
    <main className="py-16 px-6 bg-gray-50 min-h-screen">
      <section className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Nuestro Equipo</h1>
        <p className="text-gray-600 text-lg">
          En <strong>La Pelu de María</strong>, cada miembro cumple un papel esencial dentro de nuestra organización.
        </p>
      </section>

      <section className="max-w-4xl mx-auto space-y-12">
        {team.map((member) => (
          <div key={member.name} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300">
            {/* Nombre y rol */}
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-800">{member.name}</h2>
              <p className="text-gray-500 text-sm">{member.role}</p>
            </div>

            {/* Áreas y posiciones */}
            <div className="space-y-4">
              {member.areas.map((area) => (
                <div key={area.name} className={`${area.color} p-4 rounded-lg`}>
                  <h3 className="font-semibold text-gray-700">{area.name}</h3>
                  <ul className="ml-6 list-disc text-gray-600 mt-2">
                    {area.positions.map((pos) => (
                      <li key={pos}>{pos}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
