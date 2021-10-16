import { Component, OnInit } from '@angular/core';

import {MatSort} from '@angular/material/sort';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {MatTableDataSource} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatSelectModule} from '@angular/material/select';
import {MatSnackBar} from '@angular/material/snack-bar';

//import {Sub} from '../../model/Survey-model';
//import {Surveyquestion} from '../../model/Surveyquestion-model';
import { Routes, RouterModule, Router, ActivatedRoute } from '@angular/router';
import {FulldetailsComponent} from '../../userresponse/fulldetails/fulldetails.component';
import {PolicyService} from '../../../../services/policy.service';

@Component({
  selector: 'app-chartview',
  templateUrl: './chartview.component.html',
  styleUrls: ['./chartview.component.css']
})
export class ChartviewComponent implements OnInit {

  title = 'Campaign Registration Management System Records';
   type = 'PieChart';
   
   columnNames = ['Browser', 'Percentage'];
   options = {    
   };
   width = 550;
   height = 400;

   users:number =0;
   subs:number =0;
   surs: number =0;
   c:number;

  // reportData = [["High",100], ["Medium" , 200], ["Low" , 300]];


  data= [];

   /*data = [
    {label: 'Users', data: this.users},
    {label:'Submissions', data: this.subs},
    {label:'Surveys',data: this.surs},
    
    {label:'others',data: 100-this.users-this.subs-this.surs}
    
 ];*/

   

  constructor(private router: Router,
    private policyservice: PolicyService,
    private dialog:MatDialog,
    private snackBar: MatSnackBar) {
      this.policyservice.listen().subscribe((m:any)=>{
        console.log(m);
        this.getSurveys();
        this.filldata();

      })
    }

   

  ngOnInit(): void {
    this.getSurveys();
    this.filldata();


  }

  getSurveys(){
    this.policyservice.findAllsub().subscribe(data =>{
      //this.listData = new MatTableDataSource(data);
      this.subs =data.length+0.0;
      console.log("subs"+""+this.subs);
      this.filldata();
      //this.listData.sort = this.sort;
    });
    this.policyservice.findAll().subscribe(res =>{
      //this.listData = new MatTableDataSource(data);
      this.surs =res.length;
      console.log("surs"+""+this.surs);
      this.filldata();
      //this.listData.sort = this.sort;
    });
    this.policyservice.findAllusers().subscribe(reus =>{
      //this.listData = new MatTableDataSource(data);
      this.users =reus.length;
      console.log("users"+""+this.users);
      this.filldata();
      //this.listData.sort = this.sort;
    });
    console.log("show"+""+this.subs);

    

  }
  filldata(){



   /* this.chartData.forEach((dataset, index) => {
      this.chartData[index] = Object.assign({}, this.chartData[index], {
        data: [...this.chartData[index].data, dataArr[index]]
      });
    });*/
  
    this.data = [
      ['Users',this.users],
      ['Submissions', this.subs],
      ['Surveys',this.surs],
      ['others', 100-this.users-this.subs-this.surs]
      
   ]; 
    

  }


}
