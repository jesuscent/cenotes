

import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { LoginService } from 'src/app/services/login.service';
import { OnInit, Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //declacion de variables 
  email:string;
  password:string;

  constructor(private router: Router,
    private flashMessages: FlashMessagesService,
    private loginService: LoginService

) { }

ngOnInit() {
// 
this.loginService.getAuth().subscribe(auth => {
if(auth){
this.router.navigate(['/']);
}
})
}
//Validation method of email and password fields
login(){
this.loginService.login(this.email, this.password)
.then( res => {
this.router.navigate(['/dashboard']);
})
.catch(error =>{
this.flashMessages.show(error.message, {
cssClass: 'alert-danger', timeout: 4000
});
});
}

}