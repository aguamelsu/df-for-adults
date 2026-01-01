import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, ArrowRight, BookOpen, Clock, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LessonContent from "@/components/lesson/LessonContent";
import LessonProgress from "@/components/lesson/LessonProgress";
import QuizCard from "@/components/quiz/QuizCard";
import { modulesData } from "@/data/modulesData";
import { cn } from "@/lib/utils";

const ModulePage = () => {
  const { moduleId, lessonId } = useParams();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState<"content" | "quiz">("content");
  const [quizIndex, setQuizIndex] = useState(0);
  const [completedLessons, setCompletedLessons] = useState<number[]>([]);

  const module = modulesData.find((m) => m.id === Number(moduleId));
  
  if (!module) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 container py-16 text-center">
          <h1 className="text-3xl font-bold mb-4">Módulo no encontrado</h1>
          <p className="text-muted-foreground mb-8">El módulo que buscas no existe.</p>
          <Button asChild size="lg">
            <Link to="/">Volver al Inicio</Link>
          </Button>
        </main>
        <Footer />
      </div>
    );
  }

  const lesson = lessonId 
    ? module.lessons.find((l) => l.id === Number(lessonId))
    : null;

  const Icon = module.icon;

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; icon: string; badge: string }> = {
      primary: { bg: "bg-primary/10", icon: "text-primary", badge: "bg-primary" },
      accent: { bg: "bg-accent/10", icon: "text-accent", badge: "bg-accent" },
      warning: { bg: "bg-warning/10", icon: "text-warning", badge: "bg-warning" },
      success: { bg: "bg-success/10", icon: "text-success", badge: "bg-success" },
      danger: { bg: "bg-danger/10", icon: "text-danger", badge: "bg-danger" },
    };
    return colors[color] || colors.primary;
  };

  const colors = getColorClasses(module.color);

  // If viewing a specific lesson
  if (lesson) {
    const lessonIndex = module.lessons.findIndex((l) => l.id === lesson.id);
    const totalSteps = 1 + lesson.quiz.length; // Content + quizzes
    const currentStepIndex = currentStep === "content" ? 0 : 1 + quizIndex;
    const isLastLesson = lessonIndex === module.lessons.length - 1;
    const nextLesson = module.lessons[lessonIndex + 1];

    const handleNextStep = () => {
      if (currentStep === "content") {
        if (lesson.quiz.length > 0) {
          setCurrentStep("quiz");
          setQuizIndex(0);
        } else {
          handleLessonComplete();
        }
      }
    };

    const handleQuizComplete = (correct: boolean) => {
      if (quizIndex < lesson.quiz.length - 1) {
        setQuizIndex(quizIndex + 1);
      } else {
        handleLessonComplete();
      }
    };

    const handleLessonComplete = () => {
      if (!completedLessons.includes(lesson.id)) {
        setCompletedLessons([...completedLessons, lesson.id]);
      }
      
      if (isLastLesson) {
        navigate(`/modulo/${module.id}`);
      } else if (nextLesson) {
        navigate(`/modulo/${module.id}/leccion/${nextLesson.id}`);
        setCurrentStep("content");
        setQuizIndex(0);
      }
    };

    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Helmet>
          <title>{lesson.title} - {module.title} | Finanzas Seguras para Adultos Mayores</title>
          <meta name="description" content={`Lección: ${lesson.title}. ${module.description}`} />
        </Helmet>
        
        <Header />
        
        <main className="flex-1">
          {/* Breadcrumb */}
          <div className="bg-muted/50 border-b">
            <div className="container py-4">
              <nav className="flex items-center gap-2 text-sm text-muted-foreground">
                <Link to="/" className="hover:text-primary transition-colors">Inicio</Link>
                <span>/</span>
                <Link to={`/modulo/${module.id}`} className="hover:text-primary transition-colors">
                  {module.title}
                </Link>
                <span>/</span>
                <span className="text-foreground font-medium">{lesson.title}</span>
              </nav>
            </div>
          </div>

          <div className="container py-8">
            {/* Progress */}
            <div className="max-w-3xl mx-auto mb-8">
              <LessonProgress 
                currentStep={currentStepIndex}
                totalSteps={totalSteps}
                lessonTitle={lesson.title}
              />
            </div>

            {/* Lesson header */}
            <div className="max-w-3xl mx-auto mb-8">
              <div className="flex items-center gap-4 mb-4">
                <div className={cn("flex h-14 w-14 items-center justify-center rounded-xl", colors.bg)}>
                  <Icon className={cn("h-7 w-7", colors.icon)} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">
                    Lección {lessonIndex + 1} de {module.lessons.length}
                  </p>
                  <h1 className="text-2xl md:text-3xl font-bold">{lesson.title}</h1>
                </div>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Clock className="h-5 w-5" />
                <span>{lesson.duration} de lectura</span>
              </div>
            </div>

            {/* Content or Quiz */}
            <div className="max-w-3xl mx-auto">
              {currentStep === "content" ? (
                <>
                  <LessonContent lesson={lesson} moduleId={module.id} />
                  
                  <div className="flex justify-between mt-12 pt-8 border-t">
                    <Button 
                      variant="outline" 
                      size="lg"
                      asChild
                    >
                      <Link to={`/modulo/${module.id}`}>
                        <ArrowLeft className="h-5 w-5 mr-2" />
                        Volver al Módulo
                      </Link>
                    </Button>
                    
                    <Button size="lg" onClick={handleNextStep}>
                      {lesson.quiz.length > 0 ? "Continuar al Cuestionario" : "Siguiente Lección"}
                      <ArrowRight className="h-5 w-5 ml-2" />
                    </Button>
                  </div>
                </>
              ) : (
                <QuizCard 
                  question={lesson.quiz[quizIndex]}
                  onComplete={handleQuizComplete}
                />
              )}
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    );
  }

  // Module overview
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>{module.title} | Finanzas Seguras para Adultos Mayores</title>
        <meta name="description" content={module.description} />
      </Helmet>
      
      <Header />
      
      <main className="flex-1">
        {/* Hero section */}
        <section className={cn("py-12 md:py-16", colors.bg)}>
          <div className="container">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
              <Link to="/" className="hover:text-primary transition-colors">Inicio</Link>
              <span>/</span>
              <span className="text-foreground font-medium">{module.title}</span>
            </div>
            
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className={cn("flex h-20 w-20 items-center justify-center rounded-2xl bg-background shadow-lg")}>
                <Icon className={cn("h-10 w-10", colors.icon)} />
              </div>
              <div className="flex-1">
                <span className={cn("text-sm font-medium px-3 py-1 rounded-full text-primary-foreground inline-block mb-3", colors.badge)}>
                  Módulo {module.id}
                </span>
                <h1 className="text-3xl md:text-4xl font-bold mb-3">{module.title}</h1>
                <p className="text-lg text-muted-foreground max-w-2xl">{module.description}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-6 mt-8">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Clock className="h-5 w-5" />
                <span className="text-base">{module.duration}</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <BookOpen className="h-5 w-5" />
                <span className="text-base">{module.lessons.length} lecciones</span>
              </div>
            </div>
          </div>
        </section>

        {/* Lessons list */}
        <section className="py-12 md:py-16">
          <div className="container">
            <h2 className="text-2xl font-bold mb-8">Contenido del Módulo</h2>
            
            <div className="space-y-4 max-w-3xl">
              {module.lessons.map((lesson, index) => {
                const isCompleted = completedLessons.includes(lesson.id);
                
                return (
                  <Card 
                    key={lesson.id}
                    className="hover:shadow-md transition-all hover:border-primary/30"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className={cn(
                          "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl font-bold text-lg",
                          isCompleted ? "bg-success/10 text-success" : colors.bg + " " + colors.icon
                        )}>
                          {isCompleted ? (
                            <CheckCircle className="h-6 w-6" />
                          ) : (
                            index + 1
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-xl font-semibold mb-1">{lesson.title}</h3>
                          <div className="flex flex-wrap items-center gap-4 text-muted-foreground text-sm">
                            <span className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              {lesson.duration}
                            </span>
                            <span>
                              {lesson.quiz.length} {lesson.quiz.length === 1 ? "pregunta" : "preguntas"}
                            </span>
                          </div>
                        </div>
                        <Button asChild size="lg">
                          <Link to={`/modulo/${module.id}/leccion/${lesson.id}`}>
                            {isCompleted ? "Repasar" : "Comenzar"}
                            <ArrowRight className="h-5 w-5 ml-2" />
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Back button */}
            <div className="mt-12">
              <Button variant="outline" size="lg" asChild>
                <Link to="/">
                  <ArrowLeft className="h-5 w-5 mr-2" />
                  Volver a Todos los Módulos
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ModulePage;
