import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppService} from '../app.service';
import {Router} from '@angular/router';
import {SignUpService} from './sign-up.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  constructor(private http: HttpClient, private abc: AppService, private router: Router, private a: SignUpService) {
  }

  //username;
  email;
  password;
  name;
  address;
  contact;
  cemail;
  allUsers;
  flag = 0;
  ngOnInit() {
    if (this.abc.checkLogin()) {
      this.router.navigate(['/home']);
    }
    this.a.checkSame().subscribe( data1 => {
      this.allUsers = data1;
      console.log(data1);
      //console.log(this.allUsers[0].email);
    });
  }

  finalData() {
    //const json = JSON.stringify(ar);
      return this.http.post('http://localhost:2020/abc/somedata', {
        email: this.email,
        password: this.password,
        name: this.name,
        address: this.address,
        contact: this.contact
      }).subscribe(data => {
        for (let i = 0; i < this.allUsers.length; i++) {
          if (this.allUsers[i].email === this.email) {
            this.flag = 1; break; } else {
            this.flag = 0;}
        }
        console.log(this.flag);
        if (this.cemail != null && this.email != null && this.password != null && this.address != null && this.contact != null && this.name != null) {
          if (this.flag === 1) {
             alert('Email-id already taken!!!');
          } else if (this.email !== this.cemail) {
            alert('Re-enter the email');
          } else {
            this.router.navigate(['/login']);
            alert('Thanku for signup!!!');
          }
        } else {
          alert('Re-enter details');
        }
      });
}
}
