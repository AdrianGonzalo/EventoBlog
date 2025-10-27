export default function TrabajaConNosotros() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800 py-16 px-6">
      <section className="max-w-4xl mx-auto space-y-10">
        <h1 className="text-4xl font-bold text-center text-gray-900">
          Trabaja con nosotros
        </h1>

        <p className="text-lg text-center text-gray-600">
          Buscamos personas responsables, comprometidas y apasionadas por
          ofrecer un excelente servicio. Si disfrutas del trabajo en equipo y
          tienes habilidades de comunicación, ¡te estamos esperando!
        </p>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Criterios generales</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Puntualidad y responsabilidad</li>
            <li>Disponibilidad horaria</li>
            <li>Experiencia en eventos o atención al cliente</li>
            <li>Habilidades de comunicación</li>
            <li>Trabajo en equipo</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Criterios específicos (Estilistas / Peluqueros)
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Formación técnica oficial o acreditada</li>
            <li>Habilidad artística y creatividad</li>
            <li>Conocimientos de tendencias y estilos</li>
            <li>Capacidad de trabajo bajo presión y con tiempo limitado</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Asistentes técnicos / Ayudantes
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Conocimientos básicos de peluquería</li>
            <li>Capacidad para preparar materiales y zona de trabajo</li>
            <li>Apoyo al equipo técnico y organización</li>
            <li>Capacidad de seguir instrucciones</li>
          </ul>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600">
            Si crees que encajas con nuestro equipo, envíanos tu CV y una breve
            presentación a:
          </p>
          <a
            href="mailto:contacto@tuempresa.com"
            className="inline-block mt-3 bg-gray-900 text-white px-6 py-3 rounded-full hover:bg-gray-700 transition"
          >
            Enviar solicitud
          </a>
        </div>
      </section>
    </main>
  );
}

/*
"use client";
import { useState } from "react";

export default function TrabajaConNosotros() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    puesto: "",
    experiencia: "",
    mensaje: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes conectar tu API o servicio de email
    console.log("Formulario enviado:", formData);
    alert("¡Gracias por enviar tu solicitud!");
    setFormData({
      nombre: "",
      email: "",
      puesto: "",
      experiencia: "",
      mensaje: "",
    });
  };

  return (
    <main className="min-h-screen bg-gray-50 text-gray-800 py-16 px-6">
      <section className="max-w-4xl mx-auto space-y-12">
        <h1 className="text-4xl font-bold text-center text-gray-900">
          Trabaja con nosotros
        </h1>

        <p className="text-lg text-center text-gray-600">
          Buscamos personas responsables, comprometidas y apasionadas por ofrecer un excelente servicio. 
          Si disfrutas del trabajo en equipo y tienes habilidades de comunicación, ¡te estamos esperando!
        </p>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Criterios generales</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Puntualidad y responsabilidad</li>
            <li>Disponibilidad horaria</li>
            <li>Experiencia en eventos o atención al cliente</li>
            <li>Habilidades de comunicación</li>
            <li>Trabajo en equipo</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Criterios específicos (Estilistas / Peluqueros)
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Formación técnica oficial o acreditada</li>
            <li>Habilidad artística y creatividad</li>
            <li>Conocimientos de tendencias y estilos</li>
            <li>Capacidad de trabajo bajo presión y con tiempo limitado</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Asistentes técnicos / Ayudantes
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Conocimientos básicos de peluquería</li>
            <li>Capacidad para preparar materiales y zona de trabajo</li>
            <li>Apoyo al equipo técnico y organización</li>
            <li>Capacidad de seguir instrucciones</li>
          </ul>
        </div>

        <section className="mt-16 bg-white shadow-md rounded-2xl p-8">
          <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
            Envíanos tu solicitud
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Nombre completo
                </label>
                <input
                  type="text"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                  className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-800"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-800"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Puesto al que aplicas
                </label>
                <select
                  name="puesto"
                  value={formData.puesto}
                  onChange={handleChange}
                  required
                  className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-800"
                >
                  <option value="">Selecciona un puesto</option>
                  <option value="Estilista">Estilista / Peluquero</option>
                  <option value="Asistente">Asistente técnico</option>
                  <option value="Eventos">Personal de eventos</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Años de experiencia
                </label>
                <input
                  type="number"
                  name="experiencia"
                  value={formData.experiencia}
                  onChange={handleChange}
                  min="0"
                  className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-800"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Cuéntanos sobre ti
              </label>
              <textarea
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                rows="4"
                placeholder="Háblanos de tu experiencia, formación o motivación..."
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-800"
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-gray-900 text-white px-8 py-3 rounded-full hover:bg-gray-700 transition"
              >
                Enviar solicitud
              </button>
            </div>
          </form>
        </section>
      </section>
    </main>
  );
}

*/
