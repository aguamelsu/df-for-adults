import { AlertTriangle, Phone, Mail, MessageSquare, ShieldAlert, XCircle } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

const alerts = [
  {
    id: 1,
    icon: Phone,
    title: "Llamadas Falsas del Banco",
    description: "Estafadores llaman diciendo ser del banco y piden tu NIP o contraseña. Tu banco NUNCA te pedirá estos datos por teléfono.",
    tips: [
      "Nunca des tu NIP por teléfono",
      "Cuelga y llama al número oficial de tu banco",
      "No te dejes presionar por urgencias falsas",
    ],
    type: "danger",
  },
  {
    id: 2,
    icon: MessageSquare,
    title: "Mensajes SMS Falsos",
    description: "Mensajes que dicen que tu cuenta está bloqueada y te piden hacer clic en un enlace. Estos enlaces llevan a páginas falsas.",
    tips: [
      "No hagas clic en enlaces de mensajes",
      "Tu banco no envía enlaces por SMS",
      "Entra directo a la app oficial de tu banco",
    ],
    type: "warning",
  },
  {
    id: 3,
    icon: Mail,
    title: "Correos Electrónicos Fraudulentos",
    description: "Correos que parecen ser de tu banco pero tienen errores o direcciones extrañas. Buscan robar tu información.",
    tips: [
      "Revisa el remitente del correo",
      "Busca errores de ortografía",
      "No descargues archivos adjuntos",
    ],
    type: "danger",
  },
  {
    id: 4,
    icon: ShieldAlert,
    title: "Premios y Sorteos Falsos",
    description: "Te dicen que ganaste algo y piden dinero para enviártelo o tus datos bancarios. Si no participaste, es fraude.",
    tips: [
      "Si no jugaste, no puedes ganar",
      "Nunca pagues para recibir un premio",
      "Desconfía de ofertas demasiado buenas",
    ],
    type: "warning",
  },
];

const FraudAlertsSection = () => {
  return (
    <section id="alertas" className="py-16 md:py-24 bg-secondary/30">
      <div className="container">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-danger/10 px-4 py-2 text-danger mb-4">
            <AlertTriangle className="h-5 w-5" />
            <span className="text-base font-semibold">Alerta de Fraudes</span>
          </div>
          <h2 className="text-senior-2xl md:text-4xl mb-4">
            Fraudes Más Comunes
          </h2>
          <p className="text-senior-lg text-muted-foreground max-w-2xl mx-auto">
            Conoce las estafas más frecuentes para que puedas identificarlas 
            y protegerte. La información es tu mejor defensa.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {alerts.map((alert, index) => {
            const Icon = alert.icon;
            const isDanger = alert.type === "danger";
            
            return (
              <Card 
                key={alert.id} 
                variant={isDanger ? "danger" : "warning"}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className={`flex h-14 w-14 items-center justify-center rounded-xl ${isDanger ? 'bg-danger/10' : 'bg-warning/10'}`}>
                      <Icon className={`h-7 w-7 ${isDanger ? 'text-danger' : 'text-warning'}`} />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl">{alert.title}</CardTitle>
                      <CardDescription className="text-base mt-2">
                        {alert.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-3">
                    <p className="text-base font-semibold text-foreground">Recuerda:</p>
                    <ul className="space-y-2">
                      {alert.tips.map((tip, tipIndex) => (
                        <li key={tipIndex} className="flex items-start gap-3">
                          <XCircle className={`h-5 w-5 mt-0.5 flex-shrink-0 ${isDanger ? 'text-danger' : 'text-warning'}`} />
                          <span className="text-base text-muted-foreground">{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Emergency Contact */}
        <Card variant="outline" className="mt-8 border-2 border-primary">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary">
                <Phone className="h-8 w-8 text-primary-foreground" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">¿Crees que fuiste víctima de fraude?</h3>
                <p className="text-muted-foreground text-base">
                  Llama inmediatamente a tu banco para bloquear tu cuenta y reportar el incidente. 
                  También puedes llamar a la CONDUSEF al 55 5340 0999.
                </p>
              </div>
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-1">CONDUSEF</p>
                <p className="text-2xl font-bold text-primary">55 5340 0999</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default FraudAlertsSection;
