package com.jsftraining.capstone.controller;

import java.time.Instant;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.ZoneOffset;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.jsftraining.capstone.model.Questions;
import com.jsftraining.capstone.model.Submission;
import com.jsftraining.capstone.model.Survey;
import com.jsftraining.capstone.model.Surveymail;
import com.jsftraining.capstone.model.Surveyquestion;
import com.jsftraining.capstone.model.Users;
import com.jsftraining.capstone.model.Subdata;
import com.jsftraining.capstone.repository.QuestionsRepository;
import com.jsftraining.capstone.repository.SubmissionRepository;
import com.jsftraining.capstone.repository.SurveyRepository;
import com.jsftraining.capstone.repository.SurveymailRepository;
import com.jsftraining.capstone.repository.SurveyquestionRepository;
import com.jsftraining.capstone.repository.UsersRepository;
import com.jsftraining.capstone.repository.SubdataRepository;
import com.jsftraining.capstone.service.EmailService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class UsersController {
	
	@Autowired
	private QuestionsRepository quesrepository;
	
	@Autowired
	private UsersRepository repository;
	
	@Autowired
	private SurveyquestionRepository surveyquesrepository;
	
	@Autowired
	private SurveyRepository surveyrepository;
	
	@Autowired
	private SubdataRepository subdatarepository;
	
	@Autowired
	private SurveymailRepository mailrepo;
	
	@Autowired
    private EmailService emailService;


	
	
	
	@Autowired
	private SubmissionRepository submisrepository;
	
	
	@PostMapping("/saveques")
    public void addQuestion(@RequestBody Questions ques) {
		System.out.println(ques);
		String dd  ="";
		for(int i =0;i<10;i++) {
			dd+= ques.getQuesdate().charAt(i);
		}
		System.out.println(dd);
		ques.setQuesdate(dd);
		//user.setusertype("user");
        quesrepository.save(ques);
        
        //return ques;
    }
	
	//Submission
	@PostMapping("/savesub")
   public void addSubmission(@RequestBody Submission ques) {
		System.out.println(ques);
		String dd  ="";
		DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyy-MM-dd");
		LocalDateTime now = LocalDateTime.now();
		//System.out.println(dtf.format(now));
		String Dd =dtf.format(now);
		ques.setSubmissiondate(Dd);
		for(int i =0;i<10;i++) {
			//dd+= ques.getRegisterdate().charAt(i);
		}
		System.out.println(dd);
		//qu.setRegisterdate(dd);
		//user.setusertype("user");
		emailService.sendMail(ques.getEmailid(), "Survey Submitted",ques.getSurveyname() +" "+ "Survey issubmitted by"+" " + ques.getSubmissiondate());
		submisrepository.save(ques);
		
		//return ques;
    }
	
	@PostMapping("/savesuba")
	   public void addSubdata(@RequestBody Subdata ques) {
		Users u = new Users();
		u.setemailid(ques.getEmailid());
		u.setinterest(ques.getInterest());
		u.setdedication(ques.getDedication());
		u.setusertype("user");
		u.setusername(ques.getUsername());
			System.out.println(ques);
			String dd  ="";
			DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyy-MM-dd");
			LocalDateTime now = LocalDateTime.now();
			//System.out.println(dtf.format(now));
			String Dd =dtf.format(now);
			ques.setSubmissiondate(Dd);
			u.setRegisterdate(Dd);
			for(int i =0;i<10;i++) {
				//dd+= ques.getRegisterdate().charAt(i);
			}
			System.out.println(dd);
			//qu.setRegisterdate(dd);
			//user.setusertype("user");
			//repository.save(u);
			subdatarepository.save(ques);
			
			//return ques;
	    }


	//Admin get all surveys
	@GetMapping("/findall")
    public List<Surveyquestion> getSurvey() {
        return (List<Surveyquestion>) surveyquesrepository.findAll();
    }
	
	@GetMapping("/sendm")
    public Users sendmail() {
		Users u = new Users();
		Iterable<Surveymail> mail = mailrepo.findAll(); 
		List<Surveymail> list = new ArrayList<>();
		mail.forEach(list::add);
		System.out.println("Send Mail");
		Iterable<Users> user = repository.findAll();
		List<Users> lis = new ArrayList<>();
		user.forEach(lis::add);
		
		DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyy-MM-dd");
		LocalDateTime now = LocalDateTime.now();
		//System.out.println(dtf.format(now));
		String Dd =dtf.format(now);
		//String[] d = dd.split('-');
		String[] ds = Dd.split("-");
		int y= Integer.parseInt(ds[0]);
		int m  = Integer.parseInt(ds[1]);
		int d = Integer.parseInt(ds[2]);
		int ye, ys, me, ms, de ,dds;
		
		for(int i=0;i<list.size();i++) {
			if(list.get(i).getSend().contains("false")) {
				Surveymail sq =  new Surveymail();
				sq = list.get(i);
				
				String[] dss = sq.getSurveystart().split("-");
				String[] dse = sq.getSurveyend().split("-");
				//int yee = Integer.parseInt(dse[0]);
					ye = Integer.parseInt(dse[0]);
					ys = Integer.parseInt(dss[0]);
					me = Integer.parseInt(dse[1]);
					ms = Integer.parseInt(dss[1]);
					de = Integer.parseInt(dse[2]);
					dds = Integer.parseInt(dss[2]);
					
					if((ys<= y) && (y<= ye)) {
						if((ms<= m) && (m<= me)) {
							if((dds<= d) && (d<= de)) {
								
								for(int j=0;j<lis.size();j++) {
									
									if(lis.get(j).getusertype().contains("user")) {
										
										String  email = lis.get(j).getemailid();
										String surveyname = list.get(i).getSurveyname();
										String Msg = surveyname +""+ "Going to start by Today";
										String subject = surveyname +""+ "Notification";
										
										emailService.sendMail(email, subject, Msg);
										
										sq.setSend("true");
										
										mailrepo.save(sq);

										
									}
									
																				
								}
								
							}
							
						}
					}

					
				
						
				
			}
				//list[i]
		}
		
		
		
		return u;
       // return (List<Surveyquestion>) surveyquesrepository.findAll();
    }
	
	
	@GetMapping("/findsub")
    public List<Submission> getSubmis() {
        return (List<Submission>) submisrepository.findAll();
    }
	
	@GetMapping("/findquesall/{surveyid}")
    public List<Questions> getQuestion(@PathVariable("surveyid") int surveyid,Questions ques) {
		Optional<Surveyquestion> sq = surveyquesrepository.findById(surveyid);
		Surveyquestion ssq = new Surveyquestion();
		if (sq.isPresent()) {
			ssq = sq.get();
		    }
		List<Questions> list = new ArrayList<>();
		int n = Integer.parseInt(ssq.getNoofques());
		for(int i=0; i<n;i++) {
			Optional<Questions> quue = quesrepository.findById(surveyid+i);
			if (quue.isPresent()) {
				ques = quue.get();
			    }
			list.add(ques);		
		}
        return list;
    }
	
	@GetMapping("/finduserss")
    public List<Users> getUserss(Users ques) {
		Iterable<Users> sq = repository.findAll();
		Users ssq = new Users();
		
		List<Users> list = new ArrayList<>();
		List<Users> lis = new ArrayList<>();
		
		//surveyquesrepository.findAll()
		sq.forEach(list::add);
		int n = list.size();
		System.out.println("list size"+ n);
		for(int i=0; i<n;i++) {
			if( repository.existsById(i)) {
			Optional<Users> quue = repository.findById(i+1);
			
				if (quue.isPresent()) {
					ques = quue.get();
				    }
				System.out.println("size"+ques.getusertype());
				if(ques.getusertype().contains("user")) {
					System.out.println("getting");
					lis.add(ques);
				}
			}
		}
		System.out.println("size"+lis.size());
        return lis;
    }

	//find user active surveys......###########
	@GetMapping("/finduserall")
    public List<Surveyquestion> getUserSurvey() {
		Iterable<Surveyquestion> l= surveyquesrepository.findAll();
		
		DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyy-MM-dd");
		LocalDateTime now = LocalDateTime.now();
		//System.out.println(dtf.format(now));
		String Dd =dtf.format(now);
		String[] ds = Dd.split("-");
		int y= Integer.parseInt(ds[0]);
		int m  = Integer.parseInt(ds[1]);
		int d = Integer.parseInt(ds[2]);
		int ye, ys, me, ms, de ,dds;
	
		List<Surveyquestion> list = new ArrayList<>();
		List<Surveyquestion> lis = new ArrayList<>();
		
		//surveyquesrepository.findAll()
		l.forEach(list::add);
		System.out.println(list.size());
		
		for(int i=0; i< list.size();i++ ) {
			Surveyquestion sq =  new Surveyquestion();
			sq = list.get(i);
			
			String[] dss = sq.getSurveystart().split("-");
			String[] dse = sq.getSurveyend().split("-");
			//int yee = Integer.parseInt(dse[0]);
				ye = Integer.parseInt(dse[0]);
				ys = Integer.parseInt(dss[0]);
				me = Integer.parseInt(dse[1]);
				ms = Integer.parseInt(dss[1]);
				de = Integer.parseInt(dse[2]);
				dds = Integer.parseInt(dss[2]);
				
			
			
			if((ys<= y) && (y<= ye)) {
				if((ms<= m) && (m<= me)) {
					if((dds<= d) && (d<= de)) {
						
						lis.add(sq);
						
					}
					
				}
			}
			
			//if()
		}
		
		
		
		
	
		
        return lis;
    }
	
	//find user active surveys......###########
		@GetMapping("/findnonall")
	    public List<Surveyquestion> getnonSurvey() {
			Iterable<Surveyquestion> l= surveyquesrepository.findAll();
			
			DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyy-MM-dd");
			LocalDateTime now = LocalDateTime.now();
			//System.out.println(dtf.format(now));
			String Dd =dtf.format(now);
			String[] ds = Dd.split("-");
			int y= Integer.parseInt(ds[0]);
			int m  = Integer.parseInt(ds[1]);
			int d = Integer.parseInt(ds[2]);
			int ye, ys, me, ms, de ,dds;
		
			List<Surveyquestion> list = new ArrayList<>();
			List<Surveyquestion> lis = new ArrayList<>();
			
			//surveyquesrepository.findAll()
			l.forEach(list::add);
			System.out.println(list.size());
			
			for(int i=0; i< list.size();i++ ) {
				Surveyquestion sq =  new Surveyquestion();
				sq = list.get(i);
				
				String[] dss = sq.getSurveystart().split("-");
				String[] dse = sq.getSurveyend().split("-");
				//int yee = Integer.parseInt(dse[0]);
					ye = Integer.parseInt(dse[0]);
					ys = Integer.parseInt(dss[0]);
					me = Integer.parseInt(dse[1]);
					ms = Integer.parseInt(dss[1]);
					de = Integer.parseInt(dse[2]);
					dds = Integer.parseInt(dss[2]);
					
				
				
				if((ys<= y) && (y<= ye)) {
					if((ms<= m) && (m<= me)) {
						if((dds<= d) && (d<= de)) {
							
							
							
						}else {
							lis.add(sq);
							
						}
						
					}else {
						lis.add(sq);
					}
				}else {
					lis.add(sq);
				}
				
				//if()
			}
			
			
			
			
		
			
	        return lis;
	    }
		
	
	
	//Delete the Survey 
	@DeleteMapping("delsurvey/{surveyid}")  
    public void deleteStudent(@PathVariable("surveyid") int surveyid,Surveyquestion survey) {  
       // student.setStudent_id(student_id);  
		System.out.println(surveyid);
		//Optional<Surveyquestion> ss = surveyquesrepository.findById(surveyid);
		Surveyquestion se = new Surveyquestion();
		Optional<Surveyquestion> ss = surveyquesrepository.findById(surveyid);
		//ss.get()
		if (ss.isPresent()) {
			se = ss.get();
		    }
		int n= Integer.parseInt(se.getNoofques()) ;
		surveyrepository.deleteById(surveyid); 
        surveyquesrepository.deleteById(surveyid); 
        
		while(n!=0) {
			quesrepository.deleteById(surveyid+n-1);
			n-=1;
		}
		
		
		//se.setNoofques(survey.get);
		  //int s = ss.get
        // surveyrepository.deleteById(surveyid); 
        // surveyquesrepository.deleteById(surveyid); 
         //return "Deleted";
    } 
	
	
	//Update Survey Question
	@PutMapping("updateques/{student_id}")  
    public 	void updateStudent(@RequestBody Surveyquestion student,@PathVariable("student_id") int student_id){  
        student.setId(student_id);
        System.out.println("update:" + student.getSurveyname());
System.out.println(student.getSurveystart());

Instant timestamp = Instant.parse(student.getSurveystart());

System.out.println(timestamp);

Instant timestamps = Instant.parse(student.getSurveyend());

System.out.println(timestamps);

LocalDateTime localstart = LocalDateTime.ofInstant(timestamp, ZoneOffset.UTC);
LocalDateTime localend = LocalDateTime.ofInstant(timestamps, ZoneOffset.UTC);

//localstart.plusDays(1);

student.setSurveystart(String.valueOf(localstart.plusDays(1)));
student.setSurveyend(String.valueOf(localend.plusDays(1)));
		
	/*	String ssd  ="";
		String eed ="";
		for(int i =0;i<10;i++) {
			ssd+= student.getSurveystart().charAt(i);
			eed+= student.getSurveyend().charAt(i);
		}
		
		String[] dss = ssd.split("-");
		String[] dse = eed.split("-");
		//int yee = Integer.parseInt(dse[0]);
			int ye = Integer.parseInt(dse[0]);
			int ys = Integer.parseInt(dss[0]);
			int me = Integer.parseInt(dse[1]);
			int ms = Integer.parseInt(dss[1]);
			int de = Integer.parseInt(dse[2]);
			int dds = Integer.parseInt(dss[2]);
			de+=1;
			dds+=1;
			if(me<10) {
				if(ye<10) {
					student.setSurveyend(ye+"-0"+me+"-0"+de);
				}else {
					student.setSurveyend(ye+"-0"+me+"-"+de);
				}
			}else {
				if(ye<10) {
					student.setSurveyend(ye+"-"+me+"-0"+de);
				}else {
					student.setSurveyend(ye+"-"+me+"-"+de);
				}
				//surv.setSurveyend(ye+"-"+me+"-"+de);
			}
			if(ms<10) {
				if(ys<10) {
					student.setSurveystart(ys+"-0"+ms+"-0"+dds);
					 
				}else {
					student.setSurveystart(ys+"-0"+ms+"-"+dds);
					 
				}
				
			}else {
				if(ys<10) {
					student.setSurveystart(ys+"-"+ms+"-0"+dds);
					 
				}else {
					student.setSurveystart(ys+"-"+ms+"-"+dds);
					 
				}
				//surv.setSurveystart(ys+"-"+ms+"-"+dds);
				 
			}
			*/
        
        // Survey Update 
        Survey surv = new Survey();
        Surveymail surmail = new Surveymail();
        surv.setid(student_id);
        surv.setSurveydescription(student.getSurveydescription());
        surv.setSurveyend(student.getSurveyend());
        surv.setSurveystart(student.getSurveystart());
        surv.setSurveyname(student.getSurveyname());
        DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyy-MM-dd");
		LocalDateTime now = LocalDateTime.now();
		//System.out.println(dtf.format(now));
		String Dd =dtf.format(now);
		int n= Integer.parseInt(student.getNoofques());
		String nn= ""+n;
		surv.setNoofques(nn);
		surv.setSurveymade(Dd);
		String sd  ="";
		String ed ="";
		for(int i =0;i<10;i++) {
			sd+= surv.getSurveystart().charAt(i);
			ed+= surv.getSurveyend().charAt(i);
		}
		surv.setSurveystart(sd);
		surv.setSurveyend(ed);
		surveyrepository.save(surv);
		
		//SurveyMail Update
		surmail.setId(student_id);
		surmail.setSurveyname(student.getSurveyname());
		surmail.setSurveystart(sd);
		surmail.setSurveyend(ed);
		surmail.setSend("false");
		
		mailrepo.save(surmail);
		
		//SurveyQuestion Update
		student.setSurveystart(sd);
		student.setSurveyend(ed);
		
		//Question Update
		Questions ques = new Questions();
		ques.setQuesdate(Dd);
		String[] ans;
		ques.setOption1("");
		ques.setOption2("");
		ques.setOption3("");
		ques.setOption4("");
		for(int i=0; i<n; i++) {
			switch(i+1) {
			case 1:
				ques.setid(student_id);
				ques.setSurveyname(student.getSurveyname());
				ques.setQuestion(student.getQuestion1());
				ques.setInput(student.getQuestiontype1());
				 ans= student.getAnswers1().split(",");
				for(int j=0; j< ans.length;j++) {
					if(j==0) {
						ques.setOption1(ans[j]);
					}
					if(j==1) {
						ques.setOption2(ans[j]);
					}
					if(j==2) {
						ques.setOption3(ans[j]);
					}
					if(j==3) {
						ques.setOption4(ans[j]);
					}
				}
				System.out.println("Ques Save 1");
				quesrepository.save(ques);
				break;
				
				
				
			case 2:
				ques.setid(student_id+1);
				ques.setSurveyname(student.getSurveyname());
				ques.setQuestion(student.getQuestion2());
				ques.setInput(student.getQuestiontype2());	
				ans= student.getAnswers2().split(",");
				for(int j=0; j< ans.length;j++) {
					if(j==0) {
						ques.setOption1(ans[j]);
					}
					if(j==1) {
						ques.setOption2(ans[j]);
					}
					if(j==2) {
						ques.setOption3(ans[j]);
					}
					if(j==3) {
						ques.setOption4(ans[j]);
					}
				}
				System.out.println("Ques Save 2");
				quesrepository.save(ques);
				break;

				
			case 3:
				ques.setid(student_id+2);
				ques.setSurveyname(student.getSurveyname());
				ques.setQuestion(student.getQuestion3());
				ques.setInput(student.getQuestiontype3());
				ans= student.getAnswers3().split(",");
				for(int j=0; j< ans.length;j++) {
					if(j==0) {
						ques.setOption1(ans[j]);
					}
					if(j==1) {
						ques.setOption2(ans[j]);
					}
					if(j==2) {
						ques.setOption3(ans[j]);
					}
					if(j==3) {
						ques.setOption4(ans[j]);
					}
				}
				System.out.println("Ques Save 3");
				quesrepository.save(ques);
				break;

				
			case 4:
				ques.setid(student_id+3);
				ques.setSurveyname(student.getSurveyname());
				ques.setQuestion(student.getQuestion4());
				ques.setInput(student.getQuestiontype4());	
				String[] ans4= student.getAnswers4().split(",");
				for(int j=0; j< ans4.length;j++) {
					if(j==0) {
						ques.setOption1(ans4[j]);
					}
					if(j==1) {
						ques.setOption2(ans4[j]);
					}
					if(j==2) {
						ques.setOption3(ans4[j]);
					}
					if(j==3) {
						ques.setOption4(ans4[j]);
					}
				}
				System.out.println("Ques Save 4");
				quesrepository.save(ques);
				break;

				
			case 5:	
				ques.setid(student_id+4);
				ques.setSurveyname(student.getSurveyname());
				ques.setQuestion(student.getQuestion5());
				ques.setInput(student.getQuestiontype5());
				String[] ans5= student.getAnswers5().split(",");
				for(int j=0; j< ans5.length;j++) {
					if(j==0) {
						ques.setOption1(ans5[j]);
					}
					if(j==1) {
						ques.setOption2(ans5[j]);
					}
					if(j==2) {
						ques.setOption3(ans5[j]);
					}
					if(j==3) {
						ques.setOption4(ans5[j]);
					}
				}
				System.out.println("Ques Save 5");
				quesrepository.save(ques);
				break;

				
			}
			
		}

		
		
		surveyquesrepository.save(student);
        //return surveyquesrepository.updateSurveyquestion(student);  
    }  

	
	
	/*@PostMapping("/savesurvey")
    void addSurvey(@RequestBody Survey survey) {
		System.out.println(survey);
		System.out.println(survey.getSurveystart());
		survey.setNoofques("0");
		
		DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyy-MM-dd");
		LocalDateTime now = LocalDateTime.now();
		System.out.println(dtf.format(now));
		String Dd =dtf.format(now);
		
		survey.setSurveymade(Dd);
		
		String sd  ="";
		String ed ="";
		for(int i =0;i<10;i++) {
			sd+= survey.getSurveystart().charAt(i);
			ed+= survey.getSurveyend().charAt(i);
		}
		survey.setSurveystart(sd);
		survey.setSurveyend(ed);
		
        surveyrepository.save(survey);
    }*/
	
	//Survey and Questions................................................
	
	@PostMapping("/savesurvey")
    void addSurvey(@RequestBody Surveyquestion surv) {
		Survey survey = new Survey();
		
		System.out.println(surv.getSurveystart());
		
		Instant timestamp = Instant.parse(surv.getSurveystart());
		
		System.out.println(timestamp);
		
		Instant timestamps = Instant.parse(surv.getSurveyend());
		
		System.out.println(timestamps);
		
		LocalDateTime localstart = LocalDateTime.ofInstant(timestamp, ZoneOffset.UTC);
		LocalDateTime localend = LocalDateTime.ofInstant(timestamps, ZoneOffset.UTC);
		
		//localstart.plusDays(1);
	
		surv.setSurveystart(String.valueOf(localstart.plusDays(1)));
		surv.setSurveyend(String.valueOf(localend.plusDays(1)));
		
		
		//LocalDate date = LocalDate.parse(surv.getSurveystart());
		//LocalDateTime.from(date.toInstant()).plusDays(1);
		//System.out.println("Start:"+date.plusDays(1));
		//LocalDate dateend = LocalDate.parse(surv.getSurveyend());
		//LocalDateTime.from(date.toInstant()).plusDays(1);
		//System.out.println("end:"+dateend.plusDays(1));
		
		//surv.setSurveystart(String.valueOf(date.plusDays(1)));
		//surv.setSurveyend(String.valueOf(dateend.plusDays(1)));
		
	/*	String ssd  ="";
		String eed ="";
		for(int i =0;i<10;i++) {
			ssd+= surv.getSurveystart().charAt(i);
			eed+= surv.getSurveyend().charAt(i);
		}
		
		String[] dss = ssd.split("-");
		String[] dse = eed.split("-");
		//int yee = Integer.parseInt(dse[0]);
			int ye = Integer.parseInt(dse[0]);
			int ys = Integer.parseInt(dss[0]);
			int me = Integer.parseInt(dse[1]);
			int ms = Integer.parseInt(dss[1]);
			int de = Integer.parseInt(dse[2]);
			int dds = Integer.parseInt(dss[2]);
			de+=1;
			dds+=1;
			if(me<10) {
				if(ye<10) {
					surv.setSurveyend(ye+"-0"+me+"-0"+de);
				}else {
					surv.setSurveyend(ye+"-0"+me+"-"+de);
				}
			}else {
				if(ye<10) {
					surv.setSurveyend(ye+"-"+me+"-0"+de);
				}else {
					surv.setSurveyend(ye+"-"+me+"-"+de);
				}
				//surv.setSurveyend(ye+"-"+me+"-"+de);
			}
			if(ms<10) {
				if(ys<10) {
					surv.setSurveystart(ys+"-0"+ms+"-0"+dds);
					 
				}else {
					surv.setSurveystart(ys+"-0"+ms+"-"+dds);
					 
				}
				
			}else {
				if(ys<10) {
					surv.setSurveystart(ys+"-"+ms+"-0"+dds);
					 
				}else {
					surv.setSurveystart(ys+"-"+ms+"-"+dds);
					 
				}
				//surv.setSurveystart(ys+"-"+ms+"-"+dds);
				 
			}
			*/
		
		int no;
		List<Survey> s =(List<Survey>) surveyrepository.findAll();
		no = s.size();
		no+=1;
		
		System.out.println(surv.getSurveystart());
		
		Questions ques = new Questions();
		survey.setSurveydescription(surv.getSurveydescription());
		survey.setSurveyend(surv.getSurveyend());
		survey.setSurveystart(surv.getSurveystart());
		survey.setSurveyname(surv.getSurveyname());
		
		DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyy-MM-dd");
		LocalDateTime now = LocalDateTime.now();
		
		
		System.out.println("now::"+now);
		//now.a
		//System.out.println(dtf.format(now));
		String Dd =dtf.format(now);
		
		int n= Integer.parseInt(surv.getNoofques());
		
		ques.setQuesdate(Dd);
		surv.setSurveymade(Dd);
		//System.out.println(survey);
		
		
		
		String[] ans;
		ques.setOption1("");
		ques.setOption2("");
		ques.setOption3("");
		ques.setOption4("");

		for(int i=0; i<n; i++) {
			switch(i+1) {
			case 1:
				ques.setid(no);
				ques.setSurveyname(surv.getSurveyname());
				ques.setQuestion(surv.getQuestion1());
				ques.setInput(surv.getQuestiontype1());
				 ans= surv.getAnswers1().split(",");
				for(int j=0; j< ans.length;j++) {
					if(j==0) {
						ques.setOption1(ans[j]);
					}
					if(j==1) {
						ques.setOption2(ans[j]);
					}
					if(j==2) {
						ques.setOption3(ans[j]);
					}
					if(j==3) {
						ques.setOption4(ans[j]);
					}
				}
				System.out.println("Ques Save 1");
				quesrepository.save(ques);
				break;
				
				
				
			case 2:
				ques.setid(no+1);
				ques.setSurveyname(surv.getSurveyname());
				ques.setQuestion(surv.getQuestion2());
				ques.setInput(surv.getQuestiontype2());	
				ans= surv.getAnswers2().split(",");
				for(int j=0; j< ans.length;j++) {
					if(j==0) {
						ques.setOption1(ans[j]);
					}
					if(j==1) {
						ques.setOption2(ans[j]);
					}
					if(j==2) {
						ques.setOption3(ans[j]);
					}
					if(j==3) {
						ques.setOption4(ans[j]);
					}
				}
				System.out.println("Ques Save 2");
				quesrepository.save(ques);
				break;

				
			case 3:
				ques.setid(no+2);
				ques.setSurveyname(surv.getSurveyname());
				ques.setQuestion(surv.getQuestion3());
				ques.setInput(surv.getQuestiontype3());
				ans= surv.getAnswers3().split(",");
				for(int j=0; j< ans.length;j++) {
					if(j==0) {
						ques.setOption1(ans[j]);
					}
					if(j==1) {
						ques.setOption2(ans[j]);
					}
					if(j==2) {
						ques.setOption3(ans[j]);
					}
					if(j==3) {
						ques.setOption4(ans[j]);
					}
				}
				System.out.println("Ques Save 3");
				quesrepository.save(ques);
				break;

				
			case 4:
				ques.setid(no+3);
				ques.setSurveyname(surv.getSurveyname());
				ques.setQuestion(surv.getQuestion4());
				ques.setInput(surv.getQuestiontype4());	
				String[] ans4= surv.getAnswers4().split(",");
				for(int j=0; j< ans4.length;j++) {
					if(j==0) {
						ques.setOption1(ans4[j]);
					}
					if(j==1) {
						ques.setOption2(ans4[j]);
					}
					if(j==2) {
						ques.setOption3(ans4[j]);
					}
					if(j==3) {
						ques.setOption4(ans4[j]);
					}
				}
				System.out.println("Ques Save 4");
				quesrepository.save(ques);
				break;

				
			case 5:
				ques.setid(no+4);
				ques.setSurveyname(surv.getSurveyname());
				ques.setQuestion(surv.getQuestion5());
				ques.setInput(surv.getQuestiontype5());
				String[] ans5= surv.getAnswers5().split(",");
				for(int j=0; j< ans5.length;j++) {
					if(j==0) {
						ques.setOption1(ans5[j]);
					}
					if(j==1) {
						ques.setOption2(ans5[j]);
					}
					if(j==2) {
						ques.setOption3(ans5[j]);
					}
					if(j==3) {
						ques.setOption4(ans5[j]);
					}
				}
				System.out.println("Ques Save 5");
				quesrepository.save(ques);
				break;

				
			}
			
		}
			
		
		System.out.println(surv.getSurveyname());
		System.out.println("ques :" + surv.getQuestion2());
		System.out.println(surv.getNoofques());
		String nn= ""+n;
		survey.setNoofques(nn);
		
		
		
		survey.setSurveymade(Dd);
		System.out.println(survey.getSurveystart());
		
		String sd  ="";
		String ed ="";
		for(int i =0;i<10;i++) {
			sd+= survey.getSurveystart().charAt(i);
			ed+= survey.getSurveyend().charAt(i);
		}
		survey.setSurveystart(sd);
		survey.setSurveyend(ed);
		surv.setSurveyend(ed);
		surv.setSurveystart(sd);
		
		Surveymail surmail= new Surveymail(); 
		//surmail.setId(student_id);
		surmail.setSurveyname(surv.getSurveyname());
		surmail.setSurveystart(sd);
		surmail.setSurveyend(ed);
		surmail.setSend("false");
		
		mailrepo.save(surmail);
		
		surveyquesrepository.save(surv);
		
		
        surveyrepository.save(survey);
    }
	
	
	
	@PostMapping("/find")
	public Users getUser(@RequestBody Users user) {
		String email = user.getemailid();
		String pass = user.getpassword();
		System.out.println(email);
		Users u = new Users();
		Users nt = new Users();
		
		
		if(repository.existsByemailid(email)) {
			 u = repository.findByemailid(email);
			
			//Admin Login
			if(u.getusertype().contains("admin")) {
				System.out.println("Admin Login");
				
				if(pass.equals(u.getpassword()) ) {
					System.out.println("Login Success");
					return u;
					
					
				}else {
					System.out.println("Password Failed");
					
					return nt;
				}
			
			
			}else {
				
				if(pass.equals(u.getpassword()) ) {
					System.out.println("Login Success");
					
					return u;
					
					
				}else {
					System.out.println("Password Failed");
					
					return nt;
				}
				
				
			}
		
		}else {
			return u;
			
		}
		
		
		//return "Success";
	}
	
	@PostMapping("/users")
    public Users addUser(@RequestBody Users user) {
		System.out.println("User save -"+user);
		DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyy-MM-dd");
		LocalDateTime now = LocalDateTime.now();
		//System.out.println(dtf.format(now));
		String Dd =dtf.format(now);
		user.setRegisterdate(Dd);
		String dd  ="";
		for(int i =0;i<10;i++) {
			dd+= user.getRegisterdate().charAt(i);
		}
		System.out.println(dd);
		user.setRegisterdate(dd);
		/*if(user.getinterest() != "admin") {
			user.setusertype("user");
		}*/
		
        repository.save(user);
        
        return user;
    }

}
