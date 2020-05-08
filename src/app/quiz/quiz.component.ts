import { Component, OnInit } from '@angular/core';
import { QuizService } from '../quiz.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ResultComponent } from '../result/result.component';


@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  courseList:any;
  activeIndex:number=0;
  options:any[]=[];
  constructor(private quizService:QuizService,
    private route:ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    const id :number = +this.route.snapshot.paramMap.get('id');
    this.quizService.getQuestions().subscribe( response=>{
      this.activeIndex=0;
      this.courseList=response.quizes.find(course =>{
        return course.id==id;
      });
      console.log(this.courseList);
      this.options=this.courseList.questions[this.activeIndex].options;
      this.quizService.result.total=this.courseList.total;
      this.quizService.result.correct=0;
    });
  }
  onSelect(x)
  {
    console.log(x);
    if(x.value == this.courseList.questions[this.activeIndex].correctAnswer)
    {
      this.quizService.result.correct++;
      console.log(this.quizService.result.correct);
    }
    if(this.courseList.questions.length == (this.activeIndex+1))
    {
      this.router.navigateByUrl("/result");
      return;
    }
    this.activeIndex++;
    this.options=this.courseList.questions[this.activeIndex].options;
    
  }
}
