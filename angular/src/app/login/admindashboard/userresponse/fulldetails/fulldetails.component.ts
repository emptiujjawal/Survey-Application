import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {MatDatepicker} from '@angular/material/datepicker';
import { NgForm } from '@angular/forms';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import { Routes, RouterModule, Router,  ActivatedRoute } from '@angular/router';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';

import {PolicyService} from '../../../../services/policy.service';

@Component({
  selector: 'app-fulldetails',
  templateUrl: './fulldetails.component.html',
  styleUrls: ['./fulldetails.component.css']
})
export class FulldetailsComponent implements OnInit {

  constructor(public dialogbox: MatDialogRef<FulldetailsComponent>,
    public policyservice: PolicyService,
    private route: ActivatedRoute, 
    private router: Router,
    private snackBar: MatSnackBar,
    private fb: FormBuilder) { }

    c1: number= 0;
    c2: number= 0;
    c3: number=0;
    c4: number=0;
    c5: number=0;
    q1: string =this.policyservice.formDataSubmission.question1;

  ngOnInit(): void {
    this.ques();
    console.log(this.policyservice.formDataSubmission.question2);
    console.log("c2"+"g"+this.c2);
  }

  ques(){
    if(this.policyservice.formDataSubmission.question1 != null ){
      this.c1+=1;
      console.log(this.c1);

    }
    if(this.policyservice.formDataSubmission.question2 != null ){
      this.c2+=1;
      console.log("c2"+ this.c2);

    }
    if(this.policyservice.formDataSubmission.question3 != null ){
      this.c3+=1;
      console.log("c3"+ this.c3);

    }
    if(this.policyservice.formDataSubmission.question4 != null ){
      this.c4+=1;
      console.log("c4"+ this.c4);

    }
    if(this.policyservice.formDataSubmission.question5 != null ){
      this.c5+=1;
      console.log("c5"+ this.c5);

    }

  }

  onClose(){
    this.dialogbox.close();
    this.policyservice.filter('Register click');
    //this.router.navigate(['admin_component']);
  }

}
