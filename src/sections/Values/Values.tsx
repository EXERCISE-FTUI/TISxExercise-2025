// components/Values.tsx   (or wherever the file lives)
import React from "react";

const Values: React.FC = () => {
  return (
    <section id="values" className="w-screen py-16 bg-sky-50">
      {/* Title row */}
      <div className="mx-auto mb-8 max-w-6xl px-4 flex items-end gap-4">
        <h2 className="text-5xl md:text-6xl font-extrabold uppercase text-outline text-outline-shadow text-outline-glow">
          NILAI
        </h2>
        <span className="text-xl md:text-2xl font-semibold text-indigo-900">
          TIS FTUI 2025
        </span>
      </div>

      {/* Chalkboard */}
    <div className="mx-auto max-w-6xl px-4">
      <div className="rounded-md border-[32px] border-[#caa270] bg-[#0f493d] shadow-lg">
        <div className="flex flex-col md:flex-row">

          {/* Value 1 */}
          <div className="flex-1 px-4 py-25 flex flex-col items-center justify-center text-center">
            <h3 className="mb-12 text-4xl font-extrabold uppercase tracking-wide text-white">
            PEDULI
            </h3>
            <p className="text-l leading-relaxed text-white/90">
            Peduli adalah tentang merasakan dan memahami kebutuhan orang lain secara mendalam.
            </p>
          </div>

          {/* Value 2 */}
          <div className="flex-1 px-4 py-35 flex flex-col items-center justify-center text-center">
            <h3 className="mb-7 text-4xl font-extrabold uppercase tracking-wide text-white">
            ADAPTIF
            </h3>
            <p className="text-l leading-relaxed text-white/90">
            Adaptif adalah kemampuan untuk berubah dan beradaptasi dengan situasi yang terus berkembang, tanpa kehilangan arah atau tujuan.
            </p>
          </div>


          {/* Value 3 */}
          <div className="flex-1 px-4 py-35 flex flex-col items-center justify-center text-center">
            <h3 className="mb-7 text-4xl font-extrabold uppercase tracking-wide text-white">
            KONSISTEN
            </h3>
            <p className="text-l leading-relaxed text-white/90">
            Dalam mewujudkan cita-cita, konsistensi memberikan keyakinan bahwa setiap usaha kecil akan membawa dampak besar jika dilakukan dengan tekun.
            </p>
          </div>

        </div>
      </div>
    </div>
    </section>
  );
};

export default Values;
