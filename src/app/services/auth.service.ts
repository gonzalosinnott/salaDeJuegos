import {
  Auth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from '@angular/fire/auth';

import { AngularFireAuth } from '@angular/fire/compat/auth';

import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';

import { User } from '../services/user';

import { Injectable } from '@angular/core';
import { LoginData } from '../interfaces/login-data.interface';
import { RegisterData } from '../interfaces/register-data.interface';
import firebase from 'firebase/compat/app';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  userData: any; // Save logged in user data
  now = new Date();
  isLogin = false;    
  roleAs: string;

  constructor(private auth: Auth,
              public afAuth: AngularFireAuth,
              public afs: AngularFirestore, // Inject Firebase auth service
    ) {
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user')!);        
      } else {
        localStorage.setItem('user', 'null');
        JSON.parse(localStorage.getItem('user')!);
      }
    });
  }

  login({ email, password }: LoginData) {
    return signInWithEmailAndPassword(this.auth, email, password)
    .then((result) => {      
      this.SetUserData(result.user);
      this.isLogin = true;
      this.roleAs = this.userData.role;
      localStorage.setItem('STATE', 'true');
      localStorage.setItem('ROLE', this.roleAs)
      return of({ success: this.isLogin, role: this.roleAs });
    })
  }

  loginWithGoogle() {
    return signInWithPopup(this.auth, new GoogleAuthProvider())
    .then((result) => {
      this.SetUserData(result.user);
      this.isLogin = true;
      this.roleAs = this.userData.role;
      localStorage.setItem('STATE', 'true');
      localStorage.setItem('ROLE', this.roleAs)
      return of({ success: this.isLogin, role: this.roleAs });
    })
  }

  register({ email, user, password }: RegisterData) {
    console.log(email, user, password);
    return this.afAuth.createUserWithEmailAndPassword(email, password)
    .then(credential => {
      credential.user.updateProfile({
        displayName: user,
     })
      this.SetUserData(credential.user);
    })
  }

  logout() {
    return signOut(this.auth)
    .then((result) => {
      localStorage.removeItem('user');
      this.isLogin = false;
      this.roleAs = '';
      localStorage.setItem('STATE', 'false');
      localStorage.setItem('ROLE', '');
      return of({ success: this.isLogin, role: '' });
    })
  }

  SetUserData(user: any) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(
      `users-registry/${user.uid}`
    );

    const userLog: AngularFirestoreDocument<any> = this.afs.doc(
      `users-log/${this.now}`
    );

    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified,
      role: 'USER'
    };

    const userDataLog: any = {
      displayName: user.displayName,
      email: user.email,
      loginDate : this.now.toLocaleString()
    };

    userLog.set(userDataLog, {
      merge: false,
    });
    
    return userRef.set(userData, {
      merge: true,
    });
  }

  getAuth() {
    return this.afAuth.authState;
  }

  SetScore(game: any, score: any) {

    const userRef: AngularFirestoreDocument<any> = this.afs.doc(
      `scores/${this.now + '-' + this.userData.displayName}`
    );

    const userScore: any = {
      game: game,
      score: score,
      date: this.now.toLocaleString(),
      user: this.userData.displayName
    };

    userRef.set(userScore, {
      merge: false,
    });
  }

  getUserHighScore(game: any) {
    var data;
    return firebase.firestore().collection('scores')
                               .where('game', '==', game)
                               .where('user', '==', this.auth.currentUser.displayName)
                               .orderBy('score', 'desc').limit(1)
                               .get()
                               .then((querySnapshot) => {
                                 querySnapshot.forEach((doc) => {
                                     data = doc.data()['score'];
                                 });
                                 console.log(data);
                                 return data;
                               })
                               .catch((error) => {
                                 console.log("Error getting documents: ", error);
                               });
  }

  getGameHighScore(game: any) {
    var data;
    return firebase.firestore().collection('scores')
                               .where('game', '==', game)
                               .orderBy('score', 'desc').limit(1)
                               .get()
                               .then((querySnapshot) => {
                                 querySnapshot.forEach((doc) => {
                                     data = doc.data();
                                 });
                                 console.log(data);
                                 return data;
                               })
                               .catch((error) => {
                                 console.log("Error getting documents: ", error);
                               });
  }

  SetUserSurvey(data: any) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(
      `users-survey/${this.auth.currentUser.email}`
    );

    const survey: any = {
      name: data.name,
      lastName: data.lastName,
      phone: data.phone,
      age: data.age,
      favGame:  data.favGame,
      experience: data.experience,
      opinion: data.opinion,
      user: this.auth.currentUser.displayName
    };
 
    return userRef.set(survey, {
      merge: true,
    });
  }

  getUserRole() {
    return this.afs.collection('users-registry').doc(this.auth.currentUser.uid).valueChanges();
  }

}