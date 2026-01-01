import lessonBankingApp from "@/assets/lesson-banking-app.jpg";
import lessonPasswordSecurity from "@/assets/lesson-password-security.jpg";
import lessonFraudDetection from "@/assets/lesson-fraud-detection.jpg";
import lessonCardSafety from "@/assets/lesson-card-safety.jpg";
import lessonTransfers from "@/assets/lesson-transfers.jpg";
import lessonEmergencyHelp from "@/assets/lesson-emergency-help.jpg";

// Map module IDs to their corresponding images
export const moduleImages: Record<number, string> = {
  1: lessonBankingApp,      // Introducción a la Banca Digital
  2: lessonPasswordSecurity, // Contraseñas Seguras
  3: lessonFraudDetection,   // Cómo Detectar Fraudes
  4: lessonCardSafety,       // Uso Seguro de Tarjetas
  5: lessonTransfers,        // Transferencias y Pagos
  6: lessonEmergencyHelp,    // Qué Hacer en Emergencias
};

export const getModuleImage = (moduleId: number): string => {
  return moduleImages[moduleId] || lessonBankingApp;
};
