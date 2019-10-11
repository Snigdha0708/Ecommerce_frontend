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

  ngOnInit() {
    if (this.abc.checkLogin()) {
      this.router.navigate(['/home']);
    }
  }
  finalData() {
    //const json = JSON.stringify(ar);
    return this.http.post( 'http://localhost:2020/abc/somedata', {email: this.email,  password: this.password}).subscribe(data => {
      //console.log(json);
      this.router.navigate(['/login']);
    });
  }
  }
