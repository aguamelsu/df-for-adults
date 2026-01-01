import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, XCircle, HelpCircle } from "lucide-react";
import { QuizQuestion } from "@/data/modulesData";
import { cn } from "@/lib/utils";

interface QuizCardProps {
  question: QuizQuestion;
  onComplete: (correct: boolean) => void;
}

const QuizCard = ({ question, onComplete }: QuizCardProps) => {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  const handleAnswerSelect = (index: number) => {
    if (showResult) return;
    setSelectedAnswer(index);
  };

  const handleCheckAnswer = () => {
    if (selectedAnswer === null) return;
    setShowResult(true);
  };

  const handleContinue = () => {
    onComplete(selectedAnswer === question.correctAnswer);
  };

  const isCorrect = selectedAnswer === question.correctAnswer;

  return (
    <Card className="border-2 border-primary/20 bg-primary/5">
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
            <HelpCircle className="h-6 w-6 text-primary" />
          </div>
          <CardTitle className="text-xl">Pregunta de Comprensión</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <p className="text-lg font-medium">{question.question}</p>
        
        <div className="space-y-3">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerSelect(index)}
              disabled={showResult}
              className={cn(
                "w-full text-left p-4 rounded-xl border-2 transition-all text-base",
                "hover:border-primary hover:bg-primary/5",
                selectedAnswer === index && !showResult && "border-primary bg-primary/10",
                showResult && index === question.correctAnswer && "border-success bg-success/10",
                showResult && selectedAnswer === index && index !== question.correctAnswer && "border-danger bg-danger/10",
                showResult && "cursor-default"
              )}
            >
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-muted font-medium">
                  {String.fromCharCode(65 + index)}
                </span>
                <span className="flex-1">{option}</span>
                {showResult && index === question.correctAnswer && (
                  <CheckCircle className="h-6 w-6 text-success shrink-0" />
                )}
                {showResult && selectedAnswer === index && index !== question.correctAnswer && (
                  <XCircle className="h-6 w-6 text-danger shrink-0" />
                )}
              </div>
            </button>
          ))}
        </div>

        {showResult && (
          <div className={cn(
            "p-4 rounded-xl",
            isCorrect ? "bg-success/10 border border-success/30" : "bg-warning/10 border border-warning/30"
          )}>
            <div className="flex items-start gap-3">
              {isCorrect ? (
                <CheckCircle className="h-6 w-6 text-success shrink-0 mt-0.5" />
              ) : (
                <HelpCircle className="h-6 w-6 text-warning shrink-0 mt-0.5" />
              )}
              <div>
                <p className={cn(
                  "font-semibold mb-1",
                  isCorrect ? "text-success" : "text-warning"
                )}>
                  {isCorrect ? "¡Correcto!" : "Respuesta Incorrecta"}
                </p>
                <p className="text-muted-foreground">{question.explanation}</p>
              </div>
            </div>
          </div>
        )}

        <div className="flex justify-end gap-3 pt-4">
          {!showResult ? (
            <Button 
              size="lg" 
              onClick={handleCheckAnswer}
              disabled={selectedAnswer === null}
              className="text-lg px-8"
            >
              Verificar Respuesta
            </Button>
          ) : (
            <Button 
              size="lg" 
              onClick={handleContinue}
              className="text-lg px-8"
            >
              Continuar
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default QuizCard;
