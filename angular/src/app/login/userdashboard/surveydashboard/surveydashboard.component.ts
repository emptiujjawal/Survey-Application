import { Component, OnInit } from '@angular/core';

import {MatDialogRef} from '@angular/material/dialog';
import {MatDatepicker} from '@angular/material/datepicker';
import {Survey} from '../../../model/Survey-model';
import { NgForm } from '@angular/forms';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import { Routes, RouterModule, Router,  ActivatedRoute } from '@angular/router';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';

import {Questions} from '../../../model/Questions-model';
import {Submission} from '../../../model/Submission-model';
import {PolicyService} from '../../../services/policy.service';
import {Surveyquestion} from '../../../model/Surveyquestion-model';
import {Subdata} from '../../../model/Subdata-model';

@Component({
  selector: 'app-surveydashboard',
  templateUrl: './surveydashboard.component.html',
  styleUrls: ['./surveydashboard.component.css']
})
export class SurveydashboardComponent implements OnInit {

  questions: Questions;
  surveyques: Surveyquestion;
  submission: Submission;
  subdata: Subdata;
  uy:Surveyquestion;
  formTemplate:any;

  myFormGroup:FormGroup;

  productForm: FormGroup;
  public addmore: FormGroup;

  //count: number = +this.policyservice.formDataSurveyQues.noofques;

  constructor(public dialogbox: MatDialogRef<SurveydashboardComponent>,
    public policyservice: PolicyService,
    private route: ActivatedRoute, 
    private router: Router,
    private snackBar: MatSnackBar,
    private fb: FormBuilder) { 
      this.questions = new Questions();
      this.surveyques = new Surveyquestion();
      this.submission = new Submission();
      this.subdata = new Subdata();
      this.policyservice.listen().subscribe((m:any)=>{
        console.log(m);
        this.getSurveys(this.policyservice.formDataSurveyQues.id);
      })
    }

    count: number = +this.policyservice.formDataSurveyQues.noofques;
    c: number;
    surveyname: string = this.policyservice.formDataSurveyQues.surveyname;
    email: string = this.policyservice.formData.emailid;

    public listItems: Array<string> =["I want to get into Digital Projects",
    "Strengthen my expertise in newer skills in Java Technologies",
     "Currently I am not in Java skills but want to build a carrer in Java space"];
 
   public DedicationList: Array<string> =["2 hours a week",
     "2-6 hours a week",
      "greater than 6 hours a week"];
    


  ngOnInit(): void {

   /* let group={}    
    this.formTemplate.forEach(input_template=>{
      group[input_template.label]=new FormControl('');  
    })
    this.myFormGroup = new FormGroup(group);
*/
    this.count-=1;
    this.addmore = this.fb.group({
      1:'',
      2:'',
      3:'',
      4:'',
      5:'',
      itemRows: this.fb.array([this.initItemRows()])
    });
    this.surveyques = this.policyservice.formDataSurveyQues;
    this.submission.surveyname = this.policyservice.formDataSurveyQues.surveyname;
    this.submission.emailid = this.policyservice.formData.emailid;
    console.log("s1"+ this.surveyname);
   console.log("email"+ this.email);

    this.getSurveys(this.policyservice.formDataSurveyQues.id);

  }

  getSurveys(i: number){
    this.policyservice.findquesAll(i).subscribe(data =>{
    
      this.formTemplate = data;
      console.log(this.formTemplate);
      //this.listData = new MatTableDataSource(data);
     // this.count =data.length;
      //this.listData.sort = this.sort;
    });

  }

  initItemRows() {
    return this.fb.group({
    question:'',
    questiontype:'',
    answers:[''],
    suggestion:[''],
    });
  }

  get formArr(): FormArray {
    return this.addmore.get('itemRows') as FormArray;
  }

  addNewRow() {
    
      this.formArr.push(this.initItemRows());
    
    
  }
  onSubmit(form:  NgForm){
    console.log(this.policyservice.formDataSurveyQues.surveyname);
    this.count+=1;
    this.submission.surveyname = this.policyservice.formDataSurveyQues.surveyname;
    //this.submission.emailid = this.subdata.emailid;
    this.subdata.surveyname = this.policyservice.formDataSurveyQues.surveyname;
    this.subdata.emailid = this.email;
    this.subdata.dedication = this.policyservice.formData.dedication;
    this.subdata.interest = this.policyservice.formData.interest;
    this.submission.emailid = this.email;

    for(let i=0; i<this.count; i++){
      if(i == 0){
      this.submission.question1 =  this.policyservice.formDataSurveyQues.question1 ;
      this.submission.answer1 =  this.addmore.get(['1']).value ;
      this.subdata.question1 =  this.policyservice.formDataSurveyQues.question1 ;
      this.subdata.answer1 =  this.addmore.get(['1']).value ;
    //  this.policyservice.formDataSubmission. =  this.addmore.get(['itemRows','0','answers']).value ; 
    }
    if(i == 1){
      this.submission.question2 =  this.policyservice.formDataSurveyQues.question2 ;
      this.submission.answer2 =  this.addmore.get(['2']).value ;
      this.subdata.question2 =  this.policyservice.formDataSurveyQues.question2 ;
      this.subdata.answer2 =  this.addmore.get(['2']).value ;
     // this.policyservice.formDataSurveyQues.answers2 =  this.addmore.get(['itemRows','1','answers']).value ; 
    }
    if(i == 2){
      this.submission.question3 =  this.policyservice.formDataSurveyQues.question3 ;
      this.submission.answer3 =  this.addmore.get(['3']).value ;
      this.subdata.question3 =  this.policyservice.formDataSurveyQues.question3 ;
      this.subdata.answer3 =  this.addmore.get(['3']).value ;
     // this.policyservice.formDataSurveyQues.answers3 =  this.addmore.get(['itemRows','2','answers']).value ; 
    }
    if(i == 3){
      this.submission.question4 =  this.policyservice.formDataSurveyQues.question4 ;
     // this.policyservice.formDataSurveyQues.questiontype4 =  this.addmore.get(['itemRows','3','questiontype']).value ;
      this.submission.answer4 =  this.addmore.get(['4']).value ; 
      this.subdata.question4 =  this.policyservice.formDataSurveyQues.question4 ;
      this.subdata.answer4 =  this.addmore.get(['4']).value ; 
    }
    if(i == 4){
      this.submission.question5 =  this.policyservice.formDataSurveyQues.question5 ;
      //this.policyservice.formDataSurveyQues.questiontype5 =  this.addmore.get(['itemRows','4','questiontype']).value ;
      this.submission.answer5 =  this.addmore.get(['5']).value ;
      this.subdata.question5 =  this.policyservice.formDataSurveyQues.question5 ;
      this.subdata.answer5 =  this.addmore.get(['5']).value ; 
    }
  
}
console.log(this.submission);
console.log(this.subdata);
console.log("emai:"+ this.subdata.emailid);

    this.policyservice.addsubda(this.subdata).subscribe(result => this.gosub() );

  }

  gosub(){

    this.policyservice.addsub(this.submission).subscribe(result => this.gotoAdmin() );
    

  }

  gotoAdmin(){

    this.snackBar.open("Survey Submitted Successfully",'',{
      duration:3000,
      verticalPosition: 'top'
    });
    this.dialogbox.close();
    this.policyservice.filter('Register click');


  }

  onClose(){
    this.dialogbox.close();
    this.policyservice.filter('Register click');
    //this.router.navigate(['admin_component']);
  }



}
