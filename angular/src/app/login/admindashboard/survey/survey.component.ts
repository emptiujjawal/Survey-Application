import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {MatDatepicker} from '@angular/material/datepicker';
import {Survey} from '../../../model/Survey-model';
import {PolicyService} from '../../../services/policy.service';
import { NgForm } from '@angular/forms';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import { Routes, RouterModule, Router,  ActivatedRoute } from '@angular/router';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Surveyquestion} from '../../../model/Surveyquestion-model';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {

  survey: Survey;
  surveyques: Surveyquestion;

  productForm: FormGroup;
  public addmore: FormGroup;


  constructor( public dialogbox: MatDialogRef<SurveyComponent>,
    private policyservice: PolicyService,
    private route: ActivatedRoute, 
    private router: Router,
    private snackBar: MatSnackBar,
    private fb: FormBuilder) {

    this.survey = new Survey();
    this.surveyques = new Surveyquestion();

    
   
   }

   tt: number;

  dataarray= [];

  count: number;

  ngOnInit(): void {

    this.count =0;
    this.surveyques.question1 ="";
    this.surveyques.questiontype1="";
    this.surveyques.answers1="";

    this.addmore = this.fb.group({
      surveyname:[''],
      surveydescripition:[''],
      type:[''],
      itemRows: this.fb.array([this.initItemRows()])
    });
  }

  get formArr() {
    return this.addmore.get('itemRows') as FormArray;
  }

  initItemRows() {
    return this.fb.group({
    question:[''],
    questiontype:[''],
    answers:[''],
    suggestion:[''],
    });
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

  dis(){
    if(this.tt ==0){
      this.tt+=1;
    }
    
  }
  doo(){
    if(this.tt!=0){
      this.tt-=1;
    }
  }

  deleteRow(index: number) {
    this.count= this.count-1;
    this.formArr.removeAt(index);
  }

  onSubmit(form :NgForm){
    this.count+=1;
    for(let i=0; i<this.count; i++){
          if(i == 0){
          this.surveyques.question1 =  this.addmore.get(['itemRows','0','question']).value ;
          this.surveyques.questiontype1 =  this.addmore.get(['itemRows','0','questiontype']).value ;
          this.surveyques.answers1 =  this.addmore.get(['itemRows','0','answers']).value ; 
        }
        if(i == 1){
          this.surveyques.question2 =  this.addmore.get(['itemRows','1','question']).value ;
          this.surveyques.questiontype2 =  this.addmore.get(['itemRows','1','questiontype']).value ;
          this.surveyques.answers2 =  this.addmore.get(['itemRows','1','answers']).value ; 
        }
        if(i == 2){
          this.surveyques.question3 =  this.addmore.get(['itemRows','2','question']).value ;
          this.surveyques.questiontype3 =  this.addmore.get(['itemRows','2','questiontype']).value ;
          this.surveyques.answers3 =  this.addmore.get(['itemRows','2','answers']).value ; 
        }
        if(i == 3){
          this.surveyques.question4 =  this.addmore.get(['itemRows','3','question']).value ;
          this.surveyques.questiontype4 =  this.addmore.get(['itemRows','3','questiontype']).value ;
          this.surveyques.answers4 =  this.addmore.get(['itemRows','3','answers']).value ; 
        }
        if(i == 4){
          this.surveyques.question5 =  this.addmore.get(['itemRows','4','question']).value ;
          this.surveyques.questiontype5 =  this.addmore.get(['itemRows','4','questiontype']).value ;
          this.surveyques.answers5 =  this.addmore.get(['itemRows','4','answers']).value ; 
        }
      
    }
    //console.log("Question 1: "+ this.addmore.get(['itemRows','1','question']).value);

   this.surveyques.noofques = ""+ this.count;
    this.policyservice.addsurvey(this.surveyques).subscribe(result => this.gotoAdmin() );
   // this.userService.save(this.users).subscribe(result => this.gotoUserList());


  }
  gotoAdmin(){
    this.snackBar.open("Added Survey",'',{
      duration:3000,
      verticalPosition: 'top'
    });
    
    this.dialogbox.close();
    this.policyservice.filter('Register click');
   // this.router.navigate(['admin_component']);
  }

  onClose(){
    this.dialogbox.close();
    this.policyservice.filter('Register click');
    //this.router.navigate(['admin_component']);
  }
}
