import React from "react";

const Values: React.FC = () => {
  return (
    <section id="values" className="w-full py-8 md:py-16 bg-sky-50">
      {/* Title row */}
      <div className="mb-3 max-w-7xl mx-auto px-4 sm:px-6 flex sm:flex-row sm:items-end gap-1 sm:gap-4">
        <h2 className="text-4xl sm:text-5xl md:text-8xl font-extrabold italic uppercase leading-none text-outline-glow">
          NILAI
        </h2>
        <span className="text-lg md:text-2xl lg:text-3xl font-semibold ml-1 md:mb-2 text-navyPurple flex items-end">
          TIS FTUI 2025
        </span>
      </div>

      {/* Chalkboard */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div
          className="rounded-md border-8 sm:border-[32px] border-[#caa270] bg-[#0f493d] shadow-lg"
          style={{
            boxShadow: 'inset 0 4px 20px rgba(0, 0, 0, 0.5)',
            minHeight: '550px'
          }}
        >
          {/* Fixed Mobile layout - now properly visible */}
          <div className="md:hidden flex flex-col items-center justify-center h-full py-8 px-4 space-y-8">
            {/* Peduli */}
            <div className="flex flex-col items-center text-center gap-2 w-full max-w-md">
              <h3 className="text-2xl font-extrabold uppercase tracking-wide text-white">
                PEDULI
              </h3>
              <p className="text-sm leading-relaxed text-white/90">
                Peduli adalah tentang merasakan dan memahami kebutuhan orang lain secara mendalam.
              </p>
            </div>

            {/* Adaptif */}
            <div className="flex flex-col items-center text-center gap-2 w-full max-w-md">
              <h3 className="text-2xl font-extrabold uppercase tracking-wide text-white">
                ADAPTIF
              </h3>
              <p className="text-sm leading-relaxed text-white/90">
                Adaptif adalah kemampuan untuk berubah dan beradaptasi dengan situasi yang terus berkembang, tanpa kehilangan arah atau tujuan.
              </p>
            </div>

            {/* Konsisten */}
            <div className="flex flex-col items-center text-center gap-2 w-full max-w-md">
              <h3 className="text-2xl font-extrabold uppercase tracking-wide text-white">
                KONSISTEN
              </h3>
              <p className="text-sm leading-relaxed text-white/90">
                Dalam mewujudkan cita-cita, konsistensi memberikan keyakinan bahwa setiap usaha kecil akan membawa dampak besar jika dilakukan dengan tekun.
              </p>
            </div>
          </div>

          {/* Desktop layout */}
          <div className="hidden md:flex w-full h-full min-h-[550px] items-center justify-center py-12 px-6">
            <div className="flex flex-row items-stretch justify-center w-full gap-8">
              {/* Peduli */}
              <div className="flex-1 flex flex-col items-center text-center gap-6 max-w-xs justify-between">
                <div>
                  <h3 className="text-4xl font-extrabold uppercase tracking-wide text-white">
                    PEDULI
                  </h3>
                  <p className="text-lg leading-relaxed text-white/90 mt-4">
                    Peduli adalah tentang merasakan dan memahami kebutuhan orang lain secara mendalam.
                  </p>
                </div>
              </div>

              {/* Adaptif */}
              <div className="flex-1 flex flex-col items-center text-center gap-6 max-w-xs justify-between">
                <div>
                  <h3 className="text-4xl font-extrabold uppercase tracking-wide text-white">
                    ADAPTIF
                  </h3>
                  <p className="text-lg leading-relaxed text-white/90 mt-4">
                    Adaptif adalah kemampuan untuk berubah dan beradaptasi dengan situasi yang terus berkembang, tanpa kehilangan arah atau tujuan.
                  </p>
                </div>
              </div>

              {/* Konsisten */}
              <div className="flex-1 flex flex-col items-center text-center gap-6 max-w-xs justify-between">
                <div>
                  <h3 className="text-4xl font-extrabold uppercase tracking-wide text-white">
                    KONSISTEN
                  </h3>
                  <p className="text-lg leading-relaxed text-white/90 mt-4">
                    Dalam mewujudkan cita-cita, konsistensi memberikan keyakinan bahwa setiap usaha kecil akan membawa dampak besar jika dilakukan dengan tekun.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;