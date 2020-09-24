import { Component, OnInit } from '@angular/core';
import { NewUserModel } from 'src/app/entity/NewUserModel';
import { NewuserService } from 'src/app/service/newuser.service';
import { Router } from '@angular/router';
import { combineAll } from 'rxjs/operators';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  user: NewUserModel = new NewUserModel();
  submitted = false;
  constructor(private newuserService: NewuserService,
    private router: Router) { }
    ngOnInit() {
    }
    newNewUserModel(): void {
      this.submitted = false;
      this.user = new NewUserModel();
    }
    save() {
      this.newuserService
      .saveUserDatabase(this.user).subscribe(data => {
        console.log(data)
        this.user = new NewUserModel();
        this.gotoList();
      }, 
      error => {console.log(error)
        alert("PAN Number OR Username Already Registered"); 
    }
      );
    }
  
    onSubmit() {
      this.submitted = true;
     
      this.save();    
    }
  
    gotoList() {
      alert("Successfully Registered"); 
      this.router.navigate(['/login']);
    }
    
}
