import { Component, OnInit , ViewChild, ElementRef  } from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {MatTableDataSource} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatSelectModule} from '@angular/material/select';
import {MatSnackBar} from '@angular/material/snack-bar';
import * as XLSX from 'xlsx'; 

//import {Sub} from '../../model/Survey-model';
//import {Surveyquestion} from '../../model/Surveyquestion-model';
import { Routes, RouterModule, Router, ActivatedRoute } from '@angular/router';
import {FulldetailsComponent} from '../userresponse/fulldetails/fulldetails.component';
import {PolicyService} from '../../../services/policy.service';
//import {AddadminComponent} from './addadmin/addadmin.component';
//import {UserresponseComponent} from './userresponse/userresponse.component';
//import {QuestionsComponent} from './questions/questions.component';
import { Scroll } from '@angular/router';
import { Submission } from '../../../model/Submission-model';

import * as jsPDF from 'jspdf';
import 'jspdf-autotable';
import {UserOptions} from 'jspdf-autotable';

declare let pdfMake: any ;

interface jsPDFWithPlugin extends jsPDF {
  autoTable: (options: UserOptions) => jsPDF;
}

@Component({
  selector: 'app-userresponse',
  templateUrl: './userresponse.component.html',
  styleUrls: ['./userresponse.component.css']
})
export class UserresponseComponent implements OnInit {

 // @ViewChild('htmlData') htmlData:ElementRef;
 @ViewChild('TABLE') table: ElementRef;

  constructor(private router: Router,
    private policyservice: PolicyService,
    private dialog:MatDialog,
    private snackBar: MatSnackBar) { 
      this.policyservice.listen().subscribe((m:any)=>{
        console.log(m);
        this.getSurveys();
      })
    }

    //survey: Survey;
  count: number;
  listData: MatTableDataSource<any>;

  head = [['ID','EMAILID', 'Survey Name', 'Question 1','Answer 1', 'Question 2','Answer 2', 'Question 3','Answer 3', 'Question 4','Answer 4', 'Question 5','Answer 5','SUBMISSION DATE']]

  @ViewChild(MatSort) sort: MatSort;
  //list: MatTableDataSource<any>;
  displayedColumns : string[] = ['id', 'surveyname', 'submissiondate', 'emailid', 'edit']

  d= [[ 0,'Emailid','Survey name','question 1','answer 1','question 2','answer 2','question 3','answer 3',
  'question 4','answer 4','question 5','answer 5','Submission-Date']];
  r=[[]];



  ngOnInit(): void {
    this.getSurveys();
    this.policyservice.findAllsub().subscribe(data =>{
      data.forEach(elm => {
        const temp = [elm.id, elm.emailid, elm.surveyname, elm.question1, elm.answer1,
           elm.question2,elm.answer2, elm.question3, elm.answer3, elm.question4, elm.answer4, 
           elm.question5, elm.answer5, elm.submissiondate ];
        //rows.push(temp);
        this.d.push(temp);
        this.r.push(temp);
        console.log('Rows', this.d); // showing all data
      });
    });

  }

  getSurveys(){
    this.policyservice.findAllsub().subscribe(data =>{
      this.listData = new MatTableDataSource(data);
      this.count =data.length;
      this.listData.sort = this.sort;
    });

  }

  onEdit(sur: Submission){

    console.log(sur);
    this.policyservice.formDataSubmission= sur;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "80%";
    this.dialog.open(FulldetailsComponent, dialogConfig);
    
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
    //this.dialog.open(AddadminComponent, dialogConfig);

  }


  AddSurvey(){
    this.router.navigate(['chart_component']);
 
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "80%";
   // dialogConfig.maxHeight = "100%";
    //this.dialog.open(SurveyComponent, dialogConfig);
    
  }

  fileName= 'ExcelSheet.xlsx';  

exportexcel(): void 
    {
       /* table id is passed over here */   
       let element = document.getElementById('basic-table'); 
       const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);

