import { ShoppingCart, User, Users, Gem } from "lucide-react";

const smartOptions = [
  { label: "SMART INDIVIDUAL", icon: User, installment: "19,70", cash: "197,00" },
  { label: "SMART DUPLO", icon: Users, installment: "24,70", cash: "247,00" },
];

const diamanteOptions = [
  { label: "DIAMANTE INDIVIDUAL", icon: Gem, installment: "51,40", cash: "497,00" },
  { label: "DIAMANTE DUPLO", icon: Users, installment: "77,10", cash: "745,00" },
  { label: "DIAMANTE TRIPLO", icon: Users, installment: "35,98", cash: "347,90", note: "Por apenas" },
];

export function TicketPlans() {
  return (
    <section
      className="w-full py-16 text-white"
      style={{
        background:
          "radial-gradient(ellipse at top, var(--nab-navy-2) 0%, var(--nab-navy-1) 65%, #050b16 100%)",
      }}
    >
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="flex items-center justify-center gap-3 text-center font-poppins text-xl font-bold tracking-wide sm:text-2xl">
          <span className="text-red-500">★</span> ESCOLHA SEU INGRESSO{" "}
          <span className="text-red-500">★</span>
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Plano Smart */}
          <div className="rounded-xl border border-sky-500/40 bg-gradient-to-b from-sky-950/40 to-transparent p-6 shadow-2xl shadow-sky-950/50">
            <span className="mb-6 inline-block rounded bg-gradient-to-r from-sky-500 to-sky-700 px-5 py-2 font-poppins text-sm font-bold shadow-md">
              PLANO SMART
            </span>

            <div className="divide-y divide-white/10">
              {smartOptions.map((opt) => (
                <div key={opt.label} className="flex items-center gap-4 py-5">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-sky-500/15 ring-1 ring-sky-400/40">
                    <opt.icon className="h-7 w-7 text-sky-400" />
                  </span>
                  <div className="flex-1">
                    <p className="font-poppins text-sm font-bold">{opt.label}</p>
                    <p className="font-poppins text-sky-400">
                      <span className="text-sm">12x </span>
                      <span className="text-xl font-bold">R$ {opt.installment}</span>
                    </p>
                    <p className="font-montserrat text-xs text-white/50">— ou —</p>
                    <p className="font-poppins">
                      <span className="text-2xl font-bold">R$ {opt.cash}</span>
                    </p>
                    <p className="font-montserrat text-[10px] tracking-wide text-white/50">À VISTA</p>
                  </div>
                  <a
                    href="#inscricao"
                    className="flex shrink-0 flex-col items-center gap-1 rounded-lg bg-gradient-to-b from-sky-500 to-sky-700 px-4 py-3 text-center font-poppins text-xs font-bold uppercase shadow-md transition hover:brightness-110"
                  >
                    <ShoppingCart className="h-4 w-4" />
                    Quero esse plano!
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Plano Diamante */}
          <div className="rounded-xl border border-amber-400/40 bg-gradient-to-b from-amber-950/30 to-transparent p-6 shadow-2xl shadow-amber-950/50">
            <span className="mb-6 inline-block rounded bg-gradient-to-r from-amber-600 to-amber-400 px-5 py-2 font-poppins text-sm font-bold text-[var(--nab-navy-2)] shadow-md">
              PLANO DIAMANTE
            </span>

            <div className="divide-y divide-white/10">
              {diamanteOptions.map((opt) => (
                <div key={opt.label} className="flex items-center gap-4 py-5">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-amber-400/15 ring-1 ring-amber-400/40">
                    <opt.icon className="h-7 w-7 text-amber-400" />
                  </span>
                  <div className="flex-1">
                    <p className="font-poppins text-sm font-bold">{opt.label}</p>
                    {opt.note && (
                      <p className="font-montserrat text-xs text-amber-300">{opt.note}</p>
                    )}
                    <p className="font-poppins text-amber-400">
                      <span className="text-sm">12x </span>
                      <span className="text-xl font-bold">R$ {opt.installment}</span>
                    </p>
                    <p className="font-montserrat text-xs text-white/50">— ou —</p>
                    <p className="font-poppins">
                      <span className="text-2xl font-bold">R$ {opt.cash}</span>
                    </p>
                    <p className="font-montserrat text-[10px] tracking-wide text-white/50">À VISTA</p>
                  </div>
                  <a
                    href="#inscricao"
                    className="flex shrink-0 flex-col items-center gap-1 rounded-lg bg-gradient-to-b from-amber-500 to-amber-700 px-4 py-3 text-center font-poppins text-xs font-bold uppercase text-[var(--nab-navy-2)] shadow-md transition hover:brightness-110"
                  >
                    <ShoppingCart className="h-4 w-4" />
                    Quero esse plano!
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
