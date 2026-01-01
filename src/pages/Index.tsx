import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ModulesSection from "@/components/ModulesSection";
import FraudAlertsSection from "@/components/FraudAlertsSection";
import QuickTipsSection from "@/components/QuickTipsSection";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>FinanzasSeguras - Educación Financiera Digital para Adultos Mayores</title>
        <meta 
          name="description" 
          content="Aprende a usar la banca digital de forma segura. Cursos gratuitos sobre prevención de fraudes, uso de tarjetas y protección financiera para adultos mayores."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <HeroSection />
          <ModulesSection />
          <FraudAlertsSection />
          <QuickTipsSection />
        </main>
      </div>
    </>
  );
};

export default Index;
