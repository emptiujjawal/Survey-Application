import { Component, OnInit } from '@angular/core';

import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';
import {NgForm} from '@angular/forms';
import { Routes, RouterModule, Router, ActivatedRoute } from '@angular/router';
import {MatTableDataSource} from '@angular/material/table';

import {PolicyService} from '../services/policy.service';
import {Users} from '../model/User-model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  users: Users;
  u: Users;

  constructor(
    private router: Router,
    private activatedroute: ActivatedRoute,
    private dialog:MatDialog,
    private userService: PolicyService,
    private snackBar: MatSnackBar ) {
      this.users = new Users();
      
     }

  listData: MatTableDataSource<any>;

  displayedColumns : string[] = ['email', 'password']

  ngOnInit(): void {
  //  this.sendmail();
  }

  onSubmit(form: NgForm){
    this.userService.findBy(this.users).subscribe(result=>{
      this.u = result;
      
     if(this.u.usertype == "admin"){
        this.gotoAdmin();
      }else if(this.u.usertype == "user"){
        this.userService.formData = this.u;
        console.log(this.u.emailid);
        this.gotoUser();
      }
    }, error =>{
      console.log("Error");
    } );


  }
  gotoAdmin() {
    
    this.router.navigate(['admin_component']);
 
  
}

  gotoUser() {
      this.userService.isPresent = true;
      this.router.navigate(['user_component']);
   
    
  }

  register(){
    this.router.navigate(['register_component']);
   
  }

  sendmail(){

    this.userService.sendma().subscribe(data =>{
     // this.listData = new MatTableDataSource(data);
     // this.count =data.length;
     // this.listData.sort = this.sort;
    });


  }
 
  

}
