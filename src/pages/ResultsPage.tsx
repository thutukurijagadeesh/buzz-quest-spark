import { useLocation, useNavigate, useParams } from "react-router-dom";
import { subjects, difficulties } from "@/data/quizData";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Trophy, Home, RefreshCw, TrendingUp } from "lucide-react";
import { useEffect } from "react";

const ResultsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { subjectId, difficultyId } = useParams();
  const { score, total } = location.state || { score: 0, total: 0 };

  const subject = subjects.find((s) => s.id === subjectId);
  const difficulty = difficulties.find((d) => d.id === difficultyId);
  const percentage = Math.round((score / total) * 100);
  const earnedXP = score * (difficulty?.xp || 10);

  useEffect(() => {
    // Confetti effect for good scores
    if (percentage >= 70) {
      // In a real app, you'd add a confetti library here
      console.log("🎉 Celebration time!");
    }
  }, [percentage]);

  const getPerformanceMessage = () => {
    if (percentage >= 90) return "Outstanding! 🌟";
    if (percentage >= 70) return "Great Job! 🎯";
    if (percentage >= 50) return "Good Effort! 💪";
    return "Keep Learning! 📚";
  };

  const getPerformanceColor = () => {
    if (percentage >= 70) return "142 71% 45%"; // success
    if (percentage >= 50) return "38 92% 50%"; // warning
    return "0 84% 60%"; // destructive
  };

  return (
    <div className="min-h-screen bg-background px-4 py-8">
      <div className="mx-auto max-w-2xl">
        <Card className="overflow-hidden border-2 shadow-hover animate-scale-in">
          <div
            className="p-8 text-center"
            style={{
              borderTop: `4px solid hsl(${subject?.color})`,
            }}
          >
            <div
              className="mx-auto mb-6 flex h-32 w-32 items-center justify-center rounded-full text-6xl shadow-primary animate-float"
              style={{
                backgroundColor: `hsl(${getPerformanceColor()} / 0.1)`,
              }}
            >
              <Trophy
                className="h-20 w-20"
                style={{
                  color: `hsl(${getPerformanceColor()})`,
                }}
              />
            </div>

            <h1 className="mb-2 text-4xl font-bold text-foreground">
              {getPerformanceMessage()}
            </h1>
            <p className="mb-8 text-lg text-muted-foreground">
              {subject?.name} - {difficulty?.name}
            </p>

            <div className="mb-8 space-y-4">
              <div className="rounded-2xl bg-muted p-6">
                <div className="mb-2 text-6xl font-bold text-foreground">
                  {percentage}%
                </div>
                <div className="text-muted-foreground">
                  {score} out of {total} correct
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl bg-muted p-4">
                  <div className="mb-1 text-sm text-muted-foreground">XP Earned</div>
                  <div className="text-2xl font-bold text-primary">+{earnedXP}</div>
                </div>
                <div className="rounded-xl bg-muted p-4">
                  <div className="mb-1 text-sm text-muted-foreground">Accuracy</div>
                  <div className="text-2xl font-bold text-primary">{percentage}%</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Button
                onClick={() => navigate(`/quiz/${subjectId}/${difficultyId}`)}
                size="lg"
                className="gradient-primary shadow-primary"
              >
                <RefreshCw className="mr-2 h-5 w-5" />
                Retry Quiz
              </Button>
              <Button
                onClick={() => navigate(`/difficulty/${subjectId}`)}
                variant="outline"
                size="lg"
              >
                <TrendingUp className="mr-2 h-5 w-5" />
                Try Different Level
              </Button>
              <Button onClick={() => navigate("/")} variant="outline" size="lg">
                <Home className="mr-2 h-5 w-5" />
                Home
              </Button>
            </div>
          </div>
        </Card>

        <div className="mt-8 text-center text-sm text-muted-foreground">
          <p>Keep practicing to improve your skills! 🚀</p>
        </div>
      </div>
    </div>
  );
};

export default ResultsPage;
