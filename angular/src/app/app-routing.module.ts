import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {AdmindashboardComponent} from './login/admindashboard/admindashboard.component';
import {UserdashboardComponent} from './login/userdashboard/userdashboard.component';
import {SurveyComponent} from './login/admindashboard/survey/survey.component';
import {QuestionsComponent} from './login/admindashboard/questions/questions.component';
import {SurveydashboardComponent} from './login/userdashboard/surveydashboard/surveydashboard.component';
import {AddadminComponent} from './login/admindashboard/addadmin/addadmin.component';
import {UserresponseComponent} from './login/admindashboard/userresponse/userresponse.component';
import {ChartviewComponent} from './login/admindashboard/userresponse/chartview/chartview.component';
import {HomepageComponent} from './homepage/homepage.component';
import {FulldetailsComponent} from './login/admindashboard/userresponse/fulldetails/fulldetails.component';
import {ActivesurveyComponent} from './login/admindashboard/activesurvey/activesurvey.component';



const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path:'register_component',component: RegisterComponent },
  {path:'admin_component',component: AdmindashboardComponent,
   children: [
    
   ]
 },
 {path:'user_component',component:  UserdashboardComponent },
  {path:'login_component',component:  LoginComponent },
  {path:'survey_component',component: SurveyComponent },
  {path:'question_component',component: QuestionsComponent },
  {path:'surveydash_component',component: SurveydashboardComponent },
  {path:'addadmin_component',component: AddadminComponent },
  
  {path:'active_component',component: ActivesurveyComponent },
  
  {path:'chart_component',component: ChartviewComponent },
  {path:'fulldetail_component',component: FulldetailsComponent },
  {path:'userresponse_component',component: UserresponseComponent },

  
  
];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
