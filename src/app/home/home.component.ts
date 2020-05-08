import { Component, OnInit } from '@angular/core';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  id:number=2;
  courseList:any[]=[];
  constructor(private quizService:QuizService) { }

  ngOnInit(): void {
    this.quizService.getQuestions().subscribe( response=>{
      console.log(response);
      this.courseList=response.quizes;
      console.log(this.courseList);
    });
  }

}
