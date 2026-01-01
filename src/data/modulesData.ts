import { 
  Shield, 
  Smartphone, 
  AlertTriangle, 
  CreditCard, 
  Lock, 
  HelpCircle,
  LucideIcon
} from "lucide-react";

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface Lesson {
  id: number;
  title: string;
  duration: string;
  content: string[];
  tips: string[];
  imageDescription: string;
  quiz: QuizQuestion[];
}

export interface Module {
  id: number;
  icon: LucideIcon;
  title: string;
  description: string;
  duration: string;
  lessons: Lesson[];
  color: string;
}

export const modulesData: Module[] = [
  {
    id: 1,
    icon: Smartphone,
    title: "Introducción a la Banca Digital",
    description: "Aprende qué es la banca por internet y celular, cómo funciona y por qué es segura cuando se usa correctamente.",
    duration: "20 minutos",
    color: "primary",
    lessons: [
      {
        id: 1,
        title: "¿Qué es la Banca Digital?",
        duration: "5 min",
        imageDescription: "Ilustración de una persona mayor usando su teléfono para revisar su cuenta bancaria",
        content: [
          "La banca digital es una forma de manejar tu dinero usando tu teléfono celular o computadora, sin necesidad de ir físicamente al banco.",
          "Con la banca digital puedes: revisar tu saldo, hacer transferencias, pagar servicios como luz y agua, y mucho más.",
          "Es como tener una sucursal del banco en tu casa, disponible las 24 horas del día, los 7 días de la semana."
        ],
        tips: [
          "La banca digital es tan segura como ir al banco si sigues las precauciones correctas",
          "Siempre usa la aplicación oficial de tu banco, descargada de la tienda de aplicaciones",
          "Si tienes dudas, visita tu sucursal bancaria para que te ayuden a configurar la app"
        ],
        quiz: [
          {
            id: 1,
            question: "¿Qué puedes hacer con la banca digital?",
            options: [
              "Solo revisar tu saldo",
              "Revisar saldo, hacer transferencias y pagar servicios",
              "Solo pagar servicios",
              "Nada, no es segura"
            ],
            correctAnswer: 1,
            explanation: "La banca digital te permite hacer múltiples operaciones: revisar saldo, transferir dinero, pagar servicios y más, todo desde tu celular o computadora."
          },
          {
            id: 2,
            question: "¿Cuándo está disponible la banca digital?",
            options: [
              "Solo de lunes a viernes",
              "Solo en horario bancario",
              "Las 24 horas, los 7 días de la semana",
              "Solo los fines de semana"
            ],
            correctAnswer: 2,
            explanation: "Una de las grandes ventajas de la banca digital es que está disponible todo el tiempo, incluso en días festivos."
          }
        ]
      },
      {
        id: 2,
        title: "Cómo Descargar la App de tu Banco",
        duration: "5 min",
        imageDescription: "Paso a paso visual mostrando cómo buscar y descargar una app bancaria",
        content: [
          "Para usar la banca móvil, primero necesitas descargar la aplicación oficial de tu banco en tu teléfono.",
          "En teléfonos iPhone, busca la app en la 'App Store' (el ícono azul con una A). En Android, usa 'Play Store' (el ícono del triángulo de colores).",
          "Escribe el nombre de tu banco en el buscador y asegúrate de que la app sea la oficial, verificando que el desarrollador sea el banco."
        ],
        tips: [
          "Nunca descargues apps de enlaces que te envíen por mensaje o correo",
          "La app oficial siempre muestra el nombre del banco como desarrollador",
          "Si no estás seguro, pide ayuda en tu sucursal bancaria"
        ],
        quiz: [
          {
            id: 1,
            question: "¿Dónde debes descargar la app de tu banco?",
            options: [
              "De cualquier enlace que me envíen",
              "De la tienda oficial de aplicaciones (App Store o Play Store)",
              "De páginas web desconocidas",
              "De mensajes de texto"
            ],
            correctAnswer: 1,
            explanation: "Siempre descarga las apps bancarias desde las tiendas oficiales para asegurarte de que son legítimas y seguras."
          }
        ]
      },
      {
        id: 3,
        title: "Tu Primer Ingreso a la App",
        duration: "5 min",
        imageDescription: "Pantallas de inicio de sesión de una app bancaria con campos de usuario y contraseña",
        content: [
          "Una vez instalada la app, necesitarás crear tu cuenta o ingresar con los datos que te dio tu banco.",
          "Generalmente necesitarás: tu número de cuenta o tarjeta, tu fecha de nacimiento, y crear una contraseña.",
          "Es muy importante que esta contraseña sea diferente a otras que uses y que no la compartas con nadie."
        ],
        tips: [
          "El banco NUNCA te pedirá tu contraseña completa por teléfono o mensaje",
          "Anota tu usuario en un lugar seguro si tienes miedo de olvidarlo",
          "Activa la opción de huella digital si tu teléfono la tiene"
        ],
        quiz: [
          {
            id: 1,
            question: "¿El banco te pedirá tu contraseña por teléfono?",
            options: [
              "Sí, siempre que llamen",
              "Solo si dicen ser del área de seguridad",
              "Nunca, el banco jamás pide contraseñas",
              "Solo por mensaje de texto"
            ],
            correctAnswer: 2,
            explanation: "Los bancos NUNCA piden contraseñas por teléfono, mensaje o correo. Si alguien lo hace, es un intento de fraude."
          }
        ]
      },
      {
        id: 4,
        title: "Navegando la App con Confianza",
        duration: "5 min",
        imageDescription: "Menú principal de una app bancaria con iconos grandes y claros",
        content: [
          "Las apps bancarias están diseñadas para ser fáciles de usar. El menú principal generalmente muestra: Saldo, Transferencias, Pagos y Más opciones.",
          "Para ver tu saldo, solo toca el ícono de 'Cuenta' o 'Saldo'. Ahí verás cuánto dinero tienes disponible.",
          "Si te equivocas o tocas algo por error, siempre puedes regresar con el botón de 'flecha hacia atrás' o 'inicio'."
        ],
        tips: [
          "Tómate tu tiempo para explorar la app, no tengas prisa",
          "Si algo no entiendes, cierra la app y pide ayuda, no pasa nada",
          "Practica primero viendo tu saldo antes de hacer otras operaciones"
        ],
        quiz: [
          {
            id: 1,
            question: "¿Qué debes hacer si tocas algo por error en la app?",
            options: [
              "Apagar el teléfono inmediatamente",
              "Usar el botón de regreso o inicio para volver",
              "Llamar al banco urgentemente",
              "Desinstalar la app"
            ],
            correctAnswer: 1,
            explanation: "Siempre puedes regresar usando los botones de navegación. La app está diseñada para que explores con tranquilidad."
          }
        ]
      }
    ]
  },
  {
    id: 2,
    icon: Lock,
    title: "Contraseñas Seguras",
    description: "Cómo crear contraseñas fuertes que puedas recordar y proteger tus cuentas de accesos no autorizados.",
    duration: "15 minutos",
    color: "accent",
    lessons: [
      {
        id: 1,
        title: "¿Por qué son Importantes las Contraseñas?",
        duration: "5 min",
        imageDescription: "Candado protegiendo una puerta digital con símbolos de seguridad",
        content: [
          "Una contraseña es como la llave de tu casa, pero para tu dinero digital. Sin ella, nadie puede entrar a tus cuentas.",
          "Los delincuentes buscan contraseñas fáciles de adivinar para robar dinero. Por eso es importante crear contraseñas seguras.",
          "Una buena contraseña te protege incluso si alguien tiene tu teléfono, porque sin ella no pueden acceder a tus cuentas."
        ],
        tips: [
          "Nunca uses tu fecha de nacimiento como contraseña",
          "Evita usar el mismo número repetido como 1111 o 1234",
          "Tu contraseña bancaria debe ser diferente a otras contraseñas"
        ],
        quiz: [
          {
            id: 1,
            question: "¿A qué se parece una contraseña?",
            options: [
              "A un número de teléfono",
              "A la llave de tu casa",
              "A tu nombre",
              "A tu dirección"
            ],
            correctAnswer: 1,
            explanation: "La contraseña es como la llave de tu casa digital: protege tu dinero y tu información personal."
          }
        ]
      },
      {
        id: 2,
        title: "Cómo Crear una Contraseña Fuerte",
        duration: "5 min",
        imageDescription: "Ejemplos visuales de contraseñas débiles vs fuertes",
        content: [
          "Una contraseña fuerte combina letras mayúsculas, minúsculas, números y símbolos. Por ejemplo: MiPerro@2024",
          "Un truco es pensar en una frase que recuerdes y usar las primeras letras. Por ejemplo: 'Mi Mamá Nació en Enero 5' = MMNeE5!",
          "Mientras más larga sea tu contraseña, más difícil será de adivinar. Intenta que tenga al menos 8 caracteres."
        ],
        tips: [
          "Usa una frase personal que solo tú conozcas",
          "Agrega un número o símbolo al final para hacerla más segura",
          "Puedes escribir una pista en papel, pero nunca la contraseña completa"
        ],
        quiz: [
          {
            id: 1,
            question: "¿Cuál de estas es una contraseña más segura?",
            options: [
              "123456",
              "MiNombre",
              "MiGato@2024!",
              "1111"
            ],
            correctAnswer: 2,
            explanation: "MiGato@2024! es más segura porque combina letras mayúsculas, minúsculas, números y símbolos."
          }
        ]
      },
      {
        id: 3,
        title: "Protegiendo tus Contraseñas",
        duration: "5 min",
        imageDescription: "Persona guardando sus contraseñas de forma segura en un cuaderno bajo llave",
        content: [
          "Nunca compartas tu contraseña con nadie, ni siquiera con familiares. Tu banco tampoco te la pedirá jamás.",
          "Si necesitas anotar tus contraseñas, hazlo en un cuaderno que guardes en un lugar seguro, no en papelitos sueltos.",
          "Cambia tu contraseña cada cierto tiempo, especialmente si sospechas que alguien pudo verla."
        ],
        tips: [
          "Si alguien dice ser del banco y pide tu contraseña, cuelga inmediatamente",
          "No uses la misma contraseña para el banco y para redes sociales",
          "Si olvidaste tu contraseña, el banco tiene formas seguras de ayudarte a recuperarla"
        ],
        quiz: [
          {
            id: 1,
            question: "¿Con quién debes compartir tu contraseña bancaria?",
            options: [
              "Con mis hijos",
              "Con el banco cuando llame",
              "Con nadie, nunca",
              "Con mi pareja"
            ],
            correctAnswer: 2,
            explanation: "Tu contraseña es personal y no debe compartirse con nadie. El banco nunca te la pedirá."
          }
        ]
      }
    ]
  },
  {
    id: 3,
    icon: AlertTriangle,
    title: "Cómo Detectar Fraudes",
    description: "Identifica llamadas, mensajes y correos falsos. Aprende las señales de alerta de las estafas más comunes.",
    duration: "25 minutos",
    color: "warning",
    lessons: [
      {
        id: 1,
        title: "Los Fraudes Más Comunes",
        duration: "5 min",
        imageDescription: "Ilustración de diferentes tipos de fraudes: llamada, mensaje, correo",
        content: [
          "Los delincuentes usan diferentes métodos para intentar robarte: llamadas telefónicas, mensajes de texto, correos electrónicos y hasta redes sociales.",
          "El fraude más común es el 'vishing': alguien te llama diciendo ser del banco y te pide información personal o contraseñas.",
          "Otro fraude frecuente es el 'smishing': mensajes de texto falsos que te piden hacer clic en enlaces o dar información."
        ],
        tips: [
          "Si recibes una llamada sospechosa, cuelga y llama tú directamente al banco",
          "Los bancos NUNCA piden contraseñas ni tokens por teléfono",
          "Desconfía de cualquier mensaje que te pida actuar 'urgentemente'"
        ],
        quiz: [
          {
            id: 1,
            question: "¿Qué es el 'vishing'?",
            options: [
              "Una app del banco",
              "Fraude por llamadas telefónicas",
              "Un tipo de transferencia",
              "Un servicio bancario"
            ],
            correctAnswer: 1,
            explanation: "El vishing es un fraude donde los delincuentes llaman por teléfono haciéndose pasar por el banco."
          }
        ]
      },
      {
        id: 2,
        title: "Señales de Alerta en Llamadas",
        duration: "5 min",
        imageDescription: "Persona recibiendo llamada con iconos de advertencia",
        content: [
          "Si te llaman diciendo que hay un problema urgente con tu cuenta y debes actuar inmediatamente, es probablemente un fraude.",
          "Los estafadores crean pánico para que actúes sin pensar. Usan frases como: 'Su cuenta será bloqueada' o 'Detectamos un cargo sospechoso'.",
          "El banco real nunca te pedirá que les des tu token, NIP completo, contraseña o que hagas transferencias por teléfono."
        ],
        tips: [
          "Ante la duda, cuelga y llama al número que aparece en tu tarjeta",
          "Nunca des información si tú no iniciaste la llamada",
          "Los estafadores pueden hacer que aparezca el número del banco en tu pantalla"
        ],
        quiz: [
          {
            id: 1,
            question: "¿Qué debes hacer si te llaman diciendo que hay un problema urgente con tu cuenta?",
            options: [
              "Dar toda la información que pidan",
              "Colgar y llamar al número oficial del banco",
              "Hacer la transferencia que piden",
              "Dar tu token para verificar"
            ],
            correctAnswer: 1,
            explanation: "Lo más seguro es colgar y llamar directamente al banco usando el número que aparece en tu tarjeta."
          }
        ]
      },
      {
        id: 3,
        title: "Mensajes y Correos Falsos",
        duration: "5 min",
        imageDescription: "Ejemplos de mensajes SMS y correos fraudulentos",
        content: [
          "Los mensajes fraudulentos suelen tener errores de ortografía, enlaces extraños y te piden información personal.",
          "Los correos falsos pueden verse muy profesionales, pero la dirección del remitente suele ser diferente a la oficial del banco.",
          "Nunca hagas clic en enlaces de mensajes o correos que no esperabas, aunque parezcan del banco."
        ],
        tips: [
          "Revisa siempre la dirección de correo del remitente",
          "Los bancos no envían enlaces para 'verificar tu cuenta'",
          "Si tienes dudas, ingresa directamente a la app o página del banco"
        ],
        quiz: [
          {
            id: 1,
            question: "¿Qué debes hacer con un enlace de un mensaje sospechoso?",
            options: [
              "Hacer clic para verificar",
              "Nunca hacer clic en él",
              "Reenviarlo a amigos",
              "Responder al mensaje"
            ],
            correctAnswer: 1,
            explanation: "Nunca hagas clic en enlaces de mensajes sospechosos. Si tienes dudas, ingresa directamente a la app de tu banco."
          }
        ]
      },
      {
        id: 4,
        title: "Fraudes en Persona",
        duration: "5 min",
        imageDescription: "Escena de persona en cajero siendo observada por alguien sospechoso",
        content: [
          "En cajeros automáticos, cubre siempre el teclado al escribir tu NIP. Los delincuentes pueden grabar o observar.",
          "Si alguien se ofrece a 'ayudarte' en el cajero sin que lo pidas, rechaza amablemente y pide ayuda al personal del banco.",
          "Revisa el cajero antes de usarlo: si algo parece suelto o diferente en la ranura de la tarjeta, no lo uses."
        ],
        tips: [
          "Siempre cubre tu NIP con la otra mano",
          "No aceptes ayuda de extraños en el cajero",
          "Si el cajero se 'traga' tu tarjeta, no te vayas, llama al banco inmediatamente"
        ],
        quiz: [
          {
            id: 1,
            question: "¿Qué debes hacer al escribir tu NIP en el cajero?",
            options: [
              "Escribirlo rápidamente",
              "Cubrirlo con la otra mano",
              "Decirlo en voz alta para no equivocarte",
              "Pedirle a alguien que lo vea"
            ],
            correctAnswer: 1,
            explanation: "Siempre cubre el teclado con tu otra mano al escribir el NIP para que nadie pueda verlo."
          }
        ]
      },
      {
        id: 5,
        title: "Protégete de las Estafas",
        duration: "5 min",
        imageDescription: "Escudo protector con símbolos de seguridad",
        content: [
          "La regla de oro: si algo parece demasiado bueno para ser verdad, probablemente es una estafa.",
          "Mantén actualizadas las apps de tu teléfono y del banco, las actualizaciones incluyen protecciones de seguridad.",
          "Habla con tu familia sobre estos fraudes. Los delincuentes buscan personas que no conocen estas tácticas."
        ],
        tips: [
          "Comparte esta información con otros adultos mayores",
          "Ante cualquier duda, consulta con alguien de confianza antes de actuar",
          "Reporta los intentos de fraude a tu banco, ayudas a proteger a otros"
        ],
        quiz: [
          {
            id: 1,
            question: "¿Qué hacer si algo parece demasiado bueno para ser verdad?",
            options: [
              "Aprovecharlo rápidamente",
              "Sospechar y verificar antes de actuar",
              "Compartirlo con amigos",
              "Dar tus datos para no perder la oportunidad"
            ],
            correctAnswer: 1,
            explanation: "Si algo parece demasiado bueno para ser verdad, probablemente es una estafa. Siempre verifica antes de actuar."
          }
        ]
      }
    ]
  },
  {
    id: 4,
    icon: CreditCard,
    title: "Uso Seguro de Tarjetas",
    description: "Protege tu tarjeta de débito y crédito. Qué hacer y qué no hacer al comprar en línea o en tiendas.",
    duration: "20 minutos",
    color: "success",
    lessons: [
      {
        id: 1,
        title: "Conoce tu Tarjeta",
        duration: "5 min",
        imageDescription: "Tarjeta bancaria con sus partes señaladas: número, CVV, fecha",
        content: [
          "Tu tarjeta tiene información importante: el número de 16 dígitos al frente, la fecha de vencimiento y el código de seguridad (CVV) de 3 dígitos atrás.",
          "El CVV es un código de seguridad que solo debes usar para compras en línea. Nunca lo compartas por teléfono.",
          "Memoriza tu NIP (número de identificación personal) y nunca lo escribas en la tarjeta ni lo guardes junto a ella."
        ],
        tips: [
          "El CVV es diferente al NIP, no los confundas",
          "Puedes cubrir el CVV con una etiqueta si lo tienes memorizado",
          "Revisa regularmente que tu tarjeta no esté dañada o con partes sueltas"
        ],
        quiz: [
          {
            id: 1,
            question: "¿Dónde está el código CVV de tu tarjeta?",
            options: [
              "Al frente, junto al número",
              "Atrás, son 3 dígitos",
              "No existe en las tarjetas",
              "En el chip de la tarjeta"
            ],
            correctAnswer: 1,
            explanation: "El CVV son 3 dígitos que están en la parte de atrás de tu tarjeta, generalmente junto a la firma."
          }
        ]
      },
      {
        id: 2,
        title: "Compras Seguras en Tiendas",
        duration: "5 min",
        imageDescription: "Persona pagando de forma segura en una terminal de tienda",
        content: [
          "Nunca pierdas de vista tu tarjeta cuando pagues. Si el empleado debe llevarla, acompáñalo o pide que traigan la terminal.",
          "Cuando uses la tarjeta, cubre siempre el teclado al escribir tu NIP, igual que en el cajero automático.",
          "Antes de firmar el voucher, verifica que el monto sea correcto. Guarda tus recibos para compararlos con tu estado de cuenta."
        ],
        tips: [
          "Prefiere usar el chip o contactless en lugar de pasar la banda magnética",
          "Si la terminal parece modificada o sospechosa, paga en efectivo",
          "Revisa tu estado de cuenta regularmente para detectar cargos extraños"
        ],
        quiz: [
          {
            id: 1,
            question: "¿Qué debes verificar antes de firmar el voucher?",
            options: [
              "Que tenga tu nombre",
              "Que el monto sea correcto",
              "Que sea de color blanco",
              "Nada, solo firma rápido"
            ],
            correctAnswer: 1,
            explanation: "Siempre verifica que el monto en el voucher sea igual al precio de tu compra antes de firmar."
          }
        ]
      },
      {
        id: 3,
        title: "Compras en Internet",
        duration: "5 min",
        imageDescription: "Pantalla de computadora mostrando compra segura con candado",
        content: [
          "Solo compra en páginas web seguras. Busca el candado 🔒 en la barra de direcciones y que comience con 'https'.",
          "Nunca guardes los datos de tu tarjeta en páginas web, aunque te lo ofrezcan para 'comprar más rápido'.",
          "Usa una tarjeta digital o virtual para compras en línea si tu banco la ofrece, así proteges tu tarjeta física."
        ],
        tips: [
          "Activa las alertas de tu banco para recibir avisos de cada compra",
          "Si una oferta parece demasiado buena, probablemente es falsa",
          "Compra solo en tiendas conocidas o recomendadas por personas de confianza"
        ],
        quiz: [
          {
            id: 1,
            question: "¿Qué indica que una página web es segura para comprar?",
            options: [
              "Tiene muchos colores",
              "El candado 🔒 y 'https' en la dirección",
              "Ofrece grandes descuentos",
              "Pide muchos datos personales"
            ],
            correctAnswer: 1,
            explanation: "Una página segura muestra un candado en la barra de direcciones y su dirección comienza con 'https'."
          }
        ]
      },
      {
        id: 4,
        title: "Qué Hacer si Pierdes tu Tarjeta",
        duration: "5 min",
        imageDescription: "Persona llamando al banco para reportar tarjeta perdida",
        content: [
          "Si pierdes tu tarjeta o te la roban, llama inmediatamente al banco para bloquearla. Esto evita que alguien más la use.",
          "Guarda en tu teléfono el número de atención del banco. Está en el reverso de tu tarjeta, anótalo antes de necesitarlo.",
          "Después de bloquearla, el banco te enviará una nueva tarjeta. Mientras tanto, puedes usar la app para operaciones básicas."
        ],
        tips: [
          "No esperes a 'buscar bien' la tarjeta, bloquéala de inmediato",
          "Muchas apps bancarias permiten bloquear la tarjeta directamente",
          "Reporta también si solo sospechas que alguien vio tus datos"
        ],
        quiz: [
          {
            id: 1,
            question: "¿Qué es lo primero que debes hacer si pierdes tu tarjeta?",
            options: [
              "Buscarla por varios días",
              "Llamar al banco para bloquearla inmediatamente",
              "Esperar a ver si aparece",
              "Ir al banco la próxima semana"
            ],
            correctAnswer: 1,
            explanation: "Lo primero es bloquear la tarjeta llamando al banco o desde la app para evitar que alguien la use."
          }
        ]
      }
    ]
  },
  {
    id: 5,
    icon: Shield,
    title: "Protección de Datos Personales",
    description: "Qué información nunca debes compartir y cómo mantener seguros tus datos bancarios y personales.",
    duration: "15 minutos",
    color: "danger",
    lessons: [
      {
        id: 1,
        title: "¿Qué son los Datos Personales?",
        duration: "5 min",
        imageDescription: "Iconos de diferentes tipos de datos personales: nombre, dirección, teléfono",
        content: [
          "Tus datos personales son información que te identifica: tu nombre completo, fecha de nacimiento, dirección, teléfono, CURP, INE.",
          "Los datos bancarios son especialmente sensibles: número de cuenta, número de tarjeta, NIP, contraseñas, tokens.",
          "Los delincuentes buscan esta información para hacerse pasar por ti o para acceder a tu dinero."
        ],
        tips: [
          "Tu INE tiene datos muy valiosos, no compartas fotos de ella",
          "El CURP y RFC también son datos sensibles",
          "Desconfía de quien pida información 'para verificar tu identidad'"
        ],
        quiz: [
          {
            id: 1,
            question: "¿Cuáles son datos bancarios sensibles?",
            options: [
              "Solo el nombre del banco",
              "Número de tarjeta, NIP, contraseñas y tokens",
              "Solo el nombre de la sucursal",
              "El horario del banco"
            ],
            correctAnswer: 1,
            explanation: "Los datos bancarios sensibles incluyen número de tarjeta, NIP, contraseñas y tokens. Nunca los compartas."
          }
        ]
      },
      {
        id: 2,
        title: "Información que NUNCA Debes Compartir",
        duration: "5 min",
        imageDescription: "Lista visual de datos que nunca compartir con signo de alto",
        content: [
          "NUNCA compartas: tu NIP completo, el código token, tus contraseñas, o el CVV de tu tarjeta por teléfono o mensaje.",
          "El banco ya tiene tu información y NUNCA te la pedirá de vuelta. Si alguien te la pide, es un fraude.",
          "No publiques fotos de tu tarjeta, INE, estados de cuenta o cualquier documento bancario en redes sociales."
        ],
        tips: [
          "Ni siquiera empleados del banco necesitan saber tu contraseña",
          "Si alguien insiste en pedirte estos datos, es una señal clara de fraude",
          "Destruye documentos bancarios viejos antes de tirarlos"
        ],
        quiz: [
          {
            id: 1,
            question: "¿El banco te pedirá tu contraseña completa por teléfono?",
            options: [
              "Sí, para verificar tu identidad",
              "Solo en casos especiales",
              "Nunca, el banco jamás pide contraseñas",
              "Solo si hay un problema"
            ],
            correctAnswer: 2,
            explanation: "El banco NUNCA te pedirá tu contraseña, NIP o token. Cualquier persona que lo haga está intentando estafarte."
          }
        ]
      },
      {
        id: 3,
        title: "Cómo Proteger tu Información",
        duration: "5 min",
        imageDescription: "Persona protegiendo sus documentos y dispositivos con acciones seguras",
        content: [
          "Guarda tus documentos importantes (INE, pasaporte, estados de cuenta) en un lugar seguro en tu casa.",
          "En tu teléfono, activa el bloqueo con contraseña, huella o reconocimiento facial para que nadie pueda acceder si lo pierdes.",
          "Cuando uses WiFi público (en cafeterías o plazas), evita entrar a tu banco o hacer compras."
        ],
        tips: [
          "Usa una funda o cartera que proteja tu tarjeta de lectores no autorizados",
          "Destruye estados de cuenta viejos, no solo los tires a la basura",
          "Revisa periódicamente quién tiene acceso a tu información"
        ],
        quiz: [
          {
            id: 1,
            question: "¿Qué debes evitar hacer cuando usas WiFi público?",
            options: [
              "Leer noticias",
              "Revisar el clima",
              "Entrar a tu banco o hacer compras",
              "Ver videos"
            ],
            correctAnswer: 2,
            explanation: "En redes WiFi públicas, evita acceder a tu banco o hacer compras porque podrían interceptar tu información."
          }
        ]
      }
    ]
  },
  {
    id: 6,
    icon: HelpCircle,
    title: "Qué Hacer si Eres Víctima",
    description: "Pasos a seguir si crees que has sido víctima de fraude. A quién llamar y cómo reportar.",
    duration: "10 minutos",
    color: "primary",
    lessons: [
      {
        id: 1,
        title: "Primeros Pasos ante un Fraude",
        duration: "5 min",
        imageDescription: "Lista de pasos inmediatos a seguir ante un fraude",
        content: [
          "Mantén la calma. Si crees que fuiste víctima de fraude, actuar rápido pero con tranquilidad es clave.",
          "Paso 1: Bloquea inmediatamente tu tarjeta llamando a tu banco o desde la app móvil.",
          "Paso 2: Cambia todas tus contraseñas bancarias desde un dispositivo seguro.",
          "Paso 3: Anota todo lo que recuerdes: fecha, hora, qué información diste, números que te llamaron."
        ],
        tips: [
          "El tiempo es crucial: mientras más rápido actúes, más posibilidades de recuperar tu dinero",
          "No borres mensajes ni llamadas del estafador, son evidencia",
          "Pide ayuda a un familiar de confianza para que te acompañe en el proceso"
        ],
        quiz: [
          {
            id: 1,
            question: "¿Cuál es el primer paso si crees que fuiste víctima de fraude?",
            options: [
              "Esperar a ver si pasa algo",
              "Bloquear inmediatamente tu tarjeta",
              "Contarle a tus amigos",
              "Borrar los mensajes sospechosos"
            ],
            correctAnswer: 1,
            explanation: "Lo primero es bloquear tu tarjeta para evitar más cargos no autorizados mientras investigas qué pasó."
          }
        ]
      },
      {
        id: 2,
        title: "Cómo Reportar y Recuperar tu Dinero",
        duration: "5 min",
        imageDescription: "Persona haciendo reporte de fraude por teléfono y en oficina",
        content: [
          "Llama a la línea de atención de tu banco y reporta el fraude. Pide un número de folio o referencia.",
          "Acude a tu sucursal bancaria para hacer la reclamación formal. Lleva tu INE y cualquier evidencia que tengas.",
          "También puedes reportar a CONDUSEF (Comisión Nacional para la Protección de Usuarios de Servicios Financieros) al 55 53 400 999."
        ],
        tips: [
          "Guarda todos los números de folio y nombres de quien te atienda",
          "La ley te protege: tienes derecho a reclamar cargos no reconocidos",
          "El banco tiene plazos para responderte, pregunta cuántos días son"
        ],
        quiz: [
          {
            id: 1,
            question: "¿A qué institución puedes acudir si el banco no resuelve tu caso?",
            options: [
              "A la policía únicamente",
              "A CONDUSEF",
              "A ningún lado",
              "Solo esperar"
            ],
            correctAnswer: 1,
            explanation: "CONDUSEF es la institución que protege a los usuarios de servicios financieros y puede ayudarte si el banco no resuelve tu caso."
          }
        ]
      }
    ]
  }
];
