import{Injectable} from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { map } from 'rxjs/operators';

@Injectable()
export class LoginService{
    constructor (private authService: AngularFireAuth){}

    login(email: string, password: string){
        return new Promise((resolve, reject) => {
            this.authService.auth.signInWithEmailAndPassword(email, password)
            .then(datos => resolve(datos),
                error => reject(error)
            )
        })
    }
    //method to obtain the logged in user
    getAuth(){
        return this.authService.authState.pipe(map( auth => auth)
        );
    }
//method to close session
    logout(){
        this.authService.auth.signOut();
    }
    
}


