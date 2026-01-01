import { Check, X } from "lucide-react";

const doList = [
  "Usa contraseñas diferentes para cada cuenta",
  "Verifica que las páginas tengan el candado de seguridad",
  "Revisa tus estados de cuenta regularmente",
  "Mantén actualizada la app de tu banco",
  "Guarda los números de emergencia de tu banco",
];

const dontList = [
  "Compartas tu NIP con nadie, ni con el banco",
  "Hagas clic en enlaces de mensajes o correos",
  "Uses Wi-Fi público para operaciones bancarias",
  "Guardes contraseñas en papeles visibles",
  "Te dejes presionar por urgencias telefónicas",
];

const QuickTipsSection = () => {
  return (
    <section id="consejos" className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-senior-2xl md:text-4xl mb-4">
            Reglas de Oro para tu Seguridad
          </h2>
          <p className="text-senior-lg text-muted-foreground max-w-2xl mx-auto">
            Sigue estas recomendaciones simples para mantener 
            tus finanzas seguras.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
          {/* Do's */}
          <div className="rounded-2xl bg-success/5 border-2 border-success/20 p-8 animate-fade-in-up">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-success">
                <Check className="h-6 w-6 text-success-foreground" />
              </div>
              <h3 className="text-xl font-bold text-success">SÍ DEBES</h3>
            </div>
            <ul className="space-y-4">
              {doList.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="h-6 w-6 text-success mt-0.5 flex-shrink-0" />
                  <span className="text-base text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Don'ts */}
          <div className="rounded-2xl bg-danger/5 border-2 border-danger/20 p-8 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-danger">
                <X className="h-6 w-6 text-danger-foreground" />
              </div>
              <h3 className="text-xl font-bold text-danger">NUNCA DEBES</h3>
            </div>
            <ul className="space-y-4">
              {dontList.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <X className="h-6 w-6 text-danger mt-0.5 flex-shrink-0" />
                  <span className="text-base text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickTipsSection;
