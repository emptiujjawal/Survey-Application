import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import {Users} from '../model/User-model';
import {Survey} from '../model/Survey-model';
import {Questions} from '../model/Questions-model';
import {Submission} from '../model/Submission-model';
import {Subdata} from '../model/Subdata-model';
import {Surveyquestion} from '../model/Surveyquestion-model';
import {Observable , throwError} from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PolicyService {

  SERVER_URL: string = "http://localhost:8077/";
  private usersUrl: string;
  private findurl: string;
  private savesurvey: string;
  private findAllurl: string;
  private deleteurl: string;
  private updateurl: string;
  private findusersur: string;
  private saveques: string;
  private quesall: string;
  private savesub: string;
  private findsub: string;
  private findus: string;
  private send: string;
  private savesu: string;
  private nonac: string;

  apiurl = 'api/policies'; 
  headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');
  httpOptions = {
    headers: this.headers
  };

 isPresent:boolean = false;
  formData: Users;
  formDataSurvey: Survey;
  formDataQuestion: Questions;
  formDataSubmission: Submission;
  formDataSurveyQues: Surveyquestion;
  formDataSubdata: Subdata;


  constructor(private httpClient: HttpClient) { 
    this.usersUrl = 'http://localhost:8077/users';
    this.findurl  = 'http://localhost:8077/find';
    this.findAllurl = 'http://localhost:8077/findall';
    this.savesurvey = 'http://localhost:8077/savesurvey';
    this.deleteurl = 'http://localhost:8077/delsurvey';
    this.saveques = 'http://localhost:8077/saveques';  
    this.updateurl = 'http://localhost:8077/updateques'; 
    this.findusersur  = 'http://localhost:8077/finduserall';
    this.quesall = 'http://localhost:8077/findquesall';
    this.savesub = 'http://localhost:8077/savesub';
    this.findsub = 'http://localhost:8077/findsub';
    this.findus = 'http://localhost:8077/finduserss';
    this.send = 'http://localhost:8077/sendm';
    this.savesu = 'http://localhost:8077/savesuba';
    this.nonac = 'http://localhost:8077/findnonall';
    
  }

  private handleError(error: any) {
    console.error(error);                                       //Created a function to handle and log errors, in case
    return throwError(error);
  }
  
  public addsurvey(survey: Surveyquestion) {
    return this.httpClient.post<Surveyquestion>(this.savesurvey, survey);
  }

  public addsub(survey: Submission) {
    return this.httpClient.post<Submission>(this.savesub, survey);
  }
  public addsubda(survey: Subdata) {
    return this.httpClient.post<Subdata>(this.savesu, survey);
  }

  public sendma(): Observable<Users> {
    return this.httpClient.get<Users>(this.send);
  }


  public findAll(): Observable<Surveyquestion[]> {
    return this.httpClient.get<Surveyquestion[]>(this.findAllurl);
  }
  
  public findAllusers(): Observable<Users[]> {
    return this.httpClient.get<Users[]>(this.findus);
  }
  public findAllsub(): Observable<Submission[]> {
    return this.httpClient.get<Submission[]>(this.findsub);
  }
  public finduserAll(): Observable<Surveyquestion[]> {
    return this.httpClient.get<Surveyquestion[]>(this.findusersur);
  }
  public findnonAll(): Observable<Surveyquestion[]> {
    return this.httpClient.get<Surveyquestion[]>(this.nonac);
  }
  public findBy(user: Users){
    return this.httpClient.post<Users>(this.findurl, user);

  }
  public findquesAll (id: number): Observable<Questions> {
    const url = `${this.quesall}/${id}`;
    return this.httpClient.get<Questions>(url, this.httpOptions);
  }


  public updateU(surveyq: Surveyquestion): Observable<Surveyquestion>{
    
    console.log(surveyq.id);
    const url = `${this.updateurl}/${surveyq.id}`;
    return this.httpClient.put<Surveyquestion>(url, surveyq, this.httpOptions).pipe(
      map(() => surveyq),
      catchError(this.handleError)
    );
  }

  public deletePolicy (id: number): Observable<Surveyquestion> {
    const url = `${this.deleteurl}/${id}`;
    return this.httpClient.delete<Surveyquestion>(url, this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  public save(user: Users) {
    return this.httpClient.post<Users>(this.usersUrl, user);
  }

  public saveque(ques: Questions) {
    return this.httpClient.post<Questions>(this.saveques, ques);
  }

  private listners = new Subject<any>();
  listen(): Observable<any>{
    return this.listners.asObservable();
  }
  filter(filterBy: string){
    this.listners.next(filterBy);
  }
}
