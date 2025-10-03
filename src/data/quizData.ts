export interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  subject: string;
  difficulty: string;
}

export interface Subject {
  id: string;
  name: string;
  icon: string;
  color: string;
  description: string;
}

export const subjects: Subject[] = [
  {
    id: "biology",
    name: "Biology",
    icon: "🧬",
    color: "142 71% 45%",
    description: "Life sciences and living organisms"
  },
  {
    id: "chemistry",
    name: "Chemistry",
    icon: "⚗️",
    color: "280 100% 70%",
    description: "Matter, elements, and reactions"
  },
  {
    id: "physics",
    name: "Physics",
    icon: "⚡",
    color: "220 90% 56%",
    description: "Energy, motion, and forces"
  },
  {
    id: "gk",
    name: "General Knowledge",
    icon: "🌍",
    color: "38 92% 50%",
    description: "World facts and current affairs"
  },
  {
    id: "python",
    name: "Python",
    icon: "🐍",
    color: "210 100% 50%",
    description: "Python programming language"
  },
  {
    id: "java",
    name: "Java",
    icon: "☕",
    color: "0 84% 60%",
    description: "Java programming language"
  },
  {
    id: "c",
    name: "C",
    icon: "©️",
    color: "220 13% 45%",
    description: "C programming language"
  },
  {
    id: "cpp",
    name: "C++",
    icon: "➕",
    color: "210 50% 50%",
    description: "C++ programming language"
  },
  {
    id: "mysql",
    name: "MySQL",
    icon: "🗄️",
    color: "200 80% 45%",
    description: "Database management"
  },
  {
    id: "html",
    name: "HTML",
    icon: "🌐",
    color: "15 90% 55%",
    description: "Web markup language"
  },
  {
    id: "css",
    name: "CSS",
    icon: "🎨",
    color: "210 100% 60%",
    description: "Styling and design"
  },
  {
    id: "javascript",
    name: "JavaScript",
    icon: "⚡",
    color: "50 100% 50%",
    description: "Web programming language"
  }
];

export const difficulties = [
  { id: "basic", name: "Basic", questionCount: 200, xp: 10 },
  { id: "medium", name: "Medium", questionCount: 300, xp: 20 },
  { id: "expert", name: "Expert", questionCount: 200, xp: 30 },
  { id: "professional", name: "Professional", questionCount: 300, xp: 50 }
];

// Sample questions for demonstration
export const sampleQuestions: Question[] = [
  {
    id: "bio-1",
    question: "What is the powerhouse of the cell?",
    options: ["Nucleus", "Mitochondria", "Ribosome", "Golgi Apparatus"],
    correctAnswer: 1,
    explanation: "Mitochondria are known as the powerhouse of the cell because they generate most of the cell's ATP (energy).",
    subject: "biology",
    difficulty: "basic"
  },
  {
    id: "chem-1",
    question: "What is the chemical symbol for Gold?",
    options: ["Go", "Au", "Gd", "Gl"],
    correctAnswer: 1,
    explanation: "Au comes from the Latin word 'Aurum' which means gold.",
    subject: "chemistry",
    difficulty: "basic"
  },
  {
    id: "phy-1",
    question: "What is the speed of light in vacuum?",
    options: ["300,000 km/s", "150,000 km/s", "450,000 km/s", "200,000 km/s"],
    correctAnswer: 0,
    explanation: "The speed of light in vacuum is approximately 299,792 km/s, commonly rounded to 300,000 km/s.",
    subject: "physics",
    difficulty: "basic"
  },
  {
    id: "py-1",
    question: "Which keyword is used to define a function in Python?",
    options: ["function", "def", "func", "define"],
    correctAnswer: 1,
    explanation: "In Python, the 'def' keyword is used to define a function.",
    subject: "python",
    difficulty: "basic"
  },
  {
    id: "js-1",
    question: "What does DOM stand for?",
    options: ["Document Object Model", "Data Object Model", "Digital Object Manager", "Document Oriented Model"],
    correctAnswer: 0,
    explanation: "DOM stands for Document Object Model, which represents the structure of HTML and XML documents.",
    subject: "javascript",
    difficulty: "basic"
  }
];
