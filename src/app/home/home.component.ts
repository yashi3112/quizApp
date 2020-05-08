import { Component, OnInit } from '@angular/core';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  id:number=2;
  constructor(private quizService:QuizService) { }

  ngOnInit(): void {
    this.quizService.getQuestions(2).subscribe( response=>{
      console.log(response);
    });
  }

}
