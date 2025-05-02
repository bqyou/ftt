import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { QuestionService } from '../question.service';
import { Question, Choice } from '../question.model';
import { shuffleArray } from '../utils/shuffle';

@Component({
  selector: 'app-unlimited',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './unlimited.component.html'
})
export class UnlimitedComponent implements OnInit {
  questions: Question[] = [];
  displayedChoices: Choice[] = [];
  currentIndex = 0;
  showAnswer = false;
  selectedAnswer: string | null = null;

  constructor(
    private questionService: QuestionService,
    private router: Router
  ) {}

  ngOnInit() {
    this.questions = this.questionService.getInfiniteShuffledQuestions();
    this.shuffleChoices();
  }

  private shuffleChoices() {
    this.displayedChoices = shuffleArray(this.questions[this.currentIndex].choices);
  }

  selectAnswer(answerId: string) {
    this.selectedAnswer = answerId;
    this.showAnswer = true;
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.questions.length;
    this.showAnswer = false;
    this.selectedAnswer = null;
    this.shuffleChoices();
  }

  navigateToHome() {
    this.router.navigate(['/']);
  }
}