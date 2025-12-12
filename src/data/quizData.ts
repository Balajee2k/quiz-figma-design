export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number; // Index of correct answer
}

export const quizData: Question[] = [
  {
    id: 1,
    question: "What sound does a cat make?",
    options: ["Bhau-Bhau", "Meow-Meow", "Oink-Oink"],
    correctAnswer: 1,
  },
  {
    id: 2,
    question: "What would you probably find in your fridge?",
    options: ["Shoes", "Ice Cream", "Books"],
    correctAnswer: 1,
  },
  {
    id: 3,
    question: "What color are bananas?",
    options: ["Blue", "Yellow", "Red"],
    correctAnswer: 1,
  },
  {
    id: 4,
    question: "How many legs does a dog have?",
    options: ["Two", "Four", "Six"],
    correctAnswer: 1,
  },
  {
    id: 5,
    question: "What do bees make?",
    options: ["Milk", "Honey", "Butter", "Cheese"],
    correctAnswer: 1,
  },
  {
    id: 6,
    question: "Which planet is known as the Red Planet?",
    options: ["Venus", "Jupiter", "Mars", "Saturn"],
    correctAnswer: 2,
  },
  {
    id: 7,
    question: "What is the largest ocean on Earth?",
    options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
    correctAnswer: 3,
  },
  {
    id: 8,
    question: "How many days are in a week?",
    options: ["Five", "Six", "Seven", "Eight"],
    correctAnswer: 2,
  },
  {
    id: 9,
    question: "What do you use to write on a blackboard?",
    options: ["Pencil", "Chalk", "Crayon", "Marker"],
    correctAnswer: 1,
  },
  {
    id: 10,
    question: "Which animal is known as the King of the Jungle?",
    options: ["Tiger", "Elephant", "Lion", "Bear"],
    correctAnswer: 2,
  },
];
