import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private quizService : HttpClient) { }

  getQuestions(courseID:number)
  {
    return this.quizService.get('./assets/birds.json'+courseID);
  }
}
