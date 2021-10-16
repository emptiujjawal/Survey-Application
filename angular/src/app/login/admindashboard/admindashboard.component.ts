import { Component, OnInit ,ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {MatTableDataSource} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatSelectModule} from '@angular/material/select';
import {MatSnackBar} from '@angular/material/snack-bar';

import {Survey} from '../../model/Survey-model';
import { Routes, RouterModule, Router, ActivatedRoute } from '@angular/router';
import {Surveyquestion} from '../../model/Surveyquestion-model';
import {SurveyComponent} from './survey/survey.component';
import {PolicyService} from '../../services/policy.service';
import {AddadminComponent} from './addadmin/addadmin.component';
import {UserresponseComponent} from './userresponse/userresponse.component';
import {QuestionsComponent} from './questions/questions.component';
import { Scroll } from '@angular/router';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit {

  constructor( private router: Router,
    private policyservice: PolicyService,
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

  @ViewChild(MatSort) sort: MatSort;
  //list: MatTableDataSource<any>;
  displayedColumns : string[] = ['id', 'surveyname', 'surveydescription', 'noofques', 'surveystart', 'surveyend', 'surveymade','edit', 'delete']

  ngOnInit(): void {
    this.getSurveys();
  }

  getSurveys(){
   /* this.policyservice.findAll().subscribe(data =>{
      this.listData = new MatTableDataSource(data);
      this.count =data.length;
      this.listData.sort = this.sort;
    });
    */
   this.policyservice.findnonAll().subscribe(data =>{
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
    this.dialog.open(QuestionsComponent, dialogConfig);
    
  }
  showList(i :number){
    //this.getUser(i);
    //this.policyService.getUser(i).subscribe(data => {
      // this.list = new MatTableDataSource(data);
      //this.users=data;
      //console.log(this.users);
      //this.policyService.formData= this.users;
     // this.showd();
      // return this.users;
       //console.log(this.list._filterData(data));
      //this.displayData= true;
     //});
    //console.log(this.users);
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

  AddAdmin(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "80%";
   // dialogConfig.maxHeight = "100%";
    this.dialog.open(AddadminComponent, dialogConfig);

  }

  navSurvey(){
    this.router.navigate(['userresponse_component']);
 

  }
  Activesur(){
    this.router.navigate(['active_component']);
 


  }


  AddSurvey(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "80%";
   // dialogConfig.maxHeight = "100%";
    this.dialog.open(SurveyComponent, dialogConfig);
    
  }
  
}