       /* generate workbook and add the worksheet */
       const wb: XLSX.WorkBook = XLSX.utils.book_new();
       XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

       /* save to file */
       XLSX.writeFile(wb, this.fileName);
			
    }
    exportasExcel() {
     
      const ws: XLSX.WorkSheet =   
      XLSX.utils.json_to_sheet(this.d);
      console.log(ws);

      const wb: XLSX.WorkBook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
      XLSX.writeFile(wb, 'epltable.xlsx');
     }


   /* exportToExcel() {
      const ws: XLSX.WorkSheet =   
     // XLSX.utils.table_to_sheet(this.epltable.nativeElement);
      const wb: XLSX.WorkBook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
      XLSX.writeFile(wb, 'epltable.xlsx');
     }
*/


 /* download(){

    const documentDefinition = this.getDocumentDefinition();

    pdfMake.createPdf(documentDefinition).download();

  }

  getDocumentDefinition() {
    //sessionStorage.setItem('resume', JSON.stringify(this.resume));
    return {
      content: [
        {
          text: 'Campaign Registration Management System',
          bold: true,
          fontSize: 20,
          alignment: 'center',
          margin: [0, 0, 0, 20]
        },
        
       
        
        {
          text: 'Survey Submitted Details',
          style: 'header'
        },
        //this.getEducationObject(this.listData),
        
       
      ],
      
    };
  }

  getEducationObject(educations: Submission[]){

  }*/

  /*public downloadPDF():void {
    let DATA = this.htmlData.nativeElement;
    let doc = new jsPDF('p','pt', 'a4');

    let handleElement = {
      '#editor':function(element,renderer){
        return true;
      }
    };
    doc.fromHTML(DATA.innerHTML,15,15,{
      'width': 200,
      'elementHandlers': handleElement
    });

    doc.save('data.pdf');
  }*/

  df(){
    console.log("PDF Download");
  }
  createPdf() {
    /* var doc = new jsPDF();
 
     doc.setFontSize(18);
     doc.text('Campaign Registration Management System', 11, 8);
     doc.setFontSize(11);
     doc.setTextColor(100);
 
 
     (doc as any).autoTable({
       head: this.head,
       body: this.listData,
       theme: 'plain',
       didDrawCell: data => {
         console.log(data.column.index)
       }
     })
 
     // Open PDF document in new tab
     doc.output('dataurlnewwindow')
 
     // Download PDF document  
     doc.save('table.pdf');*/
 
     const doc = new jsPDF();
 
     const header =[['ID','EMAILID', 'Survey Name', 'Question 1','Answer 1', 'Question 2','Answer 2', 'Question 3','Answer 3', 'Question 4','Answer 4', 'Question 5','Answer 5','SUBMISSION DATE']]
 
     const rows=[];
 
     doc.setFontSize(18);
     doc.text('Campaign Registration Management System', 11, 8);
     doc.setFontSize(11);
     doc.setTextColor(100);
 
    /* this.policyservice.findAllsub().subscribe(data =>{
       data.forEach(elm => {
         const temp = [elm.id, elm.emailid, elm.surveyname, elm.question1, elm.answer1,
            elm.question2,elm.answer2, elm.question3, elm.answer3, elm.question4, elm.answer4, 
            elm.question5, elm.answer5, elm.submissiondate ];
         rows.push(temp);
         this.d.push(temp);
         console.log('Rows', rows); // showing all data
       });
     });
 */
     //this.d.push(rows);
 
     console.log("row"+this.r);
    /* doc.autoTable({
       head: header,
       body: rows,
     });*/
 
     (doc as any).autoTable({
       head: this.head,
       body: this.r,
       theme: 'grid',
       didDrawCell: data => {
         console.log(data.column.index)
       }
     })
 
     
 
     //autoTable(doc, {html:'#hh'});
 
     doc.save('data.pdf');
 
   }
 
  
}





