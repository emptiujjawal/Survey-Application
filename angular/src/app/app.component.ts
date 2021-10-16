import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'survey';

  

  ngOnInit(): void {
    
    //this.getUsers();
    //this.policyService.getPolicies().subscribe((data : any[])=>{
      //console.log(data);
     // this.listData = new MatTableDataSource(data);
  //})
    
    
  }

 
}

