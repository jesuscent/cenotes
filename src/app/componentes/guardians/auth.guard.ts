import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//injectable decorator
@Injectable()
// creation of the authguard class
export class AuthGuard implements CanActivate{

constructor(
    private router: Router,
    private afAuth: AngularFireAuth
){}
//method that returns an observable to verify the status of the user depending
// of the status we will have the option to navigate between the different routes
canActivate():Observable<boolean>{
    return this.afAuth.authState.pipe(
        map(auth=>{
            if(!auth){
                this.router.navigate(['/login']);
                return false;
            }
            else{
                return true;
            }
        })
    )
}
}