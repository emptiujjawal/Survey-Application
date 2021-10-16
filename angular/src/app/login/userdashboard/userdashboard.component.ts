import { Component, OnInit, ViewChild } from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {MatTableDataSource} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatSelectModule} from '@angular/material/select';
import {MatSnackBar} from '@angular/material/snack-bar';

import {Survey} from '../../model/Survey-model';
import {Surveyquestion} from '../../model/Surveyquestion-model';
import {SurveydashboardComponent} from './surveydashboard/surveydashboard.component';
//import {SurveyComponent} from './survey/survey.component';
import {PolicyService} from '../../services/policy.service';
//import {QuestionsComponent} from './questions/questions.component';
import { Scroll } from '@angular/router';


@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css']
})
export class UserdashboardComponent implements OnInit {

  constructor(private policyservice: PolicyService,
    private dialog:MatDialog,
    private snackBar: MatSnackBar) {
      this.policyservice.listen().subscribe((m:any)=>{
        console.log(m);
        this.getSurveys();
      })
  }

  survey: Survey;
  count: number;
  listData: MatTableDataSource<any>;
  boo =this.policyservice.isPresent;
  

  @ViewChild(MatSort) sort: MatSort;
  //list: MatTableDataSource<any>;
  displayedColumns : string[] = ['id', 'surveyname', 'surveydescription', 'noofques', 'surveystart', 'surveyend', 'surveymade','edit']


  ngOnInit(): void {
    this.getSurveys();
  }

  getSurveys(){
    this.policyservice.finduserAll().subscribe(data =>{
      this.listData = new MatTableDataSource(data);
      this.count =data.length;
      this.listData.sort = this.sort;
    });

  }
  onEdit(sur: Surveyquestion){

    console.log(sur);
    this.policyservice.formDataSurveyQues= sur;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "80%";
    this.dialog.open(SurveydashboardComponent, dialogConfig);
    
  }

  onDelete(i: number){
    console.log(i);
    if(confirm('Are you sure to delete??')){
      this.policyservice.deletePolicy(i).subscribe(data => {
       this.del(i);
    });
    
   
     }

  }
  del(i: number){
    this.getSurveys();
        this.snackBar.open("Deleted Successfully",'id:'+''+i,{
          duration:3000,
          verticalPosition: 'top'
        });
  }


  AddSurvey(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "80%";
   // dialogConfig.maxHeight = "100%";
    //this.dialog.open(SurveyComponent, dialogConfig);
    
  }

}
