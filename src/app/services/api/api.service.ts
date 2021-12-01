import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  users = [];

  constructor() {}
  sendMail(mail) {
    //code to send mail
    console.log('mail sent successfully');
  }

  public userRegister(user: any) {
    this.users.push(user);
    const stringdData = JSON.stringify(this.users);
    window.localStorage.setItem('users', stringdData);
  }

  public getUsers() {
    return window.localStorage.getItem('users');
  }

  getCurrentUser(){
    return {userName: 'Naveen', mobile: '9505',email: 'nnk@gmail.com'};
  }

}
