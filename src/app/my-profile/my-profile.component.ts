import { Component, OnInit } from '@angular/core';
import {MyProfileService} from './my-profile.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit {

  constructor(private abc: MyProfileService, private http: HttpClient, private router: Router) { }
  myp;
  disabled = true;
  url = 'http://localhost:2020/myprofile/update';
  ngOnInit() {
    this.abc.getProfile().subscribe( data => {
      this.myp = data;
    });
  }
  edit() {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    return this.http.put(this.url, this.myp, {headers}).subscribe(data => {
      console.log(data);
      this.router.navigate(['/myprofile']);
    });
}
 toggle() {
    this.disabled = false;
 }
}
