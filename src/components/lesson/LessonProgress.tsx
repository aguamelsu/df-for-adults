import { cn } from "@/lib/utils";

interface LessonProgressProps {
  currentStep: number;
  totalSteps: number;
  lessonTitle: string;
}

const LessonProgress = ({ currentStep, totalSteps, lessonTitle }: LessonProgressProps) => {
  const progressPercentage = ((currentStep + 1) / totalSteps) * 100;

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between text-sm">
        <span className="text-muted-foreground">
          Paso {currentStep + 1} de {totalSteps}
        </span>
        <span className="font-medium text-primary">
          {Math.round(progressPercentage)}% completado
        </span>
      </div>
      
      <div className="h-3 bg-muted rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-500 ease-out rounded-full"
          style={{ width: `${progressPercentage}%` }}
        />
      </div>

      <div className="flex gap-2 overflow-x-auto pb-2">
        {Array.from({ length: totalSteps }).map((_, index) => (
          <div
            key={index}
            className={cn(
              "h-2 flex-1 rounded-full transition-colors min-w-[20px]",
              index <= currentStep ? "bg-primary" : "bg-muted"
            )}
          />
        ))}
      </div>
    </div>
  );
};

export default LessonProgress;
