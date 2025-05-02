export interface Choice {
    id: string;
    text: string;
  }
  
  export interface Question {
    id: string;
    question: string;
    image?: number | null;
    choices: Choice[];
    correctAnswerId: string;
  }
  