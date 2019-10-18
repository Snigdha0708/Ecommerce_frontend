import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppService} from '../app.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  constructor(private http: HttpClient, private abc: AppService, private router: Router) {}
  //username;
  email;
  password;
  name;
  address;
  contact;
  cemail;
  ngOnInit() {
    if (this.abc.checkLogin()) {
      this.router.navigate(['/home']);
    }
  }
  finalData() {
    //const json = JSON.stringify(ar);
    return this.http.post( 'http://localhost:2020/abc/somedata', {email: this.email,  password: this.password, name: this.name, address: this.address, contact: this.contact}).subscribe(data => {
      if (this.cemail != null && this.email != null && this.password != null && this.address != null && this.contact != null && this.name != null) {

        if (this.email !== this.cemail) {
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
