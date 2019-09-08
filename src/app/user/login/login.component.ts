import { Component, OnInit } from '@angular/core';

import { AppService } from '../../app.service';

//import for toastr
import { ToastrService } from 'ngx-toastr';
//import for Routing
import { ActivatedRoute, Router } from '@angular/router';

//for cookies
import { Cookie } from 'ng2-cookies/ng2-cookies';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public email: any;
  public password: any;

  constructor(
    public appService: AppService,
    public _route: ActivatedRoute,
    public router: Router,
    private toastr: ToastrService,

  ) { }

  public goToAdminDashboard(): any {
    this.router.navigate(['/user/admin/meeting/dashboard']);
  }

  public goToUserDashboard(): any {
    this.router.navigate(['/user/normal/meeting/dashboard']);
  }

  public signInFunction(): any {

    if (!this.email) {
      this.toastr.warning("Email is required", "Warning!");
    }
    else if (!this.password) {
      this.toastr.warning("Password is required", "Warning!");
    }
    else {
      let data = {
        email: this.email,
        password: this.password,
      }

      console.log(data)  
      this.appService.signIn(data)
        .subscribe((apiResponse) => {

          if (apiResponse.status == 200) {
            this.toastr.success("Login Successfull", "Welcome to Meeting Planner");
            
            
            Cookie.set('authToken', apiResponse.data.authToken);
            Cookie.set('receiverId', apiResponse.data.userDetails.userId);
            Cookie.set('receiverName', `${apiResponse.data.userDetails.firstName} ${apiResponse.data.userDetails.lastName}`);
            this.appService.setUserInfoInLocalStorage(apiResponse.data.userDetails);
            
            setTimeout(() => {

              if(apiResponse.data.userDetails.isAdmin == "true"){
                this.goToAdminDashboard();
              }else{
                this.goToUserDashboard();
              }

            }, 1000);

          }
          else {
            this.toastr.error(apiResponse.message, "Error!");
          }
        },
          (error) => {
            
            if(error.status == 404){
              this.toastr.warning("Login Failed", "User Not Exist!");
            }
            else if(error.status == 400){
              this.toastr.warning("Login Failed", "Wrong Password");
            }
            else{
              this.toastr.error("Some Error Occurred", "Error!");
              this.router.navigate(['/serverError']);
  
            }
              
          });
    }
  }
  public loginUsingKeypress: any = (event: any) => {

    if (event.keyCode === 13) { 

      this.signInFunction();

    }

  }

  ngOnInit() {
  }




}
