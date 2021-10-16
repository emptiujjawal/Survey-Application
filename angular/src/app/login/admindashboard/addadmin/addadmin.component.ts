import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatRadioModule} from '@angular/material/radio';
import {NgForm} from '@angular/forms';
import { Routes, RouterModule, Router,  ActivatedRoute } from '@angular/router';
import {MatDialogRef} from '@angular/material/dialog';
import {MatDatepicker} from '@angular/material/datepicker';
import {MatTableDataSource} from '@angular/material/table';
import {PolicyService} from '../../../services/policy.service';
import {Users} from '../../../model/User-model';

@Component({
  selector: 'app-addadmin',
  templateUrl: './addadmin.component.html',
  styleUrls: ['./addadmin.component.css']
})
export class AddadminComponent implements OnInit {

  users: Users;

  constructor(public dialogbox: MatDialogRef<AddadminComponent>,
    private route: ActivatedRoute, 
    private router: Router,
    private snackBar: MatSnackBar,
    private userService: PolicyService) {
      this.users = new Users();
     }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    this.users.usertype = "admin";

    this.userService.save(this.users).subscribe(result => this.gotoUserList());

  }
  gotoUserList() {
    this.snackBar.open("Admin Added",'',{
      duration:3000,
      verticalPosition: 'top'
    });
    
    this.dialogbox.close();
    this.userService.filter('Register click');

    //this.router.navigate(['']);
  }

  onClose(){
    this.dialogbox.close();
    this.userService.filter('Register click');
    //this.router.navigate(['admin_component']);
  }

}
