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
import {PolicyService} from '../../../services/policy.service';
import {Surveyquestion} from '../../../model/Surveyquestion-model';


@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  questions: Questions;
  surveyques: Surveyquestion;
  uy:Surveyquestion;

  productForm: FormGroup;
  public addmore: FormGroup;


  constructor(public dialogbox: MatDialogRef<QuestionsComponent>,
    public policyservice: PolicyService,
    private route: ActivatedRoute, 
    private router: Router,
    private snackBar: MatSnackBar,
    private fb: FormBuilder) { 
    this.questions = new Questions();
    this.surveyques = new Surveyquestion();
  }

 /* public listItems: Array<string> =["InputTextType",
   "CheckBox",
    "RadioButton",
    "TextArea"];*/

 // public DatatypeList: Array<string> =["Number","Boolean","String","Email"];
 count: number = +this.policyservice.formDataSurveyQues.noofques;
  c: number;

  ngOnInit(): void {
   // this.count =this.policyservice.formDataSurveyQues.noofques;
    this.count-=1;
    this.addmore = this.fb.group({
      surveyname:[''],
      surveydescripition:[''],
      type:[''],
      itemRows: this.fb.array([this.initItemRows()])
    });

    /*this.addmore.setValue({surveyname: this.policyservice.formDataSurveyQues.surveyname,
       surveydescripition: this.policyservice.formDataSurveyQues.surveydescription
      });*/
    //this.ff();
    this.setEmployeeValues();
    //this.onSelectionChanged();
   
  }

  initItemRows() {
    return this.fb.group({
    question:'',
    questiontype:'',
    answers:[''],
    suggestion:[''],
    });
  }

  setEmployeeValues() {
    
    this.c = this.count +1;
    for(let i=0; i<this.c; i++){
      
          if(i == 0){
            this.formArr.patchValue([
              { question: this.policyservice.formDataSurveyQues.question1 ,questiontype : this.policyservice.formDataSurveyQues.questiontype1, answers: this.policyservice.formDataSurveyQues.answers1}
              //{ empId: "112", empName: "Krishna", skill: "Angular"}	
            ]);
        
        }
        if(i == 1){
          this.formArr.push(this.initItemRows());
          this.formArr.patchValue([
            { question: this.policyservice.formDataSurveyQues.question1 ,questiontype : this.policyservice.formDataSurveyQues.questiontype1, answers: this.policyservice.formDataSurveyQues.answers1},
            { question: this.policyservice.formDataSurveyQues.question2 ,questiontype : this.policyservice.formDataSurveyQues.questiontype2, answers: this.policyservice.formDataSurveyQues.answers2}
            //{ empId: "112", empName: "Krishna", skill: "Angular"}	
          ]);
        }
        if(i == 2){
          this.formArr.push(this.initItemRows());
          this.formArr.patchValue([
            { question: this.policyservice.formDataSurveyQues.question1 ,questiontype : this.policyservice.formDataSurveyQues.questiontype1, answers: this.policyservice.formDataSurveyQues.answers1},
            { question: this.policyservice.formDataSurveyQues.question2 ,questiontype : this.policyservice.formDataSurveyQues.questiontype2, answers: this.policyservice.formDataSurveyQues.answers2},
            { question: this.policyservice.formDataSurveyQues.question3 ,questiontype : this.policyservice.formDataSurveyQues.questiontype3, answers: this.policyservice.formDataSurveyQues.answers3}
            	
          ]);
        }
        if(i == 3){
          this.formArr.push(this.initItemRows());
          this.formArr.patchValue([
            { question: this.policyservice.formDataSurveyQues.question1 ,questiontype : this.policyservice.formDataSurveyQues.questiontype1, answers: this.policyservice.formDataSurveyQues.answers1},
            { question: this.policyservice.formDataSurveyQues.question2 ,questiontype : this.policyservice.formDataSurveyQues.questiontype2, answers: this.policyservice.formDataSurveyQues.answers2},
            { question: this.policyservice.formDataSurveyQues.question3 ,questiontype : this.policyservice.formDataSurveyQues.questiontype3, answers: this.policyservice.formDataSurveyQues.answers3},
            { question: this.policyservice.formDataSurveyQues.question4 ,questiontype : this.policyservice.formDataSurveyQues.questiontype4, answers: this.policyservice.formDataSurveyQues.answers4}
           	
          ]);
        }
        if(i == 4){
          this.formArr.push(this.initItemRows());
          this.formArr.patchValue([
            { question: this.policyservice.formDataSurveyQues.question1 ,questiontype : this.policyservice.formDataSurveyQues.questiontype1, answers: this.policyservice.formDataSurveyQues.answers1},
            { question: this.policyservice.formDataSurveyQues.question2 ,questiontype : this.policyservice.formDataSurveyQues.questiontype2, answers: this.policyservice.formDataSurveyQues.answers2},
            { question: this.policyservice.formDataSurveyQues.question3 ,questiontype : this.policyservice.formDataSurveyQues.questiontype3, answers: this.policyservice.formDataSurveyQues.answers3},
            { question: this.policyservice.formDataSurveyQues.question4 ,questiontype : this.policyservice.formDataSurveyQues.questiontype4, answers: this.policyservice.formDataSurveyQues.answers4},         
            { question: this.policyservice.formDataSurveyQues.question5 ,questiontype : this.policyservice.formDataSurveyQues.questiontype5, answers: this.policyservice.formDataSurveyQues.answers5}	
          ]);
        }

    }

    
  } 

  ff(){

  }

  get formArr(): FormArray {
    return this.addmore.get('itemRows') as FormArray;
  }

  

  addNewRow() {
    if(this.count<4){
      this.count+=1;
      this.formArr.push(this.initItemRows());
    }else{
      this.snackBar.open("Reached Limit 5",'',{
        duration:3000,
        verticalPosition: 'top'
      });

    }
    
  }

  onSelectionChanged({ value } ,i: number) {
    console.log(value);
    console.log(i);
    if (value === 'InputTextType' || value === 'TextArea' ) {
      console.log("disable");
      this.addmore.get(['itemRows',i,'answers']).disable();
    } else {
      this.addmore.get(['itemRows',i,'answers']).enable();
    }
  }

  deleteRow(index: number) {
    this.count= this.count-1;
    this.formArr.removeAt(index);
  }

  onSubmit(form:  NgForm){
          this.count+=1;
          for(let i=0; i<this.count; i++){
            if(i == 0){
            this.policyservice.formDataSurveyQues.question1 =  this.addmore.get(['itemRows','0','question']).value ;
            this.policyservice.formDataSurveyQues.questiontype1 =  this.addmore.get(['itemRows','0','questiontype']).value ;
            this.policyservice.formDataSurveyQues.answers1 =  this.addmore.get(['itemRows','0','answers']).value ; 
          }
          if(i == 1){
            this.policyservice.formDataSurveyQues.question2 =  this.addmore.get(['itemRows','1','question']).value ;
            this.policyservice.formDataSurveyQues.questiontype2 =  this.addmore.get(['itemRows','1','questiontype']).value ;
            this.policyservice.formDataSurveyQues.answers2 =  this.addmore.get(['itemRows','1','answers']).value ; 
          }
          if(i == 2){
            this.policyservice.formDataSurveyQues.question3 =  this.addmore.get(['itemRows','2','question']).value ;
            this.policyservice.formDataSurveyQues.questiontype3 =  this.addmore.get(['itemRows','2','questiontype']).value ;
            this.policyservice.formDataSurveyQues.answers3 =  this.addmore.get(['itemRows','2','answers']).value ; 
          }
          if(i == 3){
            this.policyservice.formDataSurveyQues.question4 =  this.addmore.get(['itemRows','3','question']).value ;
            this.policyservice.formDataSurveyQues.questiontype4 =  this.addmore.get(['itemRows','3','questiontype']).value ;
            this.policyservice.formDataSurveyQues.answers4 =  this.addmore.get(['itemRows','3','answers']).value ; 
          }
          if(i == 4){
            this.policyservice.formDataSurveyQues.question5 =  this.addmore.get(['itemRows','4','question']).value ;
            this.policyservice.formDataSurveyQues.questiontype5 =  this.addmore.get(['itemRows','4','questiontype']).value ;
            this.policyservice.formDataSurveyQues.answers5 =  this.addmore.get(['itemRows','4','answers']).value ; 
          }
        
      }
      this.policyservice.formDataSurveyQues.noofques = ""+ this.count;
      this.policyservice.updateU(this.policyservice.formDataSurveyQues).subscribe(data =>{
        this.uy= data;
        console.log(this.uy);
        this.snackBar.open("Updated Successfully",'id:'+''+ this.uy.id,{
          duration:3000,
          verticalPosition: 'top'
        });
        this.dialogbox.close();
        this.policyservice.filter('Register click');
      });

   // this.policyservice.saveque(this.questions).subscribe(result => this.gotoUserList());

  }

  gotoUserList(){
    this.snackBar.open("Survey Updated",'',{
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
