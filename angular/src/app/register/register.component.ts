import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatRadioModule} from '@angular/material/radio';
import {NgForm} from '@angular/forms';
import { Routes, RouterModule, Router,  ActivatedRoute } from '@angular/router';
import {MatDatepicker} from '@angular/material/datepicker';
import {MatTableDataSource} from '@angular/material/table';
import {PolicyService} from '../services/policy.service';
import {Users} from '../model/User-model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  users: Users;

  constructor(private route: ActivatedRoute, 
    private router: Router,
    private snackBar: MatSnackBar,
    private userService: PolicyService) {
    this.users = new Users();
   }


  //interest ="Reason for interest in Java Full Stack Program?";
  favoriteSeason: string;
  seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];

  public listItems: Array<string> =["I want to get into Digital Projects",
   "Strengthen my expertise in newer skills in Java Technologies",
    "Currently I am not in Java skills but want to build a carrer in Java space"];

  public DedicationList: Array<string> =["2 hours a week",
    "2-6 hours a week",
     "greater than 6 hours a week"];
   

  ngOnInit(): void {
  }


  onSubmit(form: NgForm){
    this.users.usertype = "user";
    
    this.userService.save(this.users).subscribe(result => this.gotoUserList());

    //this.userService.save(this.users).subscribe(result => this.gotoUserList());

  }
  gotoUserList() {

    this.snackBar.open("User Added",'',{
      duration:3000,
      verticalPosition: 'top'
    });
    
  
    this.router.navigate(['']);
  }
}
