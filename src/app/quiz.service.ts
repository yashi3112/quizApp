import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class QuizService {

  public result={
    total:0,
    correct:0
  };
  constructor(private quizService : HttpClient) { }

  getQuestions():Observable<any>
  {
    return this.quizService.get('/assets/quiz.json');
  }
}
