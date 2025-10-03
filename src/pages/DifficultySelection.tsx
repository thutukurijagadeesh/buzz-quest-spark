import { useParams, useNavigate } from "react-router-dom";
import { subjects, difficulties } from "@/data/quizData";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Trophy, Zap, Star, Crown } from "lucide-react";

const DifficultySelection = () => {
  const { subjectId } = useParams();
  const navigate = useNavigate();
  const subject = subjects.find((s) => s.id === subjectId);

  if (!subject) {
    return <div>Subject not found</div>;
  }

  const difficultyIcons = [Zap, Star, Trophy, Crown];

  return (
    <div className="min-h-screen bg-background px-4 py-8">
      <div className="mx-auto max-w-6xl">
        <Button
          variant="ghost"
          onClick={() => navigate("/")}
          className="mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Subjects
        </Button>

        <div className="mb-12 text-center animate-fade-in">
          <div
            className="mx-auto mb-4 inline-flex h-24 w-24 items-center justify-center rounded-3xl text-5xl shadow-primary"
            style={{
              backgroundColor: `hsl(${subject.color} / 0.15)`,
            }}
          >
            {subject.icon}
          </div>
          <h1 className="mb-2 text-4xl font-bold text-foreground">
            {subject.name}
          </h1>
          <p className="text-lg text-muted-foreground">
            Choose your difficulty level
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {difficulties.map((difficulty, index) => {
            const Icon = difficultyIcons[index];
            return (
              <Card
                key={difficulty.id}
                className="group cursor-pointer overflow-hidden border-2 transition-all duration-300 hover:scale-105 hover:shadow-hover animate-slide-up"
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
                onClick={() => navigate(`/quiz/${subjectId}/${difficulty.id}`)}
              >
                <div className="p-6 text-center">
                  <Icon
                    className="mx-auto mb-4 h-12 w-12 transition-all duration-300 group-hover:scale-110"
                    style={{
                      color: `hsl(${subject.color})`,
                    }}
                  />
                  <h3 className="mb-2 text-2xl font-bold text-foreground">
                    {difficulty.name}
                  </h3>
                  <p className="mb-4 text-sm text-muted-foreground">
                    {difficulty.questionCount} Questions
                  </p>
                  <div
                    className="inline-block rounded-full px-4 py-2 text-sm font-medium"
                    style={{
                      backgroundColor: `hsl(${subject.color} / 0.1)`,
                      color: `hsl(${subject.color})`,
                    }}
                  >
                    +{difficulty.xp} XP per question
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DifficultySelection;
