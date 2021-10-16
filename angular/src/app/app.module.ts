import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {CdkScrollableModule} from '@angular/cdk/scrolling';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatInputModule} from '@angular/material/input';
import {MatSortModule} from '@angular/material/sort';
import {MatDialogModule} from '@angular/material/dialog';
import {FormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {RouterModule} from '@angular/router';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTooltipModule} from '@angular/material/tooltip';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { GoogleChartsModule } from 'angular-google-charts';

import { GridModule, ToolbarService, PdfExportService } from '@syncfusion/ej2-angular-grids';

import { AdmindashboardComponent } from './login/admindashboard/admindashboard.component';
import { UserdashboardComponent } from './login/userdashboard/userdashboard.component';
import { SurveyComponent } from './login/admindashboard/survey/survey.component';
import { QuestionsComponent } from './login/admindashboard/questions/questions.component';
import { SurveydashboardComponent } from './login/userdashboard/surveydashboard/surveydashboard.component';
import { AddadminComponent } from './login/admindashboard/addadmin/addadmin.component';
import { UserresponseComponent } from './login/admindashboard/userresponse/userresponse.component';
import { ChartviewComponent } from './login/admindashboard/userresponse/chartview/chartview.component';
import { FulldetailsComponent } from './login/admindashboard/userresponse/fulldetails/fulldetails.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ActivesurveyComponent } from './login/admindashboard/activesurvey/activesurvey.component';



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    AdmindashboardComponent,
    UserdashboardComponent,
    SurveyComponent,
    QuestionsComponent,
    SurveydashboardComponent,
    AddadminComponent,
    UserresponseComponent,
    ChartviewComponent,
    FulldetailsComponent,
    HomepageComponent,
    ActivesurveyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CdkScrollableModule,
    MatRadioModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatSliderModule,
    MatInputModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
    MatSortModule,
    MatDialogModule,
    GoogleChartsModule,
    MatTooltipModule,
    FormsModule,
    MatSnackBarModule,
    MatSelectModule,
    MatFormFieldModule,
    RouterModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    GridModule
  ],
  providers: [MatDatepickerModule, 
    MatNativeDateModule,PdfExportService,ToolbarService],
  bootstrap: [AppComponent],
  entryComponents:[SurveyComponent]
})
export class AppModule { }
