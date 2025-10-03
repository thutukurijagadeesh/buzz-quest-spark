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
  // Biology
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
    id: "bio-2",
    question: "What is the process by which plants make food?",
    options: ["Respiration", "Photosynthesis", "Digestion", "Fermentation"],
    correctAnswer: 1,
    explanation: "Photosynthesis is the process where plants use sunlight, water, and CO2 to create glucose and oxygen.",
    subject: "biology",
    difficulty: "basic"
  },
  {
    id: "bio-3",
    question: "How many chromosomes do humans have?",
    options: ["23", "46", "48", "44"],
    correctAnswer: 1,
    explanation: "Humans have 46 chromosomes (23 pairs) in each cell, except for reproductive cells which have 23.",
    subject: "biology",
    difficulty: "basic"
  },
  
  // Chemistry
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
    id: "chem-2",
    question: "What is the pH of pure water?",
    options: ["5", "7", "9", "10"],
    correctAnswer: 1,
    explanation: "Pure water has a pH of 7, which is neutral (neither acidic nor basic).",
    subject: "chemistry",
    difficulty: "basic"
  },
  {
    id: "chem-3",
    question: "What is H2O commonly known as?",
    options: ["Oxygen", "Hydrogen", "Water", "Hydrogen Peroxide"],
    correctAnswer: 2,
    explanation: "H2O is the chemical formula for water, consisting of two hydrogen atoms and one oxygen atom.",
    subject: "chemistry",
    difficulty: "basic"
  },
  
  // Physics
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
    id: "phy-2",
    question: "What force keeps us on the ground?",
    options: ["Magnetism", "Gravity", "Friction", "Tension"],
    correctAnswer: 1,
    explanation: "Gravity is the force that attracts objects with mass toward each other, keeping us on Earth's surface.",
    subject: "physics",
    difficulty: "basic"
  },
  {
    id: "phy-3",
    question: "What is the SI unit of force?",
    options: ["Joule", "Newton", "Watt", "Pascal"],
    correctAnswer: 1,
    explanation: "The Newton (N) is the SI unit of force, named after Sir Isaac Newton.",
    subject: "physics",
    difficulty: "basic"
  },
  
  // General Knowledge
  {
    id: "gk-1",
    question: "What is the capital of France?",
    options: ["London", "Berlin", "Paris", "Madrid"],
    correctAnswer: 2,
    explanation: "Paris is the capital and largest city of France, known for the Eiffel Tower and Louvre Museum.",
    subject: "gk",
    difficulty: "basic"
  },
  {
    id: "gk-2",
    question: "How many continents are there?",
    options: ["5", "6", "7", "8"],
    correctAnswer: 2,
    explanation: "There are 7 continents: Africa, Antarctica, Asia, Europe, North America, Oceania, and South America.",
    subject: "gk",
    difficulty: "basic"
  },
  {
    id: "gk-3",
    question: "What is the largest ocean on Earth?",
    options: ["Atlantic", "Indian", "Pacific", "Arctic"],
    correctAnswer: 2,
    explanation: "The Pacific Ocean is the largest and deepest ocean, covering about 63 million square miles.",
    subject: "gk",
    difficulty: "basic"
  },
  
  // Python
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
    id: "py-2",
    question: "What is the correct way to create a list in Python?",
    options: ["{1, 2, 3}", "(1, 2, 3)", "[1, 2, 3]", "<1, 2, 3>"],
    correctAnswer: 2,
    explanation: "Square brackets [] are used to create lists in Python. Curly braces {} create sets or dictionaries.",
    subject: "python",
    difficulty: "basic"
  },
  {
    id: "py-3",
    question: "Which of these is NOT a Python data type?",
    options: ["int", "float", "boolean", "str"],
    correctAnswer: 2,
    explanation: "Python uses 'bool' not 'boolean'. The correct boolean type is 'bool'.",
    subject: "python",
    difficulty: "basic"
  },
  
  // Java
  {
    id: "java-1",
    question: "What is the extension of Java source files?",
    options: [".java", ".class", ".jar", ".jav"],
    correctAnswer: 0,
    explanation: "Java source files have the .java extension. After compilation, they become .class files.",
    subject: "java",
    difficulty: "basic"
  },
  {
    id: "java-2",
    question: "Which keyword is used to create a class in Java?",
    options: ["class", "Class", "new", "object"],
    correctAnswer: 0,
    explanation: "The 'class' keyword is used to define a class in Java.",
    subject: "java",
    difficulty: "basic"
  },
  {
    id: "java-3",
    question: "What is the main method signature in Java?",
    options: [
      "public static void main()",
      "public static void main(String[] args)",
      "public void main(String args)",
      "static void main(String[] args)"
    ],
    correctAnswer: 1,
    explanation: "The correct main method signature is 'public static void main(String[] args)' which serves as the entry point.",
    subject: "java",
    difficulty: "basic"
  },
  
  // C
  {
    id: "c-1",
    question: "What is the correct syntax to print in C?",
    options: ["print()", "printf()", "cout <<", "echo"],
    correctAnswer: 1,
    explanation: "printf() is the standard function used for printing in C, defined in stdio.h header.",
    subject: "c",
    difficulty: "basic"
  },
  {
    id: "c-2",
    question: "Which header file is required for input/output operations in C?",
    options: ["iostream.h", "stdio.h", "conio.h", "stdlib.h"],
    correctAnswer: 1,
    explanation: "stdio.h (standard input/output header) contains declarations for printf(), scanf(), and other I/O functions.",
    subject: "c",
    difficulty: "basic"
  },
  {
    id: "c-3",
    question: "What is the size of 'int' data type in C (typically)?",
    options: ["1 byte", "2 bytes", "4 bytes", "8 bytes"],
    correctAnswer: 2,
    explanation: "On most modern systems, 'int' is 4 bytes (32 bits), though this can vary by platform.",
    subject: "c",
    difficulty: "basic"
  },
  
  // C++
  {
    id: "cpp-1",
    question: "Which of these is a valid way to declare a variable in C++?",
    options: ["int x;", "integer x;", "x: integer;", "var x;"],
    correctAnswer: 0,
    explanation: "In C++, variables are declared using the data type followed by the variable name: 'int x;'",
    subject: "cpp",
    difficulty: "basic"
  },
  {
    id: "cpp-2",
    question: "What is cout used for in C++?",
    options: ["Input", "Output", "Calculations", "Loops"],
    correctAnswer: 1,
    explanation: "cout (character output) is used for output operations in C++, along with the << operator.",
    subject: "cpp",
    difficulty: "basic"
  },
  {
    id: "cpp-3",
    question: "Which operator is used for comments in C++?",
    options: ["#", "//", "/* */", "Both // and /* */"],
    correctAnswer: 3,
    explanation: "C++ supports both single-line comments (//) and multi-line comments (/* */).",
    subject: "cpp",
    difficulty: "basic"
  },
  
  // MySQL
  {
    id: "mysql-1",
    question: "Which command is used to retrieve data from a database?",
    options: ["GET", "SELECT", "FETCH", "RETRIEVE"],
    correctAnswer: 1,
    explanation: "SELECT is the SQL command used to retrieve data from one or more tables in a database.",
    subject: "mysql",
    difficulty: "basic"
  },
  {
    id: "mysql-2",
    question: "What does SQL stand for?",
    options: [
      "Structured Query Language",
      "Simple Question Language",
      "Strong Query Language",
      "Standard Question Language"
    ],
    correctAnswer: 0,
    explanation: "SQL stands for Structured Query Language, used for managing relational databases.",
    subject: "mysql",
    difficulty: "basic"
  },
  {
    id: "mysql-3",
    question: "Which clause is used to filter results in SQL?",
    options: ["FILTER", "WHERE", "HAVING", "IF"],
    correctAnswer: 1,
    explanation: "The WHERE clause is used to filter records based on specified conditions in SQL queries.",
    subject: "mysql",
    difficulty: "basic"
  },
  
  // HTML
  {
    id: "html-1",
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "High Tech Modern Language",
      "Home Tool Markup Language",
      "Hyperlinks and Text Markup Language"
    ],
    correctAnswer: 0,
    explanation: "HTML stands for Hyper Text Markup Language, the standard markup language for creating web pages.",
    subject: "html",
    difficulty: "basic"
  },
  {
    id: "html-2",
    question: "Which tag is used to create a hyperlink?",
    options: ["<link>", "<a>", "<href>", "<url>"],
    correctAnswer: 1,
    explanation: "The <a> (anchor) tag is used to create hyperlinks in HTML, with the href attribute specifying the URL.",
    subject: "html",
    difficulty: "basic"
  },
  {
    id: "html-3",
    question: "Which tag defines the largest heading?",
    options: ["<h6>", "<head>", "<h1>", "<heading>"],
    correctAnswer: 2,
    explanation: "<h1> defines the largest heading, with <h6> being the smallest. Headings range from <h1> to <h6>.",
    subject: "html",
    difficulty: "basic"
  },
  
  // CSS
  {
    id: "css-1",
    question: "What does CSS stand for?",
    options: [
      "Cascading Style Sheets",
      "Creative Style System",
      "Computer Style Sheets",
      "Colorful Style Sheets"
    ],
    correctAnswer: 0,
    explanation: "CSS stands for Cascading Style Sheets, used to style and layout web pages.",
    subject: "css",
    difficulty: "basic"
  },
  {
    id: "css-2",
    question: "Which property is used to change background color?",
    options: ["color", "bg-color", "background-color", "bgcolor"],
    correctAnswer: 2,
    explanation: "The 'background-color' property is used to set the background color of an element in CSS.",
    subject: "css",
    difficulty: "basic"
  },
  {
    id: "css-3",
    question: "How do you select an element with id 'header'?",
    options: [".header", "#header", "*header", "header"],
    correctAnswer: 1,
    explanation: "In CSS, the # symbol is used to select elements by their id attribute (#header selects id='header').",
    subject: "css",
    difficulty: "basic"
  },
  
  // JavaScript
  {
    id: "js-1",
    question: "What does DOM stand for?",
    options: ["Document Object Model", "Data Object Model", "Digital Object Manager", "Document Oriented Model"],
    correctAnswer: 0,
    explanation: "DOM stands for Document Object Model, which represents the structure of HTML and XML documents.",
    subject: "javascript",
    difficulty: "basic"
  },
  {
    id: "js-2",
    question: "Which keyword is used to declare a constant in JavaScript?",
    options: ["var", "let", "const", "constant"],
    correctAnswer: 2,
    explanation: "The 'const' keyword is used to declare constants (variables that cannot be reassigned) in JavaScript.",
    subject: "javascript",
    difficulty: "basic"
  },
  {
    id: "js-3",
    question: "What is the correct way to write an array in JavaScript?",
    options: ["var colors = (1, 2, 3)", "var colors = [1, 2, 3]", "var colors = {1, 2, 3}", "var colors = 1, 2, 3"],
    correctAnswer: 1,
    explanation: "Arrays in JavaScript are declared using square brackets: var colors = [1, 2, 3]",
    subject: "javascript",
    difficulty: "basic"
  }
];
