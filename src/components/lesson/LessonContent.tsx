import { Lesson } from "@/data/modulesData";
import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb } from "lucide-react";
import { getModuleImage } from "@/data/lessonImages";

interface LessonContentProps {
  lesson: Lesson;
  moduleId: number;
}

const LessonContent = ({ lesson, moduleId }: LessonContentProps) => {
  const lessonImage = getModuleImage(moduleId);

  return (
    <div className="space-y-8">
      {/* Lesson image */}
      <Card className="overflow-hidden border-0 shadow-lg">
        <img 
          src={lessonImage} 
          alt={lesson.imageDescription}
          className="w-full h-64 md:h-80 object-cover"
        />
        <CardContent className="py-3 bg-muted/30">
          <p className="text-sm text-muted-foreground text-center italic">
            {lesson.imageDescription}
          </p>
        </CardContent>
      </Card>

      {/* Main content */}
      <div className="space-y-6">
        {lesson.content.map((paragraph, index) => (
          <p key={index} className="text-lg leading-relaxed text-foreground/90">
            {paragraph}
          </p>
        ))}
      </div>

      {/* Tips section */}
      <Card className="bg-accent/5 border-accent/20">
        <CardContent className="pt-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/20">
              <Lightbulb className="h-5 w-5 text-accent" />
            </div>
            <h3 className="text-xl font-semibold">Consejos Importantes</h3>
          </div>
          <ul className="space-y-3">
            {lesson.tips.map((tip, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground text-sm font-medium mt-0.5">
                  {index + 1}
                </span>
                <span className="text-base text-muted-foreground">{tip}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default LessonContent;
