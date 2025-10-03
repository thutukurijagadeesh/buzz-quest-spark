import { subjects } from "@/data/quizData";
import SubjectCard from "@/components/SubjectCard";
import { Sparkles, Trophy, Zap } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background px-4 py-12">
      <div className="mx-auto max-w-7xl">
        {/* Hero Section */}
        <div className="mb-12 text-center animate-fade-in">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-6 py-2 text-primary shadow-primary">
            <Sparkles className="h-5 w-5" />
            <span className="font-medium">Learn. Practice. Excel.</span>
          </div>
          <h1 className="mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-6xl font-bold text-transparent">
            QuizBuzz
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-muted-foreground">
            Master 11+ subjects with interactive quizzes. Track your progress, earn XP,
            and compete with learners worldwide! 🚀
          </p>

          {/* Stats */}
          <div className="mx-auto grid max-w-3xl grid-cols-3 gap-6">
            <div className="rounded-2xl bg-card p-6 shadow-card">
              <Trophy className="mx-auto mb-2 h-8 w-8 text-primary" />
              <div className="text-3xl font-bold text-foreground">11+</div>
              <div className="text-sm text-muted-foreground">Subjects</div>
            </div>
            <div className="rounded-2xl bg-card p-6 shadow-card">
              <Zap className="mx-auto mb-2 h-8 w-8 text-secondary" />
              <div className="text-3xl font-bold text-foreground">1000+</div>
              <div className="text-sm text-muted-foreground">Questions</div>
            </div>
            <div className="rounded-2xl bg-card p-6 shadow-card">
              <Sparkles className="mx-auto mb-2 h-8 w-8 text-warning" />
              <div className="text-3xl font-bold text-foreground">4</div>
              <div className="text-sm text-muted-foreground">Difficulty Levels</div>
            </div>
          </div>
        </div>

        {/* Subject Grid */}
        <div>
          <h2 className="mb-6 text-center text-3xl font-bold text-foreground">
            Choose Your Subject
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {subjects.map((subject, index) => (
              <div
                key={subject.id}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <SubjectCard subject={subject} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
