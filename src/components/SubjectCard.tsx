import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Subject } from "@/data/quizData";

interface SubjectCardProps {
  subject: Subject;
}

const SubjectCard = ({ subject }: SubjectCardProps) => {
  const navigate = useNavigate();

  return (
    <Card
      className="group cursor-pointer overflow-hidden border-2 transition-all duration-300 hover:scale-105 hover:shadow-hover animate-fade-in"
      style={{
        borderColor: `hsl(${subject.color} / 0.3)`,
      }}
      onClick={() => navigate(`/difficulty/${subject.id}`)}
    >
      <div className="p-6 text-center">
        <div
          className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-2xl text-4xl shadow-card transition-all duration-300 group-hover:scale-110 group-hover:rotate-6"
          style={{
            backgroundColor: `hsl(${subject.color} / 0.1)`,
          }}
        >
          {subject.icon}
        </div>
        <h3 className="mb-2 text-xl font-bold text-foreground">{subject.name}</h3>
        <p className="text-sm text-muted-foreground">{subject.description}</p>
        <div
          className="mt-4 inline-block rounded-full px-4 py-1 text-xs font-medium"
          style={{
            backgroundColor: `hsl(${subject.color} / 0.1)`,
            color: `hsl(${subject.color})`,
          }}
        >
          Start Learning
        </div>
      </div>
    </Card>
  );
};

export default SubjectCard;
