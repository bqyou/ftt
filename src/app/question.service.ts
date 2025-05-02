import { Injectable } from '@angular/core';
import { Question } from './question.model';
import { QUESTIONS } from './question'; // Import the static data

@Injectable({ providedIn: 'root' })
export class QuestionService {
  private questions: Question[] = QUESTIONS; // Use the static array of questions

  getRandomQuestions(count: number): Question[] {
    const shuffledQuestions = this.shuffleArray(this.questions);
    return shuffledQuestions.slice(0, count).map(q => ({
      ...q,
      choices: this.shuffleArray(q.choices)
    }));
  }

  getInfiniteShuffledQuestions(): Question[] {
    return this.shuffleArray(this.questions).map(q => ({
      ...q,
      choices: this.shuffleArray(q.choices)
    }));
  }

  private shuffleArray<T>(array: T[]): T[] {
    const copy = array.slice();
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }
}
