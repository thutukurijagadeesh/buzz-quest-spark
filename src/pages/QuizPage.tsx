import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { subjects, difficulties, sampleQuestions } from "@/data/quizData";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, Clock, CheckCircle2, XCircle } from "lucide-react";
import { toast } from "sonner";

const QuizPage = () => {
  const { subjectId, difficultyId } = useParams();
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);

  const subject = subjects.find((s) => s.id === subjectId);
  const difficulty = difficulties.find((d) => d.id === difficultyId);
  
  // Filter questions by subject (in real app, also filter by difficulty)
  const questions = sampleQuestions.filter((q) => q.subject === subjectId);
  const currentQuestion = questions[currentQuestionIndex];

  useEffect(() => {
    // Only run timer if we have questions
    if (questions.length === 0) return;
    
    if (timeLeft === 0) {
      handleNextQuestion();
    }
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft, questions.length]);

  const handleAnswerSelect = (answerIndex: number) => {
    if (showExplanation) return;
    setSelectedAnswer(answerIndex);
    setShowExplanation(true);
    
    if (answerIndex === currentQuestion.correctAnswer) {
      setScore(score + 1);
      toast.success("Correct! 🎉", {
        description: `+${difficulty?.xp} XP`,
      });
    } else {
      toast.error("Incorrect", {
        description: "Keep learning!",
      });
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
      setTimeLeft(30);
    } else {
      navigate(`/results/${subjectId}/${difficultyId}`, {
        state: { score, total: questions.length },
      });
    }
  };

  if (!subject || !difficulty) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  if (questions.length === 0) {
    return (
      <div className="min-h-screen bg-background px-4 py-8">
        <div className="mx-auto max-w-2xl text-center">
          <Card className="p-8">
            <h2 className="text-2xl font-bold mb-4">No Questions Available</h2>
            <p className="text-muted-foreground mb-6">
              Questions for {subject.name} - {difficulty.name} are coming soon!
            </p>
            <Button onClick={() => navigate(`/difficulty/${subjectId}`)}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Choose Another Level
            </Button>
          </Card>
        </div>
      </div>
    );
  }

  if (!currentQuestion) {
    return <div className="min-h-screen flex items-center justify-center">Loading question...</div>;
  }

  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-background px-4 py-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-6 flex items-center justify-between">
          <Button
            variant="ghost"
            onClick={() => navigate(`/difficulty/${subjectId}`)}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Exit Quiz
          </Button>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Clock className="h-5 w-5" />
            <span className="text-xl font-bold">{timeLeft}s</span>
          </div>
        </div>

        <div className="mb-6">
          <div className="mb-2 flex items-center justify-between text-sm">
            <span className="font-medium">
              Question {currentQuestionIndex + 1} of {questions.length}
            </span>
            <span className="font-medium">Score: {score}</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        <Card className="mb-6 overflow-hidden border-2 shadow-card animate-scale-in">
          <div
            className="p-6"
            style={{
              borderTop: `4px solid hsl(${subject.color})`,
            }}
          >
            <h2 className="mb-6 text-2xl font-bold text-foreground">
              {currentQuestion.question}
            </h2>

            <div className="space-y-3">
              {currentQuestion.options.map((option, index) => {
                const isSelected = selectedAnswer === index;
                const isCorrect = index === currentQuestion.correctAnswer;
                const showResult = showExplanation;

                let buttonStyle = "border-2 hover:border-primary";
                if (showResult) {
                  if (isCorrect) {
                    buttonStyle = "border-2 border-success bg-success/10";
                  } else if (isSelected && !isCorrect) {
                    buttonStyle = "border-2 border-destructive bg-destructive/10";
                  }
                }

                return (
                  <Button
                    key={index}
                    variant="outline"
                    className={`w-full justify-start p-6 text-left text-base transition-all ${buttonStyle}`}
                    onClick={() => handleAnswerSelect(index)}
                    disabled={showExplanation}
                  >
                    <span className="mr-4 flex h-8 w-8 items-center justify-center rounded-full bg-muted font-bold">
                      {String.fromCharCode(65 + index)}
                    </span>
                    {option}
                    {showResult && isCorrect && (
                      <CheckCircle2 className="ml-auto h-5 w-5 text-success" />
                    )}
                    {showResult && isSelected && !isCorrect && (
                      <XCircle className="ml-auto h-5 w-5 text-destructive" />
                    )}
                  </Button>
                );
              })}
            </div>

            {showExplanation && (
              <div className="mt-6 rounded-lg bg-muted p-4 animate-fade-in">
                <h3 className="mb-2 font-bold text-foreground">Explanation:</h3>
                <p className="text-muted-foreground">{currentQuestion.explanation}</p>
              </div>
            )}
          </div>
        </Card>

        {showExplanation && (
          <div className="text-center">
            <Button
              onClick={handleNextQuestion}
              size="lg"
              className="gradient-primary shadow-primary animate-scale-in"
            >
              {currentQuestionIndex < questions.length - 1
                ? "Next Question"
                : "View Results"}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizPage;
